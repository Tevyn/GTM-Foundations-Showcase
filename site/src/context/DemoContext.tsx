'use client';

import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react';
import { ViewState, OutputMeta, ParsedAnnotation } from '@/types';

interface DemoState {
  view: ViewState;
  companies: string[];
  companiesWithDocs: string[];
  selectedCompany: string;
  companyOutputs: OutputMeta[];
  selectedOutput: OutputMeta | null;
  v1Content: string;
  v2Content: string;
  annotations: ParsedAnnotation[] | null;
  revealCompany: string;
  loading: boolean;
}

type DemoAction =
  | { type: 'SET_VIEW'; view: ViewState }
  | { type: 'SET_COMPANIES'; companies: string[] }
  | { type: 'SET_COMPANIES_WITH_DOCS'; companies: string[] }
  | { type: 'SELECT_COMPANY'; company: string }
  | { type: 'SET_OUTPUTS'; outputs: OutputMeta[] }
  | { type: 'SELECT_OUTPUT'; output: OutputMeta | null }
  | { type: 'SET_CONTENT'; v1: string; v2: string; annotations: ParsedAnnotation[] | null }
  | { type: 'SET_REVEAL_COMPANY'; company: string }
  | { type: 'SET_LOADING'; loading: boolean };

const initialState: DemoState = {
  view: 'landing',
  companies: [],
  companiesWithDocs: [],
  selectedCompany: '',
  companyOutputs: [],
  selectedOutput: null,
  v1Content: '',
  v2Content: '',
  annotations: null,
  revealCompany: '',
  loading: false,
};

function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, view: action.view };
    case 'SET_COMPANIES':
      return { ...state, companies: action.companies };
    case 'SET_COMPANIES_WITH_DOCS':
      return { ...state, companiesWithDocs: action.companies };
    case 'SELECT_COMPANY':
      return { ...state, selectedCompany: action.company, revealCompany: action.company };
    case 'SET_OUTPUTS':
      return { ...state, companyOutputs: action.outputs };
    case 'SELECT_OUTPUT':
      return { ...state, selectedOutput: action.output };
    case 'SET_CONTENT':
      return { ...state, v1Content: action.v1, v2Content: action.v2, annotations: action.annotations };
    case 'SET_REVEAL_COMPANY':
      return { ...state, revealCompany: action.company };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

const DemoStateContext = createContext<DemoState>(initialState);
const DemoDispatchContext = createContext<Dispatch<DemoAction>>(() => {});

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, initialState);
  return (
    <DemoStateContext.Provider value={state}>
      <DemoDispatchContext.Provider value={dispatch}>
        {children}
      </DemoDispatchContext.Provider>
    </DemoStateContext.Provider>
  );
}

export function useDemoState() {
  return useContext(DemoStateContext);
}

export function useDemoDispatch() {
  return useContext(DemoDispatchContext);
}
