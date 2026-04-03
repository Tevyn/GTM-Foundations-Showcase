'use client';

import { useEffect } from 'react';

export function useKeyboard(onEscape: () => void) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'SELECT' || tag === 'INPUT') return;
        onEscape();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);
}
