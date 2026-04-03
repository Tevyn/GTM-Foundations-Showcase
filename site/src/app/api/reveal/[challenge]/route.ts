import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { CONTENT_DIR, dirEntries, isDir } from '@/lib/paths';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ challenge: string }> }
) {
  const { challenge } = await params;

  try {
    const entries = dirEntries(CONTENT_DIR);
    const foundationMap: Record<string, string> = {};
    const companies = new Set<string>();

    for (const entry of entries) {
      if (entry.name === 'output' || !isDir(CONTENT_DIR, entry.name)) continue;
      const company = entry.name;
      const demoDir = path.join(CONTENT_DIR, company, 'demo-output');
      let subs: fs.Dirent[];
      try { subs = fs.readdirSync(demoDir, { withFileTypes: true }); } catch { continue; }

      for (const sub of subs) {
        if (!isDir(demoDir, sub.name)) continue;
        const slugDir = path.join(demoDir, sub.name);

        let challenges: string[] = [];
        try {
          const meta = JSON.parse(fs.readFileSync(path.join(slugDir, 'meta.json'), 'utf8'));
          challenges = meta.challenges || [];
        } catch { continue; }

        if (!challenges.includes(challenge)) continue;

        let annContent: string;
        try { annContent = fs.readFileSync(path.join(slugDir, 'annotations.md'), 'utf8'); } catch { continue; }

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

        const v1Dir = path.join(CONTENT_DIR, company, 'v1');
        const v2Dir = path.join(CONTENT_DIR, company, 'v2');
        if (fs.existsSync(v1Dir) && fs.existsSync(v2Dir)) {
          companies.add(company);
        }
      }
    }

    const order = ['ICP', 'Problem-solution', 'Positioning', 'Messaging'];
    const foundations = Object.entries(foundationMap)
      .map(([area, text]) => ({ area, text }))
      .sort((a, b) => {
        const ai = order.indexOf(a.area);
        const bi = order.indexOf(b.area);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });

    return NextResponse.json({ challenge, foundations, companies: [...companies].sort() });
  } catch {
    return NextResponse.json({ challenge, foundations: [], companies: [] });
  }
}
