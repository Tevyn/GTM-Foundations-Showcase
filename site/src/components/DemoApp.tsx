'use client';

import { useEffect, useCallback } from 'react';
import { DemoProvider, useDemoState, useDemoDispatch } from '@/context/DemoContext';
import { fetchCompanies, fetchCompaniesWithDocs } from '@/lib/api';
import { useKeyboard } from '@/hooks/useKeyboard';
import Header from './Header';
import Landing from './Landing';
import AnnotationCards from './AnnotationCards/AnnotationCards';
import FullOutput from './FullOutput';
import Reveal from './Reveal/Reveal';

function DemoAppInner() {
  const state = useDemoState();
  const dispatch = useDemoDispatch();

  // Load initial data
  useEffect(() => {
    async function init() {
      const [companies, companiesWithDocs] = await Promise.all([
        fetchCompanies(),
        fetchCompaniesWithDocs(),
      ]);
      dispatch({ type: 'SET_COMPANIES', companies });
      dispatch({ type: 'SET_COMPANIES_WITH_DOCS', companies: companiesWithDocs });
      if (companies.length > 0 && !state.selectedCompany) {
        dispatch({ type: 'SELECT_COMPANY', company: companies[0] });
      }
    }
    init();
  }, []);

  // Escape key returns to landing
  const goToLanding = useCallback(() => {
    dispatch({ type: 'SET_VIEW', view: 'landing' });
    dispatch({ type: 'SELECT_OUTPUT', output: null });
  }, [dispatch]);

  useKeyboard(goToLanding);

  return (
    <>
      <Header />
      <main>
        {state.view === 'landing' && <Landing />}
        {state.view === 'breakdown' && <AnnotationCards />}
        {state.view === 'full' && <FullOutput />}
        {state.view === 'reveal' && <Reveal />}
      </main>
    </>
  );
}

export default function DemoApp() {
  return (
    <DemoProvider>
      <DemoAppInner />
    </DemoProvider>
  );
}
