import path from 'path';
import { OUTPUT_DIR, readFileIfExists } from '@/lib/paths';

export async function GET() {
  const content = readFileIfExists(path.join(OUTPUT_DIR, 'meta.json'));
  if (content === null) return new Response('Not found', { status: 404 });
  return new Response(content, {
    headers: { 'Content-Type': 'application/json' },
  });
}
