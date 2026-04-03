import { CONTENT_DIR, safePath, readFileIfExists } from '@/lib/paths';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ company: string; version: string; docType: string }> }
) {
  const { company, version, docType } = await params;

  if (!['v1', 'v2'].includes(version)) {
    return new Response('Bad request', { status: 400 });
  }
  if (!['icp', 'psf', 'positioning', 'messaging'].includes(docType)) {
    return new Response('Bad request', { status: 400 });
  }

  const filePath = safePath(CONTENT_DIR, company, version, `${docType}.md`);
  if (!filePath) return new Response('Bad request', { status: 400 });

  const content = readFileIfExists(filePath);
  if (content === null) return new Response('Not found', { status: 404 });

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
