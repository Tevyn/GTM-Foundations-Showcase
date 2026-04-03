const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const OUTPUT_DIR = path.join(__dirname, 'output');
const HTML_FILE = path.join(__dirname, 'index.html');
const DOCS_DIR = path.join(__dirname, '..', 'company-gtm-docs');

// SSE clients
const clients = new Set();

// Debounce file-change notifications
let debounceTimer = null;
fs.watch(OUTPUT_DIR, () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    for (const res of clients) {
      res.write('data: update\n\n');
    }
  }, 300);
});

function serveFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function sendJSON(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function safePath(base, ...segments) {
  const resolved = path.resolve(base, ...segments);
  if (!resolved.startsWith(path.resolve(base))) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  // Static files
  if (req.url === '/' || req.url === '/index.html') {
    serveFile(HTML_FILE, 'text/html', res);
    return;
  }

  // Browse API: list companies with demo outputs
  if (req.url === '/api/companies') {
    try {
      const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
      const companies = entries
        .filter(e => e.isDirectory())
        .filter(e => {
          const demoDir = path.join(DOCS_DIR, e.name, 'demo-output');
          try {
            const subs = fs.readdirSync(demoDir, { withFileTypes: true });
            return subs.some(s => s.isDirectory() &&
              fs.existsSync(path.join(demoDir, s.name, 'v1.md')) &&
              fs.existsSync(path.join(demoDir, s.name, 'v2.md')));
          } catch { return false; }
        })
        .map(e => e.name)
        .sort();
      sendJSON(res, companies);
    } catch {
      sendJSON(res, []);
    }
    return;
  }

  // Browse API: list all outputs grouped by business challenge
  if (req.url === '/api/challenges') {
    try {
      const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
      const challengeMap = {};
      const uncategorized = [];

      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const company = entry.name;
        const demoDir = path.join(DOCS_DIR, company, 'demo-output');
        let subs;
        try { subs = fs.readdirSync(demoDir, { withFileTypes: true }); } catch { continue; }

        for (const sub of subs) {
          if (!sub.isDirectory()) continue;
          const slugDir = path.join(demoDir, sub.name);
          if (!fs.existsSync(path.join(slugDir, 'v1.md')) || !fs.existsSync(path.join(slugDir, 'v2.md'))) continue;

          let prompt = sub.name;
          let challenges = [];
          const metaPath = path.join(slugDir, 'meta.json');
          try {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            prompt = meta.prompt || sub.name;
            challenges = meta.challenges || [];
          } catch {}

          const outputEntry = { company, slug: sub.name, prompt };

          if (challenges.length === 0) {
            uncategorized.push(outputEntry);
          } else {
            for (const ch of challenges) {
              if (!challengeMap[ch]) challengeMap[ch] = [];
              challengeMap[ch].push(outputEntry);
            }
          }
        }
      }

      // Return ordered by the canonical challenge order
      const orderedChallenges = [
        'Top of Funnel Growth',
        'Engagement & Conversion',
        'Retention',
        'Account Value',
      ];
      const result = [];
      for (const ch of orderedChallenges) {
        if (challengeMap[ch] && challengeMap[ch].length > 0) {
          result.push({ challenge: ch, outputs: challengeMap[ch].sort((a, b) => a.company.localeCompare(b.company) || a.prompt.localeCompare(b.prompt)) });
        }
      }
      // Include any non-canonical challenges
      for (const ch of Object.keys(challengeMap)) {
        if (!orderedChallenges.includes(ch)) {
          result.push({ challenge: ch, outputs: challengeMap[ch].sort((a, b) => a.company.localeCompare(b.company) || a.prompt.localeCompare(b.prompt)) });
        }
      }
      if (uncategorized.length > 0) {
        result.push({ challenge: 'Uncategorized', outputs: uncategorized.sort((a, b) => a.company.localeCompare(b.company) || a.prompt.localeCompare(b.prompt)) });
      }

      sendJSON(res, result);
    } catch {
      sendJSON(res, []);
    }
    return;
  }

  // Browse API: list companies that have foundation doc sets (v1 + v2)
  if (req.url === '/api/companies-with-docs') {
    try {
      const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
      const companies = entries
        .filter(e => e.isDirectory())
        .filter(e => {
          const v1Dir = path.join(DOCS_DIR, e.name, 'v1');
          const v2Dir = path.join(DOCS_DIR, e.name, 'v2');
          return fs.existsSync(v1Dir) && fs.existsSync(v2Dir);
        })
        .map(e => e.name)
        .sort();
      sendJSON(res, companies);
    } catch {
      sendJSON(res, []);
    }
    return;
  }

  // Browse API: list outputs for a company
  const outputsMatch = req.url.match(/^\/api\/companies\/([^/]+)\/outputs$/);
  if (outputsMatch) {
    const company = decodeURIComponent(outputsMatch[1]);
    const demoDir = safePath(DOCS_DIR, company, 'demo-output');
    if (!demoDir) { res.writeHead(400); res.end('Bad request'); return; }
    try {
      const subs = fs.readdirSync(demoDir, { withFileTypes: true });
      const outputs = subs
        .filter(s => s.isDirectory() &&
          fs.existsSync(path.join(demoDir, s.name, 'v1.md')) &&
          fs.existsSync(path.join(demoDir, s.name, 'v2.md')))
        .map(s => {
          let prompt = s.name;
          let challenges = [];
          const metaPath = path.join(demoDir, s.name, 'meta.json');
          try {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            prompt = meta.prompt || s.name;
            challenges = meta.challenges || [];
          } catch {}
          return { slug: s.name, prompt, challenges };
        })
        .sort((a, b) => a.prompt.localeCompare(b.prompt));
      sendJSON(res, outputs);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
    return;
  }

  // Browse API: get a specific output version
  const docMatch = req.url.match(/^\/api\/companies\/([^/]+)\/outputs\/([^/]+)\/(v1|v2)$/);
  if (docMatch) {
    const company = decodeURIComponent(docMatch[1]);
    const slug = decodeURIComponent(docMatch[2]);
    const version = docMatch[3];
    const filePath = safePath(DOCS_DIR, company, 'demo-output', slug, `${version}.md`);
    if (!filePath) { res.writeHead(400); res.end('Bad request'); return; }
    serveFile(filePath, 'text/plain', res);
    return;
  }

  // Browse API: get annotations for a specific output
  const annotationsMatch = req.url.match(/^\/api\/companies\/([^/]+)\/outputs\/([^/]+)\/annotations$/);
  if (annotationsMatch) {
    const company = decodeURIComponent(annotationsMatch[1]);
    const slug = decodeURIComponent(annotationsMatch[2]);
    const filePath = safePath(DOCS_DIR, company, 'demo-output', slug, 'annotations.md');
    if (!filePath) { res.writeHead(400); res.end('Bad request'); return; }
    serveFile(filePath, 'text/plain', res);
    return;
  }

  // Reveal API: aggregated reveal data for a challenge
  const revealMatch = req.url.match(/^\/api\/reveal\/(.+)$/);
  if (revealMatch) {
    const challenge = decodeURIComponent(revealMatch[1]);
    try {
      const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
      const foundationMap = {};
      const companies = new Set();

      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const company = entry.name;
        const demoDir = path.join(DOCS_DIR, company, 'demo-output');
        let subs;
        try { subs = fs.readdirSync(demoDir, { withFileTypes: true }); } catch { continue; }

        for (const sub of subs) {
          if (!sub.isDirectory()) continue;
          const slugDir = path.join(demoDir, sub.name);

          const metaPath = path.join(slugDir, 'meta.json');
          let challenges = [];
          try {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            challenges = meta.challenges || [];
          } catch { continue; }

          if (!challenges.includes(challenge)) continue;

          const annPath = path.join(slugDir, 'annotations.md');
          let annContent;
          try { annContent = fs.readFileSync(annPath, 'utf8'); } catch { continue; }

          const revealSplit = annContent.split(/^# Reveal$/m);
          if (revealSplit.length < 2) continue;

          const revealText = revealSplit[1].trim();
          const sections = revealText.split(/^## /m).filter(s => s.trim());
          for (const section of sections) {
            const lines = section.split('\n');
            const sectionName = lines[0].trim();
            if (sectionName !== challenge) continue;

            const body = lines.slice(1).join('\n');
            const foundationRegex = /\*\*([^*]+):\*\*\s*(.+?)(?=\n\*\*[^*]+:\*\*|\s*$)/gs;
            let m;
            while ((m = foundationRegex.exec(body)) !== null) {
              const area = m[1].trim();
              const text = m[2].trim();
              if (!foundationMap[area] || text.length > foundationMap[area].length) {
                foundationMap[area] = text;
              }
            }
          }

          // Track companies with foundation docs
          const v1Dir = path.join(DOCS_DIR, company, 'v1');
          const v2Dir = path.join(DOCS_DIR, company, 'v2');
          if (fs.existsSync(v1Dir) && fs.existsSync(v2Dir)) {
            companies.add(company);
          }
        }
      }

      const foundations = Object.entries(foundationMap).map(([area, text]) => ({ area, text }));
      const order = ['ICP', 'Problem-solution', 'Positioning', 'Messaging'];
      foundations.sort((a, b) => {
        const ai = order.indexOf(a.area);
        const bi = order.indexOf(b.area);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });

      sendJSON(res, { challenge, foundations, companies: [...companies].sort() });
    } catch (e) {
      console.error('Reveal error:', e);
      sendJSON(res, { challenge, foundations: [], companies: [] });
    }
    return;
  }

  // Foundation docs API
  const foundationDocMatch = req.url.match(/^\/api\/companies\/([^/]+)\/docs\/(v1|v2)\/(icp|psf|positioning|messaging)$/);
  if (foundationDocMatch) {
    const company = decodeURIComponent(foundationDocMatch[1]);
    const version = foundationDocMatch[2];
    const docType = foundationDocMatch[3];
    const filePath = safePath(DOCS_DIR, company, version, `${docType}.md`);
    if (!filePath) { res.writeHead(400); res.end('Bad request'); return; }
    serveFile(filePath, 'text/plain', res);
    return;
  }

  // Legacy push-based API (still used by gtm-demo SSE flow)
  if (req.url === '/api/meta') {
    serveFile(path.join(OUTPUT_DIR, 'meta.json'), 'application/json', res);
  } else if (req.url === '/api/v1') {
    serveFile(path.join(OUTPUT_DIR, 'v1.md'), 'text/plain', res);
  } else if (req.url === '/api/v2') {
    serveFile(path.join(OUTPUT_DIR, 'v2.md'), 'text/plain', res);
  } else if (req.url === '/api/annotations') {
    serveFile(path.join(OUTPUT_DIR, 'annotations.md'), 'text/plain', res);
  } else if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Display server running at http://localhost:${PORT}`);
});
