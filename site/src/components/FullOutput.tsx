'use client';

import { useDemoState } from '@/context/DemoContext';
import MarkdownRenderer from './shared/MarkdownRenderer';
import styles from './FullOutput.module.css';

export default function FullOutput() {
  const { v1Content, v2Content, selectedOutput, loading } = useDemoState();

  if (!selectedOutput) {
    return (
      <div className={styles.empty}>
        <p>Select an output to view</p>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${loading ? styles.fading : ''}`}>
      <div className={styles.columns}>
        <div className={styles.columnV1}>
          <div className={styles.colHeader}>
            <h2 className={styles.colLabel}>ORIGINAL</h2>
          </div>
          <div className={styles.colBody}>
            <MarkdownRenderer content={v1Content} />
          </div>
        </div>
        <div className={styles.columnV2}>
          <div className={styles.colHeaderV2}>
            <h2 className={styles.colLabelV2}>WITH GTM METHODOLOGY</h2>
          </div>
          <div className={styles.colBody}>
            <MarkdownRenderer content={v2Content} />
          </div>
        </div>
      </div>
    </div>
  );
}
