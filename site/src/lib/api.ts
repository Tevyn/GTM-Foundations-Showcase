import { OutputMeta, ChallengeGroup, RevealData } from '@/types';

export async function fetchCompanies(): Promise<string[]> {
  const res = await fetch('/api/companies');
  if (!res.ok) return [];
  return res.json();
}

export async function fetchCompaniesWithDocs(): Promise<string[]> {
  const res = await fetch('/api/companies-with-docs');
  if (!res.ok) return [];
  return res.json();
}

export async function fetchOutputs(company: string): Promise<OutputMeta[]> {
  const res = await fetch(`/api/companies/${encodeURIComponent(company)}/outputs`);
  if (!res.ok) return [];
  const outputs = await res.json();
  return outputs.map((o: Omit<OutputMeta, 'company'>) => ({ ...o, company }));
}

export async function fetchMarkdown(
  company: string,
  slug: string,
  file: 'v1' | 'v2' | 'annotations'
): Promise<string> {
  const res = await fetch(
    `/api/companies/${encodeURIComponent(company)}/outputs/${encodeURIComponent(slug)}/${file}`
  );
  if (!res.ok) return '';
  return res.text();
}

export async function fetchFoundationDoc(
  company: string,
  version: 'v1' | 'v2',
  docType: string
): Promise<string> {
  const res = await fetch(
    `/api/companies/${encodeURIComponent(company)}/docs/${version}/${docType}`
  );
  if (!res.ok) return '';
  return res.text();
}

export async function fetchChallenges(): Promise<ChallengeGroup[]> {
  const res = await fetch('/api/challenges');
  if (!res.ok) return [];
  return res.json();
}

export async function fetchReveal(challenge: string): Promise<RevealData | null> {
  const res = await fetch(`/api/reveal/${encodeURIComponent(challenge)}`);
  if (!res.ok) return null;
  return res.json();
}

// Legacy endpoints for SSE flow
export async function fetchLegacyMeta(): Promise<Record<string, unknown> | null> {
  const res = await fetch('/api/meta');
  if (!res.ok) return null;
  return res.json();
}

export async function fetchLegacyMarkdown(file: 'v1' | 'v2' | 'annotations'): Promise<string> {
  const res = await fetch(`/api/${file}`);
  if (!res.ok) return '';
  return res.text();
}
