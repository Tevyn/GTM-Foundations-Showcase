# GTM Foundations Showcase

## Project overview

Interactive demo platform showing why B2B SaaS GTM foundations (ICP, PSF, Positioning, Messaging) matter. Generates paired V1 (weak foundations) vs V2 (strong foundations) marketing and sales content for real companies, then presents them side-by-side with annotations highlighting the quality gap.

## Repo structure

```
company-gtm-docs/          # Per-company GTM doc sets
  {company}/
    v1/                     # V1 (broad/unfocused) foundation docs
    v2/                     # V2 (focused/buyer-specific) foundation docs
    demo-output/{slug}/     # Generated demo outputs (v1.md, v2.md, annotations.md, meta.json)

site/                       # Next.js display app (port 3001)
  src/app/                  # App Router pages and API routes
  src/components/           # React components
  src/lib/                  # Utilities, API helpers, paths
  scripts/copy-content.js   # Symlinks (dev) or copies (build) company-gtm-docs into site/content/

skills/                     # Claude Code skill definitions
  gtm-orchestrator/         # Full V1+V2 doc set generation workflow
  gtm-icp/                  # ICP generation
  gtm-psf/                  # Problem-Solution Fit generation
  gtm-positioning/          # Positioning generation
  gtm-messaging/            # Messaging generation
  gtm-demo/                 # Side-by-side V1 vs V2 demo runner
  demo-annotator/           # Annotate V1 vs V2 differences
  demo-start/               # Launch the display site
  marcomm-v1/, marcomm-v2/  # Marketing content generation
  sales-comms-v1/, sales-comms-v2/  # Sales communications generation
```

## First-time setup

```bash
cd site && npm install           # install dependencies (one-time)
```

## Key commands

```bash
# Start the Next.js display site
cd site && npm run dev          # runs on port 3001 (auto-symlinks content via predev hook)

# Build for production
cd site && npm run build
```

## Companies with doc sets

ambient-ai, launchpad, peoplegraph, signalstack, sortly, tonic-textual

## Conventions

- Generated content goes in `company-gtm-docs/{company}/demo-output/{slug}/`
- V1 = broad, unfocused foundations; V2 = focused, buyer-specific foundations
- The site reads content via symlinks in dev mode (`scripts/copy-content.js --dev`)
- Skills are defined in `skills/{skill-name}/SKILL.md`
- Demo outputs include `meta.json` with prompt, skill, and challenges metadata
- Annotations tag each difference with one of four business challenges: "Top of Funnel Growth", "Engagement & Conversion", "Retention", "Account Value"
