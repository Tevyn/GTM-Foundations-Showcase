'use client';

import { useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { formatCompanyName } from '@/lib/formatters';
import { fetchOutputs, fetchMarkdown } from '@/lib/api';
import { parseAnnotations } from '@/lib/parseAnnotations';
import styles from './Landing.module.css';

export default function Landing() {
  const { companies, selectedCompany } = useDemoState();
  const dispatch = useDemoDispatch();

  function handleCompanyChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({ type: 'SELECT_COMPANY', company: e.target.value });
  }

  async function startDemo() {
    const company = selectedCompany || companies[0];
    if (!company) return;

    dispatch({ type: 'SELECT_COMPANY', company });
    const outputs = await fetchOutputs(company);
    dispatch({ type: 'SET_OUTPUTS', outputs });

    if (outputs.length > 0) {
      const first = { ...outputs[0], company };
      dispatch({ type: 'SELECT_OUTPUT', output: first });
      dispatch({ type: 'SET_LOADING', loading: true });

      const [v1, v2, ann] = await Promise.all([
        fetchMarkdown(company, first.slug, 'v1'),
        fetchMarkdown(company, first.slug, 'v2'),
        fetchMarkdown(company, first.slug, 'annotations'),
      ]);
      const parsed = parseAnnotations(ann);
      dispatch({ type: 'SET_CONTENT', v1, v2, annotations: parsed });
      dispatch({ type: 'SET_VIEW', view: parsed ? 'breakdown' : 'full' });
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }

  return (
    <div className={styles.landing}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Keeping your options open is the most expensive GTM decision you&rsquo;re making.
        </h1>
        <p className={styles.subhead}>What you focus on matters.</p>

        <div className={styles.panels}>
          <div className={styles.panelV1}>
            <div className={styles.panelLabel}>ORIGINAL</div>
            <div className={styles.panelText}>
              Built from existing website copy, product pages, and public positioning.
              The same information your team and tools already have.
            </div>
          </div>
          <div className={styles.panelV2}>
            <div className={styles.panelLabel}>WITH GTM METHODOLOGY</div>
            <div className={styles.panelText}>
              Built from focused strategic foundations — a specific buyer, a defined
              competitive position, and messaging that gives teams language they can use.
            </div>
          </div>
        </div>

        <div className={styles.selectRow}>
          <select
            className={styles.companySelect}
            value={selectedCompany || companies[0] || ''}
            onChange={handleCompanyChange}
          >
            {companies.map(c => (
              <option key={c} value={c}>{formatCompanyName(c)}</option>
            ))}
          </select>
        </div>

        <button className={styles.cta} onClick={startDemo}>
          See the difference <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
