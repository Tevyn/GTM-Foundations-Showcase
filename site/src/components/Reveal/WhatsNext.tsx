'use client';

import { REVEAL_COPY } from '@/lib/constants';
import styles from './WhatsNext.module.css';

export default function WhatsNext() {
  return (
    <div className={styles.callout}>
      <div className={styles.label}>{REVEAL_COPY.whatsNextLabel}</div>
      <p className={styles.text}>{REVEAL_COPY.whatsNextText}</p>
    </div>
  );
}
