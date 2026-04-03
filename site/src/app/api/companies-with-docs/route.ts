import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { CONTENT_DIR, dirEntries, isDir } from '@/lib/paths';

export async function GET() {
  const entries = dirEntries(CONTENT_DIR);
  const companies = entries
    .filter(e => e.name !== 'output' && isDir(CONTENT_DIR, e.name))
    .filter(e => {
      const v1Dir = path.join(CONTENT_DIR, e.name, 'v1');
      const v2Dir = path.join(CONTENT_DIR, e.name, 'v2');
      return fs.existsSync(v1Dir) && fs.existsSync(v2Dir);
    })
    .map(e => e.name)
    .sort();
  return NextResponse.json(companies);
}
