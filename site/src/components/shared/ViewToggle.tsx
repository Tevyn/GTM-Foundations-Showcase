'use client';

import { ViewState } from '@/types';
import styles from './ViewToggle.module.css';

interface Props {
  currentView: ViewState;
  onToggle: (view: 'breakdown' | 'full') => void;
}

export default function ViewToggle({ currentView, onToggle }: Props) {
  return (
    <div className={styles.toggle} role="tablist" aria-label="View mode">
      <button
        className={`${styles.btn} ${currentView === 'breakdown' ? styles.active : ''}`}
        onClick={() => onToggle('breakdown')}
        role="tab"
        aria-selected={currentView === 'breakdown'}
      >
        Breakdown
      </button>
      <button
        className={`${styles.btn} ${currentView === 'full' ? styles.active : ''}`}
        onClick={() => onToggle('full')}
        role="tab"
        aria-selected={currentView === 'full'}
      >
        Full Output
      </button>
    </div>
  );
}
