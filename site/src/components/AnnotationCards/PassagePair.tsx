'use client';

import styles from './AnnotationCards.module.css';

interface Props {
  section: string;
  v1Passage: string;
  v2Passage: string;
}

export default function PassagePair({ section, v1Passage, v2Passage }: Props) {
  return (
    <div className={styles.passagePair}>
      {section && <div className={styles.sectionLabel}>{section}</div>}
      <div className={styles.passages}>
        <div className={styles.passageCol}>
          <span className={styles.colLabel}>ORIGINAL</span>
          <div className={styles.passageV1}>
            <p>{v1Passage}</p>
          </div>
        </div>
        <div className={styles.passageCol}>
          <span className={`${styles.colLabel} ${styles.colLabelV2}`}>WITH GTM METHODOLOGY</span>
          <div className={styles.passageV2}>
            <p>{v2Passage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
