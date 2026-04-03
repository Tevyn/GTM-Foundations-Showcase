'use client';

import { useState, useEffect } from 'react';
import { useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { fetchCompaniesWithDocs } from '@/lib/api';
import { FOUNDATION_AREAS, REVEAL_COPY } from '@/lib/constants';
import CompanyDropdown from '../shared/CompanyDropdown';
import FoundationCard from './FoundationCard';
import WhatsNext from './WhatsNext';
import styles from './Reveal.module.css';

export default function Reveal() {
  const { revealCompany, companiesWithDocs } = useDemoState();
  const dispatch = useDemoDispatch();
  const [localCompanies, setLocalCompanies] = useState<string[]>(companiesWithDocs);
  const [localCompany, setLocalCompany] = useState(revealCompany);

  useEffect(() => {
    async function load() {
      const companies = await fetchCompaniesWithDocs();
      setLocalCompanies(companies);
      dispatch({ type: 'SET_COMPANIES_WITH_DOCS', companies });
      if (!localCompany && companies.length > 0) {
        setLocalCompany(revealCompany || companies[0]);
      }
    }
    if (localCompanies.length === 0) {
      load();
    }
  }, []);

  useEffect(() => {
    if (revealCompany) setLocalCompany(revealCompany);
  }, [revealCompany]);

  function handleCompanyChange(company: string) {
    setLocalCompany(company);
    dispatch({ type: 'SET_REVEAL_COMPANY', company });
  }

  function backToExamples() {
    dispatch({ type: 'SET_VIEW', view: 'breakdown' });
  }

  if (localCompanies.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>No foundation docs available yet</div>
        <button className={styles.backBtn} onClick={backToExamples}>
          &larr; Back to examples
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{REVEAL_COPY.title}</h1>
        <p className={styles.subtitle}>{REVEAL_COPY.subtitle}</p>
      </div>

      <div className={styles.comparison}>
        <div className={styles.sideV1}>
          <div className={styles.sideLabel}>{REVEAL_COPY.v1Label}</div>
          <div className={styles.sideText}>{REVEAL_COPY.v1Text}</div>
        </div>
        <div className={styles.sideV2}>
          <div className={styles.sideLabel}>{REVEAL_COPY.v2Label}</div>
          <ul className={styles.sideList}>
            {REVEAL_COPY.v2Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.docsSection}>
        <h2 className={styles.docsHeadline}>{REVEAL_COPY.docsHeadline}</h2>
        <div className={styles.docsCompanySelect}>
          <CompanyDropdown
            companies={localCompanies}
            value={localCompany || localCompanies[0]}
            onChange={handleCompanyChange}
            label="Viewing docs for:"
          />
        </div>

        <div className={styles.cards}>
          {FOUNDATION_AREAS.map(f => (
            <FoundationCard
              key={f.key}
              foundation={f}
              company={localCompany || localCompanies[0]}
            />
          ))}
        </div>
      </div>

      <WhatsNext />

      <div className={styles.backRow}>
        <button className={styles.backBtn} onClick={backToExamples}>
          &larr; Back to examples
        </button>
      </div>
    </div>
  );
}
