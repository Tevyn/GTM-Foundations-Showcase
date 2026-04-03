'use client';

import { formatCompanyName, shortOutputName } from '@/lib/formatters';
import styles from './AnnotationCards.module.css';

interface Props {
  company: string;
  prompt: string;
}

export default function ContextHeader({ company, prompt }: Props) {
  return (
    <div className={styles.contextHeader}>
      <div className={styles.companyOverline}>{formatCompanyName(company)}</div>
      <h2 className={styles.contextHeadline}>
        Let&rsquo;s take a look at a {shortOutputName(prompt)}.
      </h2>
      <div className={styles.columnHeaders}>
        <span className={styles.colLabel}>ORIGINAL</span>
        <span className={`${styles.colLabel} ${styles.colLabelV2}`}>WITH GTM METHODOLOGY</span>
      </div>
    </div>
  );
}
