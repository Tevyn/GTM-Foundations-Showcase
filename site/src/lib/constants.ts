import { FoundationArea } from '@/types';

export const FOUNDATION_AREAS: FoundationArea[] = [
  {
    key: 'icp',
    display: 'ICP',
    context: 'The focused version committed to a specific buyer, trigger, and competitive situation — every downstream output reflects that decision.',
  },
  {
    key: 'psf',
    display: 'Problem-Solution',
    context: "The focused version went deep on how pain compounds in one buyer's world instead of covering symptoms across all of them.",
  },
  {
    key: 'positioning',
    display: 'Positioning',
    context: 'The focused version anchors in a point of view on why the status quo fails — not a feature list.',
  },
  {
    key: 'messaging',
    display: 'Messaging',
    context: 'The focused version gives the team and their tools language specific enough to execute on.',
  },
];

export const FOUNDATION_DISPLAY: Record<string, string> = {
  'ICP': 'ICP',
  'Problem-solution': 'Problem-Solution',
  'PSF': 'Problem-Solution',
  'Positioning': 'Positioning',
  'Messaging': 'Messaging',
};

export const FOUNDATION_DOC_TYPE: Record<string, string> = {
  'ICP': 'icp',
  'Problem-solution': 'psf',
  'Problem-Solution': 'psf',
  'PSF': 'psf',
  'Positioning': 'positioning',
  'Messaging': 'messaging',
};

export const CHALLENGE_ORDER = [
  'Top of Funnel Growth',
  'Engagement & Conversion',
  'Retention',
  'Account Value',
];

export const REVEAL_COPY = {
  title: 'The Foundational Difference',
  subtitle: 'The ask was identical. The strategic engine underneath produced two very different results.',
  v1Label: 'Where We Started',
  v1Text: "Pulled directly from the company's website and public product info. Messaging, positioning, and targeting match what's already out there — no changes, no additions.",
  v2Label: 'What Changed',
  v2Items: [
    'An informed decision on where to focus — and what to exclude',
    "Reasoning and context built around that specific buyer's reality",
    'Each foundation aligned to reinforce the same strategic direction',
    'Operationalized so the information gets used effectively',
  ],
  docsHeadline: 'See what each version was built on.',
  whatsNextLabel: "What's Next",
  whatsNextText: "Your team knows they need more focus. Making that call requires seeing the full GTM system and knowing where to commit. I find the strongest path, make those decisions with your leadership team, and operationalize them into everything downstream.",
};
