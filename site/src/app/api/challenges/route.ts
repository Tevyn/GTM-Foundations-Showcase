import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { CONTENT_DIR, dirEntries, isDir } from '@/lib/paths';
import { CHALLENGE_ORDER } from '@/lib/constants';

export async function GET() {
  const entries = dirEntries(CONTENT_DIR);
  const challengeMap: Record<string, { company: string; slug: string; prompt: string }[]> = {};
  const uncategorized: { company: string; slug: string; prompt: string }[] = [];

  for (const entry of entries) {
    if (entry.name === 'output' || !isDir(CONTENT_DIR, entry.name)) continue;
    const company = entry.name;
    const demoDir = path.join(CONTENT_DIR, company, 'demo-output');
    let subs: fs.Dirent[];
    try { subs = fs.readdirSync(demoDir, { withFileTypes: true }); } catch { continue; }

    for (const sub of subs) {
      if (!isDir(demoDir, sub.name)) continue;
      const slugDir = path.join(demoDir, sub.name);
      if (!fs.existsSync(path.join(slugDir, 'v1.md')) || !fs.existsSync(path.join(slugDir, 'v2.md'))) continue;

      let prompt = sub.name;
      let challenges: string[] = [];
      try {
        const meta = JSON.parse(fs.readFileSync(path.join(slugDir, 'meta.json'), 'utf8'));
        prompt = meta.prompt || sub.name;
        challenges = meta.challenges || [];
      } catch { /* use defaults */ }

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

  const sortOutputs = (a: { company: string; prompt: string }, b: { company: string; prompt: string }) =>
    a.company.localeCompare(b.company) || a.prompt.localeCompare(b.prompt);

  const result = [];
  for (const ch of CHALLENGE_ORDER) {
    if (challengeMap[ch]?.length) {
      result.push({ challenge: ch, outputs: challengeMap[ch].sort(sortOutputs) });
    }
  }
  for (const ch of Object.keys(challengeMap)) {
    if (!CHALLENGE_ORDER.includes(ch)) {
      result.push({ challenge: ch, outputs: challengeMap[ch].sort(sortOutputs) });
    }
  }
  if (uncategorized.length) {
    result.push({ challenge: 'Uncategorized', outputs: uncategorized.sort(sortOutputs) });
  }

  return NextResponse.json(result);
}
