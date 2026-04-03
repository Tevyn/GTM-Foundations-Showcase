import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { CONTENT_DIR, safePath, isDir } from '@/lib/paths';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ company: string }> }
) {
  const { company } = await params;
  const demoDir = safePath(CONTENT_DIR, company, 'demo-output');
  if (!demoDir) return new Response('Bad request', { status: 400 });

  try {
    const subs = fs.readdirSync(demoDir, { withFileTypes: true });
    const outputs = subs
      .filter(s => isDir(demoDir, s.name) &&
        fs.existsSync(path.join(demoDir, s.name, 'v1.md')) &&
        fs.existsSync(path.join(demoDir, s.name, 'v2.md')))
      .map(s => {
        let prompt = s.name;
        let challenges: string[] = [];
        const metaPath = path.join(demoDir, s.name, 'meta.json');
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
          prompt = meta.prompt || s.name;
          challenges = meta.challenges || [];
        } catch { /* use defaults */ }
        return { slug: s.name, prompt, challenges };
      })
      .sort((a, b) => a.prompt.localeCompare(b.prompt));
    return NextResponse.json(outputs);
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
