'use client';

import styles from './AnnotationCards.module.css';

interface Props {
  impact: string;
}

export default function ImpactStatement({ impact }: Props) {
  return (
    <div className={styles.impactStatement}>
      <p className={styles.impactText}>{impact}</p>
    </div>
  );
}
