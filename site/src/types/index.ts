export type ViewState = 'landing' | 'breakdown' | 'full' | 'reveal';

export interface OutputMeta {
  company: string;
  slug: string;
  prompt: string;
  challenges: string[];
}

export interface ParsedAnnotation {
  section: string;
  v1Passage: string;
  v2Passage: string;
  impact: string;
  challenges: string[];
  v1Note: string;
  v2Note: string;
  decision: string;
}

export interface FoundationArea {
  key: string;
  display: string;
  context: string;
}

export interface ChallengeGroup {
  challenge: string;
  outputs: OutputMeta[];
}

export interface RevealData {
  challenge: string;
  foundations: { area: string; text: string }[];
  companies: string[];
}
