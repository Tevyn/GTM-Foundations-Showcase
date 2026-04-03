export function formatCompanyName(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function shortOutputName(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes('cold outbound email') || p.includes('cold email')) return 'Cold Outbound Email';
  if (p.includes('one-pager') || p.includes('one pager')) return 'One-Pager';
  if (p.includes('competitive brief')) return 'Competitive Brief';
  if (p.includes('landing page')) return 'Landing Page';
  if (p.includes('blog post')) return 'Blog Post';
  if (p.includes('discovery call')) return 'Discovery Call Script';
  if (p.includes('talk track')) return 'Talk Track';
  if (p.includes('follow-up') || p.includes('follow up')) return 'Follow-Up Email';
  if (p.includes('call prep')) return 'Call Prep Brief';
  if (p.includes('sequence')) return 'Email Sequence';
  return prompt.length > 40 ? prompt.slice(0, 37) + '...' : prompt;
}
