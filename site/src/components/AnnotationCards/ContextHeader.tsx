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
        Compare two versions of a {shortOutputName(prompt).toLowerCase()}.
      </h2>
    </div>
  );
}
