'use client';

import { useRef, useEffect } from 'react';
import { useDemoState } from '@/context/DemoContext';
import SnapSection from './SnapSection';
import ContextHeader from './ContextHeader';
import PassagePair from './PassagePair';
import ImpactStatement from './ImpactStatement';
import OutputTransition from './OutputTransition';
import styles from './AnnotationCards.module.css';

export default function AnnotationCards() {
  const { annotations, selectedOutput, loading } = useDemoState();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when output changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [selectedOutput?.slug]);

  if (!annotations || !selectedOutput) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${loading ? styles.fading : ''}`}
    >
      <SnapSection>
        <ContextHeader
          company={selectedOutput.company}
          prompt={selectedOutput.prompt}
        />
      </SnapSection>

      {annotations.map((ann, i) => (
        <div key={i}>
          <SnapSection>
            <PassagePair
              section={ann.section}
              v1Passage={ann.v1Passage}
              v2Passage={ann.v2Passage}
            />
          </SnapSection>
          <SnapSection>
            <ImpactStatement impact={ann.impact} />
          </SnapSection>
        </div>
      ))}

      <SnapSection>
        <OutputTransition />
      </SnapSection>
    </div>
  );
}
