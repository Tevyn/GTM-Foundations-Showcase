'use client';

import { useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { shortOutputName } from '@/lib/formatters';
import CompanyDropdown from './shared/CompanyDropdown';
import ViewToggle from './shared/ViewToggle';
import styles from './Header.module.css';
import { fetchOutputs, fetchMarkdown } from '@/lib/api';
import { parseAnnotations } from '@/lib/parseAnnotations';
import { ViewState } from '@/types';

export default function Header() {
  const state = useDemoState();
  const dispatch = useDemoDispatch();
  const { view, companyOutputs, selectedOutput, companies, selectedCompany, companiesWithDocs, revealCompany } = state;

  const showControls = view === 'breakdown' || view === 'full';
  const showRevealSubBar = view === 'reveal';

  async function handleCompanyChange(company: string) {
    dispatch({ type: 'SELECT_COMPANY', company });
    const outputs = await fetchOutputs(company);
    dispatch({ type: 'SET_OUTPUTS', outputs });
    if (outputs.length > 0) {
      await selectOutput(outputs[0]);
    }
  }

  async function selectOutput(output: { company: string; slug: string; prompt: string; challenges: string[] }) {
    dispatch({ type: 'SELECT_OUTPUT', output });
    dispatch({ type: 'SET_LOADING', loading: true });
    const [v1, v2, ann] = await Promise.all([
      fetchMarkdown(output.company, output.slug, 'v1'),
      fetchMarkdown(output.company, output.slug, 'v2'),
      fetchMarkdown(output.company, output.slug, 'annotations'),
    ]);
    const parsed = parseAnnotations(ann);
    dispatch({ type: 'SET_CONTENT', v1, v2, annotations: parsed });
    // If no annotations, show full view
    if (!parsed && view === 'breakdown') {
      dispatch({ type: 'SET_VIEW', view: 'full' });
    }
    dispatch({ type: 'SET_LOADING', loading: false });
  }

  function handleViewToggle(v: 'breakdown' | 'full') {
    dispatch({ type: 'SET_VIEW', view: v });
  }

  function goToLanding() {
    dispatch({ type: 'SET_VIEW', view: 'landing' });
    dispatch({ type: 'SELECT_OUTPUT', output: null });
  }

  function handleRevealCompanyChange(company: string) {
    dispatch({ type: 'SET_REVEAL_COMPANY', company });
  }

  function openReveal() {
    dispatch({ type: 'SET_VIEW', view: 'reveal' as ViewState });
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <button className={styles.wordmark} onClick={goToLanding}>
          <span className={styles.wordmarkGtm}>GTM</span>
          <span className={styles.wordmarkFoundations}>Foundations</span>
        </button>

        {showControls && (
          <div className={`${styles.outputChips} hide-scrollbar`}>
            {companyOutputs.map(o => (
              <button
                key={o.slug}
                className={`${styles.chip} ${selectedOutput?.slug === o.slug ? styles.chipActive : ''}`}
                onClick={() => selectOutput(o)}
              >
                {shortOutputName(o.prompt)}
              </button>
            ))}
          </div>
        )}

        {showControls && (
          <button className={styles.revealBtn} onClick={openReveal}>
            Foundation docs <span className={styles.arrow}>&rarr;</span>
          </button>
        )}
      </div>

      {showControls && (
        <div className={styles.subBar}>
          <CompanyDropdown
            companies={companies}
            value={selectedCompany}
            onChange={handleCompanyChange}
          />
          <ViewToggle currentView={view} onToggle={handleViewToggle} />
        </div>
      )}

      {showRevealSubBar && companiesWithDocs.length > 0 && (
        <div className={styles.subBar}>
          <CompanyDropdown
            companies={companiesWithDocs}
            value={revealCompany || companiesWithDocs[0]}
            onChange={handleRevealCompanyChange}
          />
        </div>
      )}
    </header>
  );
}
