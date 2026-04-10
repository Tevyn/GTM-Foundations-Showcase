import path from 'path';
import { OUTPUT_DIR, readFileIfExists } from '@/lib/paths';

export async function GET() {
  const content = readFileIfExists(path.join(OUTPUT_DIR, 'v1.md'));
  if (content === null) return new Response('Not found', { status: 404 });
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
