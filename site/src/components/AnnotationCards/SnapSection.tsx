'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import styles from './AnnotationCards.module.css';

interface Props {
  children: ReactNode;
}

export default function SnapSection({ children }: Props) {
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

  return (
    <div
      ref={ref}
      className={`${styles.snapSection} ${visible ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
}
