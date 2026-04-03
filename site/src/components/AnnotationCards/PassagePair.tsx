'use client';

import MarkdownRenderer from '@/components/shared/MarkdownRenderer';
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
            <MarkdownRenderer content={v1Passage} />
          </div>
        </div>
        <div className={styles.passageCol}>
          <span className={`${styles.colLabel} ${styles.colLabelV2}`}>WITH GTM METHODOLOGY</span>
          <div className={styles.passageV2}>
            <MarkdownRenderer content={v2Passage} />
          </div>
        </div>
      </div>
    </div>
  );
}
