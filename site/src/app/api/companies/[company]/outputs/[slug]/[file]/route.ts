import { CONTENT_DIR, safePath, readFileIfExists } from '@/lib/paths';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ company: string; slug: string; file: string }> }
) {
  const { company, slug, file } = await params;

  if (!['v1', 'v2', 'annotations'].includes(file)) {
    return new Response('Bad request', { status: 400 });
  }

  const fileName = file === 'annotations' ? 'annotations.md' : `${file}.md`;
  const filePath = safePath(CONTENT_DIR, company, 'demo-output', slug, fileName);
  if (!filePath) return new Response('Bad request', { status: 400 });

  const content = readFileIfExists(filePath);
  if (content === null) return new Response('Not found', { status: 404 });

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
