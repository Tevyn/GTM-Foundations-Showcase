'use client';

import { useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { shortOutputName } from '@/lib/formatters';
import { fetchMarkdown } from '@/lib/api';
import { parseAnnotations } from '@/lib/parseAnnotations';
import styles from './AnnotationCards.module.css';

export default function OutputTransition() {
  const { companyOutputs, selectedOutput } = useDemoState();
  const dispatch = useDemoDispatch();

  const currentIdx = companyOutputs.findIndex(o => o.slug === selectedOutput?.slug);
  const prevOutput = currentIdx > 0 ? companyOutputs[currentIdx - 1] : null;
  const nextOutput =
    currentIdx >= 0 && currentIdx < companyOutputs.length - 1
      ? companyOutputs[currentIdx + 1]
      : null;

  async function selectOutput(slug: string) {
    const output = companyOutputs.find(o => o.slug === slug);
    if (!output) return;
    dispatch({ type: 'SELECT_OUTPUT', output });
    dispatch({ type: 'SET_LOADING', loading: true });
    const [v1, v2, ann] = await Promise.all([
      fetchMarkdown(output.company, output.slug, 'v1'),
      fetchMarkdown(output.company, output.slug, 'v2'),
      fetchMarkdown(output.company, output.slug, 'annotations'),
    ]);
    const parsed = parseAnnotations(ann);
    dispatch({ type: 'SET_CONTENT', v1, v2, annotations: parsed });
    if (!parsed) {
      dispatch({ type: 'SET_VIEW', view: 'full' });
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }

  function openReveal() {
    dispatch({ type: 'SET_VIEW', view: 'reveal' });
  }

  const isLast = nextOutput === null && currentIdx >= 0;

  return (
    <div className={styles.outputTransition}>
      <div className={styles.pagerRow}>
        <div className={styles.pagerSlot}>
          {prevOutput && (
            <button
              className={styles.pagerBtn}
              onClick={() => selectOutput(prevOutput.slug)}
            >
              <span className={styles.pagerEyebrow}>Previous</span>
              <span className={styles.pagerLabel}>
                <span className={styles.pagerArrow}>&larr;</span>{' '}
                {shortOutputName(prevOutput.prompt)}
              </span>
            </button>
          )}
        </div>

        <div className={`${styles.pagerSlot} ${styles.pagerSlotRight}`}>
          {nextOutput && (
            <button
              className={`${styles.pagerBtn} ${styles.pagerBtnRight}`}
              onClick={() => selectOutput(nextOutput.slug)}
            >
              <span className={styles.pagerEyebrow}>Next</span>
              <span className={styles.pagerLabel}>
                {shortOutputName(nextOutput.prompt)}{' '}
                <span className={styles.pagerArrow}>&rarr;</span>
              </span>
            </button>
          )}
          {isLast && (
            <button
              className={`${styles.pagerBtn} ${styles.pagerBtnRight}`}
              onClick={openReveal}
            >
              <span className={styles.pagerEyebrow}>Next</span>
              <span className={styles.pagerLabel}>
                View the foundation docs{' '}
                <span className={styles.pagerArrow}>&rarr;</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
