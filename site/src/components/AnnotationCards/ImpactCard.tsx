'use client';

import styles from './AnnotationCards.module.css';

interface Props {
  impact: string;
  evidence: string;
}

export default function ImpactCard({ impact, evidence }: Props) {
  return (
    <div className={styles.impactCard}>
      <p className={styles.impactText}>{impact}</p>
      {evidence && <p className={styles.evidenceText}>{evidence}</p>}
    </div>
  );
}
