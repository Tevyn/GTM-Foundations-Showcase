'use client';

import { ViewState } from '@/types';
import styles from './ViewToggle.module.css';

interface Props {
  currentView: ViewState;
  onToggle: (view: 'breakdown' | 'full') => void;
}

export default function ViewToggle({ currentView, onToggle }: Props) {
  return (
    <div className={styles.toggle}>
      <button
        className={`${styles.btn} ${currentView === 'breakdown' ? styles.active : ''}`}
        onClick={() => onToggle('breakdown')}
      >
        Breakdown
      </button>
      <button
        className={`${styles.btn} ${currentView === 'full' ? styles.active : ''}`}
        onClick={() => onToggle('full')}
      >
        Full Output
      </button>
    </div>
  );
}
