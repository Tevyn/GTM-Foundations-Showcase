---
name: gtm-orchestrator
description: >
  Orchestrate the full GTM Foundations workflow — from company context to complete V1 and V2
  doc sets (ICP, PSF, Positioning, Messaging). Takes homepage/product page context and a few
  clarifying answers, then spawns two agents: one to generate the V1 (broad, unfocused) doc
  set and one to generate the V2 (focused, niche-driven) doc set. Each agent runs the four
  pillar skills sequentially (ICP → PSF → Positioning → Messaging), managing the context.md
  chain internally. Use this skill whenever the user wants to: generate a full set of GTM
  foundation documents for a company, run the complete ICP → PSF → Positioning → Messaging
  sequence, create both V1 and V2 doc sets, or set up a company for the gtm-demo skill.
  Also trigger when the user mentions orchestrator, full GTM run, foundation docs, "run the
  whole thing," or wants to go from company context to complete GTM documentation.
---

# GTM Orchestrator Skill

This skill coordinates the full GTM Foundations document generation workflow. It collects company context, fills gaps through a short Q&A, collects the user's V2 niche direction, then spawns two agents — one for V1, one for V2 — that each run the four pillar skills in sequence. The result is two complete doc sets ready for the `gtm-demo` skill.

## Why the orchestrator exists

Running four pillar skills manually requires the user to manage context handoff, file paths, and mode-switching across eight sequential generations. The orchestrator handles all of that — the user's only job is to provide the initial context and the V2 niche direction. Everything else is automated.

## Interaction flow

### Gate 1: Context collection

The user provides company context. This typically comes as:
- Homepage and/or product page URLs or screenshots
- A brief description of what the company does
- Any additional context the user wants to share (competitive landscape, target market, etc.)

**Extract from the provided context before asking questions:**
- Company name
- Apparent market category
- Industries or segments mentioned
- Product capabilities visible
- Pricing/sizing signals (enterprise vs. SMB indicators)
- Technology or integration mentions
- Customer logos or case study references

Present a brief summary of what you extracted: "Here's what I'm seeing from the site: [summary]. Let me fill in the gaps."

### Gate 2: Gap-fill questions

Ask 3-5 clarifying questions — only things the provided context genuinely can't answer. Pick from this list based on what's missing:

1. "What market category would you put this product in?" (if the site doesn't make it obvious)
2. "Is this primarily enterprise, or do they span SMB up?" (if pricing/positioning signals are ambiguous)
3. "Who's the primary buyer — what role or department owns this purchase?" (if the site speaks to multiple audiences)
4. "What's the competitive landscape? Who do they lose deals to?" (if the site doesn't name competitors)
5. "Are there specific industries they're strongest in vs. just listed on the website?" (if the site lists many industries)
6. "Which product capability does the sales team demo most often?" (identifies the flagship for PSF)
7. "Is there an existing ROI story the company tells?" (grounds PSF quantification)

Don't ask what you can reasonably infer. The goal is speed — this should feel like a fast intake, not an interrogation.

### Gate 3: V2 niche direction

After collecting context and gap-fills, ask:

**"I have what I need to generate V1 docs. Before I start, give me a direction for V2 — a niche to focus on. This could be an industry ('enterprise healthcare'), a segment ('Series B dev tools companies'), a buyer ('VP Engineering at 50-200 person startups'), or a problem area ('alert fatigue for platform teams'). What direction do you want to take?"**

Wait for the user's response. This is the critical input that differentiates V2 from V1.

Once you have the niche direction, confirm it back: "Got it — V2 will focus on [niche]. Generating both doc sets now."

### Gate 4: Spawn two agents

Launch both agents in the same turn. Each agent runs the four pillar skills sequentially, managing its own context.md chain.

**Agent A (V1 — Broad Foundations):**

```
You are generating a complete V1 (broad, unfocused) GTM foundation doc set for {company name}.

Company context:
{extracted context from Gate 1}
{gap-fill answers from Gate 2}

You will run four skills in sequence. Each skill depends on the output of the previous one.
For each skill, read the SKILL.md, follow its V1 mode instructions, and save the output before moving to the next.

IMPORTANT: Each skill updates context.md — this is how context flows between skills.
Start by creating the company directory and an initial context.md with the company overview.

Base path for all files: {workspace}/company-gtm-docs/{company-name}/v1/

Sequence:

1. ICP (V1)
   - Read the gtm-icp skill: {path to gtm-icp/SKILL.md}
   - Mode: V1 (broad foundations)
   - Input: the company context above
   - Save: {base}/icp.md
   - Create and save: {base}/context.md (with Company Overview + ICP Context sections)

2. PSF (V1)
   - Read the gtm-psf skill: {path to gtm-psf/SKILL.md}
   - Mode: V1 (broad foundations)
   - Input: the icp.md and context.md you just created
   - Save: {base}/psf.md
   - Update: {base}/context.md (append PSF Context section)

3. Positioning (V1)
   - Read the gtm-positioning skill: {path to gtm-positioning/SKILL.md}
   - Mode: V1 (broad foundations)
   - Input: icp.md, psf.md, and context.md
   - Save: {base}/positioning.md
   - Update: {base}/context.md (append Positioning Context section)

4. Messaging (V1)
   - Read the gtm-messaging skill: {path to gtm-messaging/SKILL.md}
   - Mode: V1 (broad foundations)
   - Input: icp.md, psf.md, positioning.md, and context.md
   - Save: {base}/messaging.md
   - Update: {base}/context.md (append Messaging Context section)

Generate each document following the skill's V1 instructions exactly. The V1 docs should
reflect realistic "broad foundations" quality — not cartoonishly bad, but limited by the
lack of focus decisions. Don't ask any questions — all context has been provided.
```

**Agent B (V2 — Focused Foundations):**

```
You are generating a complete V2 (focused, niche-driven) GTM foundation doc set for {company name}.

Company context:
{extracted context from Gate 1}
{gap-fill answers from Gate 2}

V2 niche direction: {user's niche direction from Gate 3}

You will run four skills in sequence. Each skill depends on the output of the previous one.
For each skill, read the SKILL.md, follow its V2 mode instructions, and save the output before moving to the next.

IMPORTANT: Each skill updates context.md — this is how context flows between skills.
Start by creating the company directory and an initial context.md with the company overview.

Base path for all files: {workspace}/company-gtm-docs/{company-name}/v2/

Sequence:

1. ICP (V2)
   - Read the gtm-icp skill: {path to gtm-icp/SKILL.md}
   - Mode: V2 (focused foundations)
   - Niche: {user's niche direction}
   - Input: the company context above
   - Save: {base}/icp.md
   - Create and save: {base}/context.md (with Company Overview + ICP Context sections)

2. PSF (V2)
   - Read the gtm-psf skill: {path to gtm-psf/SKILL.md}
   - Mode: V2 (focused foundations)
   - Input: the icp.md and context.md you just created, with the focused ICP segment applied
   - Save: {base}/psf.md
   - Update: {base}/context.md (append PSF Context section)

3. Positioning (V2)
   - Read the gtm-positioning skill: {path to gtm-positioning/SKILL.md}
   - Mode: V2 (focused foundations)
   - Input: icp.md, psf.md, and context.md, with the focused ICP and quantified PSF applied
   - Save: {base}/positioning.md
   - Update: {base}/context.md (append Positioning Context section)

4. Messaging (V2)
   - Read the gtm-messaging skill: {path to gtm-messaging/SKILL.md}
   - Mode: V2 (focused foundations)
   - Input: icp.md, psf.md, positioning.md, and context.md
   - Save: {base}/messaging.md
   - Update: {base}/context.md (append Messaging Context section)

Generate each document following the skill's V2 instructions exactly. The V2 docs should
reflect what's possible with a specific niche: exclusionary ICP, quantified PSF, market-framed
positioning, and narrative-driven messaging. All grounded in the niche direction provided.
Don't ask any questions — all context has been provided.
```

### Gate 5: Confirmation

Once both agents complete, confirm to the user:

"Both doc sets are ready:
- V1 (broad foundations): `company-gtm-docs/{company}/v1/`
- V2 (focused foundations): `company-gtm-docs/{company}/v2/`

Each set contains: icp.md, psf.md, positioning.md, messaging.md, and context.md.

Ready for a live demo? Use the `gtm-demo` skill to run prompts against both doc sets."

## Resolving skill paths

The four pillar skills live in the skills directories. To find each SKILL.md:
- Check `.claude/skills/{skill-name}/SKILL.md` first (installed skills)
- Then check `.skills/skills/{skill-name}/SKILL.md` (custom skills)

Skills to locate:
- `gtm-icp` → the ICP skill
- `gtm-psf` → the PSF skill
- `gtm-positioning` → the Positioning skill
- `gtm-messaging` → the Messaging skill

Resolve all four paths before spawning agents. Pass absolute paths in the agent prompts.

## File output

```
company-gtm-docs/{company}/
├── v1/
│   ├── icp.md
│   ├── psf.md
│   ├── positioning.md
│   ├── messaging.md
│   └── context.md
└── v2/
    ├── icp.md
    ├── psf.md
    ├── positioning.md
    ├── messaging.md
    └── context.md
```

The orchestrator creates this structure. Each agent creates its version's directory and files.
The company name should be lowercase, hyphenated (e.g., "signal-stack" or "signalstack").

## Notes

**On timing:** Both agents run in parallel, but each agent runs its four skills sequentially (because each skill depends on the previous one's output). Total generation time is roughly the time for one four-skill sequence, not eight sequential generations.

**On pre-generation for demos:** The primary use case for this skill is generating doc sets in advance of a demo. Run it hours or days before the live conversation, review the output, and use `gtm-demo` during the actual meeting.

**On rerunning:** If you need to regenerate docs for a company that already has doc sets, the agents will overwrite existing files. If you want to preserve the originals, rename the company folder first.
