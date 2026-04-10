'use client';

import styles from './AnnotationCards.module.css';

interface Props {
  difference: string;
  revealed: boolean;
}

export default function DifferenceCallout({ difference, revealed }: Props) {
  return (
    <div className={styles.differenceSlot}>
      <div
        className={`${styles.differenceCallout} ${revealed ? styles.differenceRevealed : ''}`}
        aria-hidden={!revealed}
      >
        <div className={styles.differenceRule} />
        <div className={styles.differenceEyebrow}>The difference</div>
        <p className={styles.differenceText}>{difference}</p>
      </div>
      {!revealed && (
        <div className={styles.revealHint}>
          Press <kbd className={styles.kbdKey}>space</kbd> to reveal the difference
        </div>
      )}
    </div>
  );
}
