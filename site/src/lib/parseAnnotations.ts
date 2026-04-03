import { ParsedAnnotation } from '@/types';

export function parseAnnotations(raw: string): ParsedAnnotation[] | null {
  if (!raw || !raw.includes('> [!v1-passage]')) return null;

  const revealSplit = raw.split(/^# Reveal$/m);
  const annotationsPart = revealSplit[0];

  const blocks = annotationsPart.split(/^---$/m).filter(b => b.trim());
  const annotations: ParsedAnnotation[] = [];

  for (const block of blocks) {
    if (block.trim().startsWith('# ')) continue;

    const v1PassageMatch = block.match(/> \[!v1-passage\]\n((?:> .*\n?)*)/);
    const v2PassageMatch = block.match(/> \[!v2-passage\]\n((?:> .*\n?)*)/);
    const v1NoteMatch = block.match(/\*\*V1:\*\*\s*(.+)/);
    const v2NoteMatch = block.match(/\*\*V2:\*\*\s*(.+)/);
    const decisionMatch = block.match(/\*\*Decision:\*\*\s*(.+)/);
    const impactMatch = block.match(/\*\*Impact:\*\*\s*(.+)/);
    const challengeMatch = block.match(/\*\*Challenge:\*\*\s*(.+)/);
    const sectionMatch = block.match(/\*\*Section:\*\*\s*(.+)/);

    if (!v1NoteMatch || !v2NoteMatch || !impactMatch) continue;

    const stripBlockquote = (text: string) => text ? text.replace(/^> /gm, '').trim() : '';

    annotations.push({
      v1Passage: stripBlockquote(v1PassageMatch ? v1PassageMatch[1] : ''),
      v2Passage: stripBlockquote(v2PassageMatch ? v2PassageMatch[1] : ''),
      v1Note: v1NoteMatch[1].trim(),
      v2Note: v2NoteMatch[1].trim(),
      decision: decisionMatch ? decisionMatch[1].trim() : '',
      impact: impactMatch[1].trim(),
      challenges: challengeMatch ? challengeMatch[1].trim().split(/,\s*/) : [],
      section: sectionMatch ? sectionMatch[1].trim() : '',
    });
  }

  return annotations.length > 0 ? annotations : null;
}
