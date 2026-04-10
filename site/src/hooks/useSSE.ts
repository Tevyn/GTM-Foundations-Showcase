'use client';

import { useEffect, useRef } from 'react';

export function useSSE(onUpdate: () => void) {
  const callbackRef = useRef(onUpdate);
  callbackRef.current = onUpdate;

  useEffect(() => {
    let es: EventSource | null = null;
    let pollInterval: ReturnType<typeof setInterval> | null = null;

    try {
      es = new EventSource('/api/events');
      es.onmessage = () => {
        callbackRef.current();
      };
      es.onerror = () => {
        // Fall back to polling if SSE fails
        if (es) {
          es.close();
          es = null;
        }
        if (!pollInterval) {
          pollInterval = setInterval(() => {
            callbackRef.current();
          }, 2000);
        }
      };
    } catch {
      // SSE not supported, fall back to polling
      pollInterval = setInterval(() => {
        callbackRef.current();
      }, 2000);
    }

    return () => {
      if (es) es.close();
      if (pollInterval) clearInterval(pollInterval);
    };
  }, []);
}
