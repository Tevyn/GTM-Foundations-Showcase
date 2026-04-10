'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useDemoState } from '@/context/DemoContext';
import SnapSection from './SnapSection';
import ContextHeader from './ContextHeader';
import PassagePair from './PassagePair';
import ImpactStatement from './ImpactStatement';
import DifferenceCallout from './DifferenceCallout';
import ImpactCard from './ImpactCard';
import OutputTransition from './OutputTransition';
import styles from './AnnotationCards.module.css';

export default function AnnotationCards() {
  const { annotations, selectedOutput, loading } = useDemoState();
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const activeIdxRef = useRef<number | null>(null);

  // Reset reveals + scroll to top when output changes
  useEffect(() => {
    setRevealed(new Set());
    activeIdxRef.current = null;
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [selectedOutput?.slug]);

  // Track which difference section is currently active in the viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !annotations) return;

    const targets = container.querySelectorAll<HTMLElement>('[data-difference-idx]');
    if (targets.length === 0) {
      activeIdxRef.current = null;
      return;
    }

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.differenceIdx);
          ratios.set(idx, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestIdx: number | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, idx) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        });
        activeIdxRef.current = bestRatio > 0.5 ? bestIdx : null;
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [annotations, selectedOutput?.slug]);

  const tryReveal = useCallback((): boolean => {
    const idx = activeIdxRef.current;
    if (idx === null) return false;
    let didReveal = false;
    setRevealed((prev) => {
      if (prev.has(idx)) return prev;
      didReveal = true;
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
    return didReveal;
  }, []);

  // Keyboard listener: gate space/down/right when active section is unrevealed
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== ' ' && e.key !== 'ArrowDown' && e.key !== 'ArrowRight' && e.key !== 'PageDown') {
        return;
      }
      const idx = activeIdxRef.current;
      if (idx === null) return;
      if (revealed.has(idx)) return;
      e.preventDefault();
      tryReveal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [revealed, tryReveal]);

  if (!annotations || !selectedOutput) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${loading ? styles.fading : ''}`}
      role="region"
      aria-label="Annotation walkthrough"
    >
      <SnapSection dark={true}>
        <ContextHeader
          company={selectedOutput.company}
          prompt={selectedOutput.prompt}
        />
      </SnapSection>

      {annotations.map((ann, i) =>
        ann.difference ? (
          <React.Fragment key={i}>
            <SnapSection
              dark={false}
              differenceIdx={i}
              onClick={() => tryReveal()}
              clickable={!revealed.has(i)}
            >
              <div className={styles.passageImpactGroup}>
                <PassagePair
                  section={ann.section}
                  v1Passage={ann.v1Passage}
                  v2Passage={ann.v2Passage}
                />
                <DifferenceCallout
                  difference={ann.difference}
                  revealed={revealed.has(i)}
                />
              </div>
            </SnapSection>
            <SnapSection dark={true}>
              <ImpactCard impact={ann.impact} evidence={ann.evidence} />
            </SnapSection>
          </React.Fragment>
        ) : (
          <SnapSection key={i} dark={false}>
            <div className={styles.passageImpactGroup}>
              <PassagePair
                section={ann.section}
                v1Passage={ann.v1Passage}
                v2Passage={ann.v2Passage}
              />
              <ImpactStatement impact={ann.impact} />
            </div>
          </SnapSection>
        )
      )}

      <SnapSection dark={true} showChevron={false}>
        <OutputTransition />
      </SnapSection>
    </div>
  );
}
