'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import styles from './AnnotationCards.module.css';

interface Props {
  children: ReactNode;
  dark?: boolean;
  showChevron?: boolean;
}

export default function SnapSection({ children, dark, showChevron = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bgClass = dark ? styles.snapSectionDark : styles.snapSectionLight;

  return (
    <div
      ref={ref}
      className={`${styles.snapSection} ${bgClass} ${visible ? styles.visible : ''}`}
    >
      {children}
      {showChevron && <div className={styles.scrollChevron} />}
    </div>
  );
}
