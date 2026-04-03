import fs from 'fs';
import { OUTPUT_DIR } from '@/lib/paths';

export const dynamic = 'force-dynamic';

export async function GET() {
  const encoder = new TextEncoder();
  let interval: ReturnType<typeof setInterval> | null = null;
  let watcher: fs.FSWatcher | null = null;

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(':\n\n'));
      controller.enqueue(encoder.encode('retry: 5000\n\n'));

      let lastMtime = 0;
      try {
        const stat = fs.statSync(OUTPUT_DIR);
        lastMtime = stat.mtimeMs;
      } catch { /* output dir may not exist yet */ }

      interval = setInterval(() => {
        try {
          const stat = fs.statSync(OUTPUT_DIR);
          if (stat.mtimeMs > lastMtime) {
            lastMtime = stat.mtimeMs;
            controller.enqueue(encoder.encode('data: update\n\n'));
          }
        } catch { /* ignore */ }
      }, 500);

      try {
        let debounce: ReturnType<typeof setTimeout> | null = null;
        watcher = fs.watch(OUTPUT_DIR, () => {
          if (debounce) clearTimeout(debounce);
          debounce = setTimeout(() => {
            controller.enqueue(encoder.encode('data: update\n\n'));
          }, 300);
        });
      } catch { /* fs.watch not available */ }
    },
    cancel() {
      if (interval) clearInterval(interval);
      if (watcher) watcher.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
