'use client';

import { useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { shortOutputName } from '@/lib/formatters';
import { fetchMarkdown } from '@/lib/api';
import { parseAnnotations } from '@/lib/parseAnnotations';
import styles from './AnnotationCards.module.css';

export default function OutputTransition() {
  const { companyOutputs, selectedOutput } = useDemoState();
  const dispatch = useDemoDispatch();

  const remainingOutputs = companyOutputs.filter(
    o => o.slug !== selectedOutput?.slug
  );

  async function selectNext(slug: string) {
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

  return (
    <div className={styles.outputTransition}>
      {remainingOutputs.length > 0 && (
        <div className={styles.transitionOutputs}>
          <p className={styles.transitionLabel}>See another example:</p>
          <div className={styles.transitionChips}>
            {remainingOutputs.map(o => (
              <button
                key={o.slug}
                className={styles.transitionChip}
                onClick={() => selectNext(o.slug)}
              >
                {shortOutputName(o.prompt)}
              </button>
            ))}
          </div>
        </div>
      )}
      <button className={styles.revealCta} onClick={openReveal}>
        View the foundation docs &rarr;
      </button>
    </div>
  );
}
