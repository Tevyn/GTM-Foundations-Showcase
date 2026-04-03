---
name: marcomm-v1
description: >
  Generate V1 (typical startup) B2B marketing content — one-pagers, blog posts, and landing
  pages — that demonstrates what content looks like when built on broad, unfocused GTM
  foundations. Reads ONLY from V1 doc sets. Produces realistically mediocre content that
  reflects the limitations of weak foundations. Do not use this skill directly unless generating
  V1 content for a side-by-side comparison via gtm-demo.
---

# Marcomm V1 Skill — Typical Startup Content Generator

This skill produces V1 (weak-foundations) marketing content for B2B SaaS companies. It handles three content types: one-pagers, blog posts, and landing pages. It always produces a single output grounded exclusively in V1 foundation docs.

## How this skill fits the system

This skill is the V1 half of the marcomm split:

1. `gtm-orchestrator` generates V1 and V2 foundation doc sets (ICP, PSF, Positioning, Messaging)
2. `gtm-demo` spawns two agents — one calling this skill with V1 docs, one calling `marcomm-v2` with V2 docs
3. The side-by-side contrast happens at the demo layer, not inside this skill

This skill produces content the way most Series A-B startups actually do it — realistic representations of the typical mistakes. The weakness of V1 content flows naturally from the weakness of the V1 docs.

---

## Doc isolation rules — READ THIS FIRST

**These rules are non-negotiable.**

- **This skill reads ONLY from V1 docs.** The path is `company-gtm-docs/{company}/v1/`. Read `v1/icp.md`, `v1/psf.md`, `v1/positioning.md`, `v1/messaging.md`, and `v1/context.md`. Do NOT read, reference, or incorporate anything from the `v2/` directory.

- **Never cross-reference.** The V1 output must reflect the limitations of the V1 foundations — broad ICP, unquantified PSF, capability-focused positioning, feature-framed messaging. If V1 content comes out sounding focused, buyer-anchored, or specific, something went wrong.

- **The weakness of V1 content should flow naturally from the weakness of the V1 docs.** A broad ICP produces content for "everyone." Unfocused positioning produces generic claims. Feature-framed messaging produces feature-forward copy.

**Repeat this rule to yourself before generating:** "I am reading ONLY from the v1/ directory. The V1 ICP is broad. The V1 positioning is capability-focused. The V1 messaging is feature-framed. My output must reflect those limitations."

---

## Step 1: Gather context

### Company context — determine doc path

Locate the company's GTM docs in the workspace under `company-gtm-docs/{company}/`.

**Read ONLY these files:**
- `company-gtm-docs/{company}/v1/icp.md`
- `company-gtm-docs/{company}/v1/psf.md`
- `company-gtm-docs/{company}/v1/positioning.md`
- `company-gtm-docs/{company}/v1/messaging.md`
- `company-gtm-docs/{company}/v1/context.md` (if it exists)

From the V1 docs, extract and hold in working memory:
- The positioning statement (this is the spine — every piece of content traces back to it)
- Primary buyer role(s) and their evaluation criteria
- Top 2-3 pain points (V1 likely won't have quantified ones — that's by design)
- The value wedge and competitive contrast themes (if any)
- Proof points (metrics, customer stories, before/after data)
- Voice and tone guidance
- Buyer language patterns

**Notice what's MISSING from the V1 docs.** Broad ICP with no exclusion criteria? That's why V1 content doesn't signal audience. No quantified pain points? That's why V1 defaults to buzzwords. No value wedge? That's why V1 could belong to any competitor. Let the gaps in the docs drive the gaps in the content.

### Content parameters

Ask or infer:
1. **Content type:** One-pager, blog post, or landing page?
2. **Topic:** What specific subject, use case, capability, or theme?
3. **Audience:** If not already clear from the ICP — who specifically is reading this?
4. **Funnel stage:** If not stated, infer from the content type and topic. State your assumption.

---

## Step 2: Route to content type

Based on the content type, read the corresponding reference file for detailed structural guidance:

| Content type | Reference file | Output format |
|---|---|---|
| One-pager | `references/one-pager.md` | Markdown |
| Blog post | `references/blog-post.md` | Markdown |
| Landing page | `references/landing-page.md` | Markdown |

Read the reference file before writing. Each contains the structural template, examples of what good looks like, and type-specific rules.

**Always also read `references/v1-anti-patterns.md`.** The anti-patterns file includes content-type-specific V1 patterns (V1 Blog Post, V1 One-Pager, V1 Landing Page) that override the structural templates from the reference files.

---

## Step 3: Generate V1 content

### V1 voice and tone

The V1 messaging doc typically defines voice with generic brand adjectives ("innovative," "trusted," "bold") and no actionable guidance. Match this. V1 tone should be:

- **Corporate and polished** — grammatically correct, professionally formatted, but lacking personality or point of view
- **Vendor-centric** — "we" and "our" centered, describes the company and its capabilities rather than speaking to the buyer's situation
- **Safe and hedged** — avoids strong claims, uses qualifiers ("can help," "may improve," "enables organizations to"), sounds like it was written by committee
- **Jargon-forward** — relies on industry vocabulary and buzzwords as a substitute for specificity

### V1 content rules

Where strong content leads with the buyer's problem, V1 leads with the product or company. Where strong content is audience-specific, V1 is for "everyone." Where strong content uses concrete proof, V1 uses buzzwords. Where strong content has funnel-aligned CTAs, V1 defaults to "book a demo." Where strong content is scan-optimized, V1 is dense and essay-like.

The seven failure patterns (detailed in `references/v1-anti-patterns.md`) are:
1. Feature-forward framing
2. Generic, interchangeable language
3. No audience signal
4. Buzzword-heavy, jargon-dense copy
5. Feature-based competitive positioning
6. Misaligned CTAs — always "book a demo"
7. Dense, essay-style structure

A single piece of V1 content should exhibit 4-6 of these simultaneously. They're all symptoms of the same root cause: weak foundations.

### V1 credibility pattern: tech-stack specificity as a crutch

Teams with broad ICPs and unclear problem fit still need *something* specific to build credibility. Since they can't describe the buyer's problem precisely (because the ICP is too broad to know what the buyer's problem actually looks like), they reach for the most accessible source of specificity: **tool names, tech-stack details, capability lists, and industry metrics.** This is the V1 credibility play.

V1 content name-drops integrations, lists supported platforms, cites generic industry statistics ("enterprises generate an average of 10,000 alerts per day"), and references specific tools as proof of relevance. It sounds detailed on the surface — but the detail is about the *technology landscape*, not the *buyer's experience*.

This pattern should show up naturally in V1: the problem section (if it exists at all) references tools and metrics instead of describing a lived experience. The solution section lists capabilities with integration names. The proof section cites industry stats or ranges rather than customer-attributed outcomes.

### The feel of V1

V1 should read like content produced by a competent marketing team that hasn't done deep GTM strategy work. The writing is grammatically correct, professionally formatted, and uses appropriate industry vocabulary. It's the kind of content that passes a quick review ("looks good, ship it") but fails when tested against: Does the reader know who this is for? Can they articulate what makes this company different? Do they know what to do next — and does that action make sense given where they are in their journey?

V1 is not sloppy. It's professional-looking content that doesn't actually work. That's what makes it a powerful contrast to V2.

---

## Step 4: Write and deliver

1. Read the appropriate reference file for the content type
2. Read `references/v1-anti-patterns.md`
3. Read ONLY the V1 doc set (`v1/icp.md`, `v1/psf.md`, `v1/positioning.md`, `v1/messaging.md`, `v1/context.md`)
4. Extract context from V1 docs — note what's broad, vague, or missing
5. Draft the V1 content following V1 generation rules
6. Output as a clean markdown file — no meta-commentary, no annotations, no "this is the weak version" markers
7. Save to the path specified by the caller

The output should read as if a real team member produced it from the foundations available to them. The quality limitations should be self-evident.

---

## Output formatting

**Core principle: outputs are clean marketing content.** Each output must stand alone as a realistic, self-contained marketing asset. No annotations, no layout notes, no coaching commentary, no meta-text, no "Content notes" appendix.

**No extra labels or headings.** Do not add headings, titles, or labels that are not part of the format templates below. Specifically, never add:
- Version labels like "V1 —", "V2 —"
- Content type labels like "One-Pager — Product Overview"
- Any prefixed heading that describes what the output *is* rather than being part of the output itself
- `<!-- LAYOUT NOTE -->` comments or visual/design suggestions
- "Content notes" sections with funnel stage assumptions or placeholder callouts

The output should start directly with the format template's first element (e.g., the H1 headline for a one-pager).

If the user asks for a Word doc, follow the docx skill.

### Format by content type

#### One-pager (~300-450 words)

```
# [Product/Feature Name]: [Capability Description]

[Company] is a [category] platform that [capability statement].
[1-2 sentences of company/product description.]

## Features

**[Feature Name]**
[1-2 sentence capability description. What it does, not what the buyer gets.]

**[Feature Name]**
[1-2 sentence capability description.]

**[Feature Name]**
[1-2 sentence capability description.]

**[Feature Name]**
[1-2 sentence capability description.]

## Why [Company]

[2-3 sentences of generic differentiation. Broad claims, no specific proof.]

[Unattributed metric or vague proof point, e.g., "Trusted by leading organizations"]

**Ready to learn more?** [Contact us / Request a demo]
```

V1 characteristics: Product-name headline. Opens with company description. Features listed by name without outcome framing. Proof is vague or unattributed. Dense body. CTA is always "contact us" or "request a demo."

#### Blog post (~800-1200 words)

```
# [Broad Category Topic or Product-Focused Title]

## Introduction

[2-3 paragraphs setting up the broad topic. Industry-level observations,
no specific audience signal. 5-6 sentences per paragraph.]

## [Label H2: "The Challenge" / "Background" / "Overview"]

[Dense paragraph describing the problem at the category level.
Symptom-level, no mechanism. 4-6 sentences, no bullets.]

## [Label H2: "The Solution" / "Our Approach"]

[Product-centered description. What the product does, feature by feature.
"[Company] provides..." / "[Product] enables..." framing.
4-6 sentences per paragraph, minimal formatting.]

## [Label H2: "Benefits" / "Key Advantages"]

[Buzzword-heavy benefit claims. "Drive efficiency," "accelerate growth."
No specific proof, no customer examples. Dense paragraph.]

## Conclusion

[Summary paragraph restating the product's capabilities.
Disconnected CTA: "Book a demo today" or "Contact us to learn more."]
```

V1 characteristics: Label H2s ("Background," "Solution," "Conclusion"). Long paragraphs (4-6 sentences). Essay structure. No customer quotes, no specific data. CTA is "book a demo" regardless of topic. Reads like a textbook entry.

#### Landing page (~400-600 words of copy)

```
# [Product Name] — [Adjective] [Category] for [Broad Audience]
[Subhead describing the product, not the buyer's outcome.]

[CTA: Book a Demo / Get Started]

## [Product Feature Category 1]

[Feature description organized by product architecture.
What it does, how it works. 3-4 sentences, vendor-centric language.]

## [Product Feature Category 2]

[Feature description. Capability-focused, no problem-to-solution mapping.]

## [Product Feature Category 3]

[Feature description.]

## Trusted by Leading Organizations

[Logo bar with no context, or vague testimonial:
"Great product, highly recommend!" — Marketing Manager]

## Frequently Asked Questions

**[Question]**
[Answer — used as dumping ground for copy that didn't fit elsewhere.]

**[Question]**
[Answer]

[CTA: Book a Demo / Get Started]
```

V1 characteristics: Product-name hero. No problem section — jumps straight to features. Features organized by product architecture, not buyer priorities. Vague proof. FAQ as content dumping ground. Dense text. Same CTA everywhere.

### Visual hierarchy and readability

V1 outputs have deliberately weak visual hierarchy — this is part of the anti-pattern:

**All output types:**
- Dense paragraphs (4-6 sentences). Minimal use of bullets or whitespace.
- Bold used on feature names and the company name, not on buyer outcomes.
- Label-style headings ("Features," "Benefits," "Conclusion").

**Longer outputs (blog posts):**
- Essay-style structure with minimal formatting.
- No pull quotes, callouts, or visual breaks within sections.
- H2s are navigational labels, not benefit statements.

**Short outputs (one-pagers, landing pages):**
- Minimal whitespace between sections.
- Feature lists as the primary structural element.

---

## Reference files

Read the relevant reference files before generating any content:

- `references/one-pager.md` — Structure, template, and rules for marketing collateral one-pagers
- `references/blog-post.md` — Structure, routing by blog type, and rules for blog posts
- `references/landing-page.md` — Copy + structural guidance for landing pages including section components and layout recommendations
- `references/v1-anti-patterns.md` — **Always read this.** Describes the specific failure patterns to replicate for realistic "typical startup content" outputs
