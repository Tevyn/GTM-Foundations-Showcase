'use client';

import { useState, useRef, useCallback } from 'react';
import { FoundationArea } from '@/types';
import { fetchFoundationDoc } from '@/lib/api';
import MarkdownRenderer from '../shared/MarkdownRenderer';
import styles from './FoundationCard.module.css';

interface Props {
  foundation: FoundationArea;
  company: string;
}

export default function FoundationCard({ foundation, company }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [v1Doc, setV1Doc] = useState<string | null>(null);
  const [v2Doc, setV2Doc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const loadedForRef = useRef<string>('');

  const toggle = useCallback(async () => {
    if (!expanded) {
      // Lazy-load docs on first expand or when company changes
      const loadKey = `${company}:${foundation.key}`;
      if (loadedForRef.current !== loadKey) {
        setLoading(true);
        const [v1, v2] = await Promise.all([
          fetchFoundationDoc(company, 'v1', foundation.key),
          fetchFoundationDoc(company, 'v2', foundation.key),
        ]);
        setV1Doc(v1 || 'Not available');
        setV2Doc(v2 || 'Not available');
        loadedForRef.current = loadKey;
        setLoading(false);
      }
    }
    setExpanded(!expanded);
  }, [expanded, company, foundation.key]);

  // Reset when company changes
  const prevCompanyRef = useRef(company);
  if (prevCompanyRef.current !== company) {
    prevCompanyRef.current = company;
    loadedForRef.current = '';
    if (expanded) {
      setExpanded(false);
      setV1Doc(null);
      setV2Doc(null);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.badge}>{foundation.display}</div>
      <p className={styles.context}>{foundation.context}</p>
      <button className={styles.toggleBtn} onClick={toggle}>
        View the full {foundation.display} docs{' '}
        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>
          &#9662;
        </span>
      </button>
      <div className={`${styles.docPanel} ${expanded ? styles.docPanelOpen : ''}`}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.docPair}>
            <div className={styles.docCol}>
              <div className={styles.docColLabel}>Original</div>
              <div className={styles.docColContent}>
                <MarkdownRenderer content={v1Doc || ''} />
              </div>
            </div>
            <div className={styles.docCol}>
              <div className={styles.docColLabelV2}>With GTM methodology</div>
              <div className={styles.docColContent}>
                <MarkdownRenderer content={v2Doc || ''} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
