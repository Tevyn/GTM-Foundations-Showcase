'use client';

import { formatCompanyName } from '@/lib/formatters';
import styles from './CompanyDropdown.module.css';

interface Props {
  companies: string[];
  value: string;
  onChange: (company: string) => void;
  label?: string;
}

export default function CompanyDropdown({ companies, value, onChange, label }: Props) {
  const selectId = `company-select-${label ? label.replace(/\s+/g, '-').toLowerCase() : 'default'}`;

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label} htmlFor={selectId}>{label}</label>}
      <select
        id={selectId}
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label={label ? undefined : 'Select company'}
      >
        {companies.map(c => (
          <option key={c} value={c}>{formatCompanyName(c)}</option>
        ))}
      </select>
    </div>
  );
}
