import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { CONTENT_DIR, dirEntries, isDir } from '@/lib/paths';

export async function GET() {
  const entries = dirEntries(CONTENT_DIR);
  const companies = entries
    .filter(e => e.name !== 'output' && isDir(CONTENT_DIR, e.name))
    .filter(e => {
      const demoDir = path.join(CONTENT_DIR, e.name, 'demo-output');
      try {
        const subs = fs.readdirSync(demoDir, { withFileTypes: true });
        return subs.some(s => isDir(demoDir, s.name) &&
          fs.existsSync(path.join(demoDir, s.name, 'v1.md')) &&
          fs.existsSync(path.join(demoDir, s.name, 'v2.md')));
      } catch { return false; }
    })
    .map(e => e.name)
    .sort();
  return NextResponse.json(companies);
}
