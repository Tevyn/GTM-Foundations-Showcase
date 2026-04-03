---
name: marcomm-v2
description: >
  Generate V2 (foundation-driven) B2B marketing content — one-pagers, blog posts, and landing
  pages — grounded in focused GTM foundations (ICP, PSF, Positioning, Messaging). Produces
  audience-specific, problem-anchored, scan-optimized content with funnel-appropriate CTAs.
  Reads ONLY from V2 doc sets. Use this skill whenever the user wants to: write a one-pager,
  create a blog post, draft landing page copy, build marketing collateral, create content for
  a specific persona or use case, or produce any written marketing asset for a B2B SaaS company.
  Also trigger when the user mentions one-pager, blog post, landing page, marketing content,
  collateral, content brief, web copy, product page, feature page, campaign content, content
  creation, "write something about," or "create content for."
---

# Marcomm V2 Skill — Foundation-Driven B2B Marketing Content Generator

This skill produces V2 (strong-foundations) marketing content for B2B SaaS companies (Series A-B, targeting VP+ buyers). It handles three content types: one-pagers, blog posts, and landing pages. It always produces a single output grounded exclusively in V2 foundation docs.

## How this skill fits the system

This skill is the V2 half of the marcomm split:

1. `gtm-orchestrator` generates V1 and V2 foundation doc sets (ICP, PSF, Positioning, Messaging)
2. `gtm-demo` spawns two agents — one calling `marcomm-v1` with V1 docs, one calling this skill with V2 docs
3. This skill can also run **standalone**, producing V2-quality content directly

V2 produces content the way it should be done: problem-anchored, audience-specific, scan-optimized, with funnel-appropriate CTAs. V2 reads the V2 foundation docs and grounds every piece in the company's focused positioning, buyer language, and value wedge.

---

## Doc isolation rules — READ THIS FIRST

**These rules are non-negotiable.**

- **This skill reads ONLY from V2 docs.** The path is `company-gtm-docs/{company}/v2/`. Read `v2/icp.md`, `v2/psf.md`, `v2/positioning.md`, `v2/messaging.md`, and `v2/context.md`. Do NOT read, reference, or incorporate anything from the `v1/` directory.

- **When no GTM docs exist** (user provides context directly), default to V2 quality. Work with what the user provides. If their answers are thin, flag in the output where proof points or specificity would strengthen the content.

**Repeat this rule to yourself before generating:** "I am reading ONLY from the v2/ directory. The V2 ICP is focused and exclusionary. The V2 positioning is market-framed. The V2 messaging is narrative-driven. My output must leverage that specificity."

### What to pull from each foundation doc

Draw deeply on the V2 foundation documents. Every output should trace back to specific sections of these docs — not just reference them conceptually.

**ICP (icp.md) — the audience and language engine:**
- **Primary Segment / Firmographics** → Informs the specificity of your audience framing. Don't put segment labels in copy — use the segment knowledge to describe the reader's world accurately. Knowing they're "Series B-D with 100-1,500 employees" means you describe the scaling pain, tool sprawl, and team dynamics that only exist at that stage. The reader should think "this is about me" without seeing their segment label.
- **Buyer Roles table** → Match content tone and focus to the specific role. A one-pager for a VP Engineering reads differently than one for a CTO. Use their evaluation criteria to prioritize which benefits to lead with.
- **Pain Points section** → Source material for problem-first openings. Use the buyer's language for pain, not product language. These are what make the reader recognize their own situation in the first 2-3 sentences.
- **Buying Triggers** → Informs the "why now" urgency framing in blog posts and the tension angle in landing page problem sections.
- **Negative ICP** → Sharpens who the content is NOT for, which makes the targeting feel more specific and credible.

**PSF (psf.md) — the proof and credibility engine:**
- **Pain (Specific) subsections** → The mechanism-level descriptions of buyer workflows feed directly into the problem section of every content type. These describe the specific activity that burns time, the sequence of events — not just the symptom. This is what makes the reader think "this is about me."
- **Impact (Quantified) subsections** → Dollar figures and FTE waste for proof bars (one-pagers), "what it's costing" framing (landing pages), and supporting evidence in blog posts. Use sparingly in body text — primarily in proof sections and solution outcome statements.
- **Proof Points subsections** → Customer stories with before/after metrics. Raw material for the proof bar, customer quotes, and inline evidence. Mix quantitative proof (metrics) with qualitative proof (quotes, stories) — don't over-index on numbers.
- **Objections subsections** → Address these inline, especially in landing pages where "no FAQ sections" is the rule. Know what the reader is likely thinking and preempt it.
- **Persona-specific or situation-specific sub-mappings** → When the PSF includes pain or proof mapped to a specific persona or situation, use those for more targeted content. A one-pager for a VP Engineering should pull from the VP Engineering-specific pain and proof, not the generic problem area.

**Positioning (positioning.md) — the differentiation engine:**
- **Value Wedge** → The structural differentiator that should show through the content implicitly. The value wedge shapes the solution section — framing what the product does in terms the competitor can't claim.
- **How Buyers Evaluate Alternatives** → Informs the "conventional wisdom is wrong" tension in blog post openings and the implicit contrast in landing page problem sections. Name the typical approach and why it falls short.
- **Market Frame of Reference** → Defines the category the content operates in. The headline and subhead should place the reader in this frame.
- **Positioning Statement** → The spine. Every content piece should be traceable back to this statement, even if it never appears verbatim.

**Messaging (messaging.md) — the narrative and voice engine:**
- **Messaging Pillars** → Each pillar can anchor a different content piece or a different section within a piece. A one-pager's three benefit pillars should map to the messaging pillars. A blog post can go deep on one pillar.
- **The Story (narrative arc: Problem → Why Now → Promise)** → This structure directly maps to the content flow of landing pages and one-pagers. Problem section = Act 1. Urgency/cost framing = Act 2. Solution section = Act 3.
- **Voice & Tone** → Company-specific voice guidance overrides the skill-level defaults in Rule 8. Always check the messaging doc first.
- **Buyer Language Patterns table** → Use the "what buyers say" column in problem sections. Use the "what we should say" column in solution sections. Never use the "what we were saying" column.
- **Language to Avoid** → Hard constraint. Cross-check every draft against this list.
- **Talk Track Guidance** → The "what do you do?" answer is a strong source for boilerplate and subhead language.

**Context (context.md) — the orientation layer:**

Context.md is a handoff document between skills — it provides a quick orientation on what the company does and which niche they're targeting. It does NOT contain unique information. Use it to get your bearings, then go to the core docs for the actual substance:
- **Company Overview** → Quick orientation on what the company does and the product's core capabilities.
- **V2 Niche Direction** → Read this first to anchor your understanding of who you're writing for, then go to positioning.md for the full market frame and ICP for the detailed segment definition.
- **Pain patterns and consequence chains** → These are summarized here for handoff purposes. The detailed, authoritative versions live in the PSF doc — always pull from PSF, not context.md.
- **Competitive landscape** → Summary pointers. The full competitive framing lives in positioning.md.
- **Qualification signals** → Summary pointers. The detailed frameworks live in ICP (qualification framework section) and messaging (buyer language patterns).

### How foundations compound

The four foundation areas aren't independent — they compound. A niche ICP is the root that makes everything else possible:

1. **Niche ICP → you describe the reader's world without naming their segment.** A narrow ICP means you know the scaling pain, the tool sprawl, the team dynamics — you write about their situation so accurately they feel understood, without ever labeling them.
2. **Quantified PSF → you prove impact with evidence, not vague claims.** You have specific metrics, customer stories, and dollar figures — so you can back assertions with proof instead of buzzwords.
3. **Defensible positioning → a competitor can't swap their logo onto your content.** The value wedge and market frame make your content structurally different from what anyone else could write.
4. **Buyer-anchored messaging → consistent voice and narrative across every piece.** Pillars, narrative arc, and language patterns ensure that a one-pager, blog post, and landing page all feel like they come from the same company with the same point of view.

**This cascade is the core mechanism that enables V2 quality.** When the output feels generic or interchangeable, trace back to which foundation is underutilized.

---

## Step 1: Gather context

### Company context — determine doc path

**If GTM foundation docs exist (the standard path):**

Locate the company's GTM docs in the workspace under `company-gtm-docs/{company}/`.

**Read ONLY these files:**
- `company-gtm-docs/{company}/v2/icp.md`
- `company-gtm-docs/{company}/v2/psf.md`
- `company-gtm-docs/{company}/v2/positioning.md`
- `company-gtm-docs/{company}/v2/messaging.md`
- `company-gtm-docs/{company}/v2/context.md` (if it exists)

From the V2 docs, extract and hold in working memory:
- The positioning statement (this is the spine — every piece of content traces back to it)
- Primary buyer role(s) and their evaluation criteria
- Top 2-3 quantified pain points with impact data
- The value wedge and competitive contrast themes
- Proof points (metrics, customer stories, before/after data)
- Voice and tone guidance
- Buyer language patterns (how buyers describe the problem vs. how the company describes it)

**If no GTM docs exist (user provides context directly):**

Ask the user for:
1. What does the company do? (one sentence — product, category, primary buyer)
2. Who is this content for? (role, company type, what they care about)
3. What problem does the product solve for this buyer? (in the buyer's words, not product language)
4. What makes this company different from alternatives? (why this solution vs. others or vs. doing nothing)
5. Any proof points? (metrics, customer results, third-party validation)

Work with what you have — but flag in the output where proof points or specificity would strengthen the content.

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

---

## Step 3: Generate V2 content — universal quality rules

These rules apply to every V2 content type. They are not optional.

### 1. Problem-first, always

Every piece of content opens with the buyer's problem — not the product, not the company, not a feature. The reader should recognize their own situation in the first 2-3 sentences. If you catch yourself writing "We offer..." or "[Company] is a..." in the opening, stop and rewrite.

Pull problem language from PSF Pain (Specific) subsections — these describe the mechanism-level workflows that make the reader feel understood. Use the buyer's own words from the ICP Pain Points section.

The reason this matters: B2B buyers don't care about your product. They care about their problem. If the content doesn't make them feel understood in the first few seconds, they leave. Leading with the problem earns the right to talk about the solution.

### 2. Audience-specific — never "for everyone"

Every output must make it clear who it's for. Not just industry — role, seniority, and what keeps them up at night. "For marketing teams" is too broad. "For demand gen leaders at B2B SaaS companies spending $50K+/month on paid channels who can't attribute pipeline to campaigns" is specific enough.

If the V2 docs define a focused ICP, use it. If the user provides a vague audience, push for specificity or make a defensible assumption and state it.

**Critical: Use the ICP to inform how you write — don't put ICP data in the copy.** The ICP tells you *who* you're talking to so you can speak their language and reference their world. It does NOT belong in the content itself. Never write "engineering teams at Series B-D companies" on a landing page — that's using the ICP *at* the reader instead of *for* them. Instead, use your knowledge that they're Series B-D to describe their specific situation: the scaling pain, the tool sprawl, the team dynamics that only exist at that stage. The reader should think "this is about me" without ever seeing their segment label.

### 3. Positioning shows through the content

The company's positioning — its market frame, value wedge, and competitive contrast — should be apparent in the content even if it's never stated explicitly. Ground this in the Value Wedge and Market Frame of Reference from positioning.md. A reader should finish the piece knowing what category the company plays in, what makes it different, and why it wins. This is especially critical for one-pagers and landing pages.

### 4. Concrete over clever

Every assertion must be supported with evidence — metrics from PSF Impact (Quantified) subsections, customer quotes from PSF Proof Points, or industry stats. Use the right type of proof for the context: "Reduces de-identification time by 70%" beats "dramatically improves efficiency." "Used by 3 of the top 5 US health systems" beats "trusted by leading organizations." A strong customer quote can be more credible than a metric when it describes the transformation in the buyer's own words. If you don't have specific proof, say what kind of evidence would go here and flag it for the user to fill in.

**Build credibility through problem understanding, not tech-stack specificity.** V2 earns trust by describing the buyer's situation so accurately they feel understood — not by name-dropping tools or rattling off integration lists. "A database timeout triggers a Datadog alert, a CloudWatch latency alarm, and a Prometheus rule" is tech-stack credibility — it sounds specific but it's just listing products. Compare: "The same failure fires in three tools at once, and your on-call engineer has no idea which alert is the root cause and which are symptoms." The second version demonstrates understanding of the *experience*, which is what builds real credibility.

**Metrics placement:** Use quantified metrics sparingly in body text. Metrics belong primarily in the proof section and as supporting evidence within solution outcome statements. In body copy, describe the *experience* of the problem and let the proof section carry the numbers.

### 4b. Customer quotes as proof

Include 1-2 customer quotes as part of the proof section. Quotes should speak to the **problem and transformation** — not just product satisfaction.

**What makes a strong customer quote:**
- Describes the *before* state and the *after* state in the customer's own words
- Includes specific outcomes or metrics embedded naturally ("we went from X to Y")
- Shows the customer's reasoning or what surprised them
- Reads like something a real person would say in a conversation, not a marketing blurb

**What makes a weak quote:**
- Generic praise ("Great product, highly recommend")
- Only talks about the product, not the customer's situation
- Sounds written by marketing
- No specifics — just sentiment

When writing placeholder quotes (for companies without real testimonials), write them in the voice of the buyer persona from the ICP. Ground them in the specific problems from the PSF Proof Points and Pain (Specific) subsections.

### 5. Funnel-aligned CTAs — every output, every time

**Every piece of content must include at least one CTA. No exceptions.** Content without a CTA is a dead end.

Every piece of content sits somewhere in the buyer's journey. The CTA must match the stage — never use a hard-sell CTA on top-of-funnel educational content.

**Awareness → Consideration:** CTAs into deeper resources — guides, webinars, diagnostic tools. Examples: "Get the playbook," "See the framework," "Take the assessment."

**Consideration → Decision:** Product-specific proof — case studies, interactive demos, comparison pages. Examples: "See how [customer] did it," "Compare approaches," "Watch the product tour."

**Decision → Purchase:** Frictionless next steps — pricing, demo booking, trial signup. Examples: "Talk to an expert," "Start a free pilot," "Get a custom ROI estimate."

When writing CTAs, assume that supporting resources exist. Write the CTA copy as if they do.

**CTA minimums by content type:**
- **Landing page:** 2-3 CTAs (hero + mid-page + footer), consistent primary CTA copy
- **One-pager:** 1-2 CTAs (primary action + optional secondary), placed at the bottom
- **Blog post:** 1 CTA minimum — inline or end-of-post, matched to the content's funnel stage

### 6. Scan-optimized structure

Most people don't read — they skim. Structure every piece of content in three layers:

**At-a-glance layer** (for the 5-second scan):
- Clear, outcome-oriented H1 that states what this is and who it's for
- Descriptive subhead that reinforces the value and narrows the promise
- Above-the-fold CTA aligned to the content's funnel stage

**Skim layer** (for F-pattern and layer-cake readers):
- H2/H3s that communicate a benefit or question — not labels. "Why revenue leaders are rethinking attribution" not "Background."
- Short paragraphs (2-4 sentences max) and bullets for key info extraction
- Front-load each section — put the key point in the first 1-2 sentences

**Deep-read layer** (for committed readers):
- Detail, examples, and proof within sections — but each section stays scoped to one idea
- Pull quotes, callout boxes, or "key takeaway" markers to re-surface the core point

### 7. Messaging resonance principles

These five principles (from Wynter's messaging resonance framework) apply to all V2 content:

- **Clarity:** Can a reader understand the core message in under 10 seconds? No jargon without definition, no ambiguous pronouns.
- **Benefit-focus:** Every claim answers "so what?" from the buyer's perspective.
- **Engagingness:** The content earns attention — use specificity, tension, stakes, or unexpected framing.
- **Comprehensiveness:** The reader finishes feeling they got what they needed.
- **Expertise:** The content signals deep understanding of the buyer's world.

### 8. Voice and tone

Match the voice from the company's V2 messaging doc when available. When no messaging doc exists, default to:

- **Confident and direct.** No hedging ("we believe," "it's possible that," "may help"). State things plainly.
- **Human-centered.** Write for a person, not a persona. Use "you" and "your."
- **Concrete, not corporate.** Avoid: synergy, leverage (as a verb), cutting-edge, next-generation, robust, seamless, holistic, end-to-end (unless it means something specific in context).
- **Earned authority.** Sound like someone who has done this work, not someone selling a product.

### 9. Earn attention — be concise and hold it

V2 content must earn the visitor's time with every section. Rules:

- **Problem section: 2 paragraphs max for landing pages.** Every sentence must advance the reader's recognition of their own pain.
- **Short paragraphs everywhere.** 1-3 sentences. Single-sentence paragraphs for emphasis.
- **No FAQ sections on landing pages.** Address objections inline.
- **Every section earns the next scroll.** Problem → urgency. Solution → relief. Proof → belief. CTA → action.
- **Write tight, then tighten.** After drafting, read every sentence and ask: "Does this add something the reader needs to keep going?"

### 10. Avoid the "sounds like everyone else" trap

Before finalizing any V2 piece, pressure-test: could a competitor put their logo on this and it would still make sense? If yes, it's too generic. Look for:
- Claims that are true of every company in the category
- Capability descriptions instead of outcome descriptions
- Missing specificity — no numbers, no named constraints, no buyer language
- Buzzword density — count the jargon per paragraph and thin it

### Output verification checklist

Before finalizing any output, verify:
- [ ] Does the opening describe the reader's problem in their language (from ICP Pain Points + PSF Pain Specific)?
- [ ] Can I trace each benefit pillar to a messaging pillar or PSF problem area?
- [ ] Are assertions supported with evidence — metrics, customer quotes, or industry stats (from PSF)?
- [ ] Is the voice consistent with the messaging doc's Voice & Tone guidance?
- [ ] Could a competitor swap their logo onto this? (If yes, sharpen positioning)
- [ ] Is the CTA matched to the funnel stage?

---

## Step 4: Write and deliver

1. Read the appropriate reference file for the content type
2. Read ONLY the V2 doc set (`v2/icp.md`, `v2/psf.md`, `v2/positioning.md`, `v2/messaging.md`, `v2/context.md`)
3. Extract context from V2 docs — note the specificity, quantification, and buyer-anchoring
4. Draft the V2 content following all quality rules above
5. Output as a clean markdown file — no meta-commentary, no annotations
6. Save to the path specified by the caller

The output should read as if a skilled marketing team produced it from strong foundations. The quality should be self-evident.

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
# [Outcome-Oriented Headline — states the buyer's result, not the product name]
[Subhead: narrows the promise, signals who this is for]

[2-3 sentences: the buyer's current reality and what's broken.
Problem framed in buyer language. Hook stat if available.]

[2-3 sentences: how the product changes the situation.
Connects problem to approach — not a feature list.]

---

[Proof bar: 3-4 metrics with customer attribution]
[Big number] + [What it measures] + [Customer name/type]

---

### [Benefit-Led Pillar Heading 1]
- [What the buyer gets — outcome language, ~40 words per pillar]
- [Specific capability framed as buyer value]

### [Benefit-Led Pillar Heading 2]
- [Buyer outcome]
- [Specific capability framed as buyer value]

### [Benefit-Led Pillar Heading 3]
- [Buyer outcome]
- [Specific capability framed as buyer value]

---

[Funnel-appropriate CTA — specific action, not "contact us"]

[Company boilerplate: 1-2 sentences]
```

V2 characteristics: Outcome-oriented headline. Opens with buyer's problem, not company description. Proof is attributed and quantified. Value pillars led by benefits, not feature names. CTA matches funnel stage. Content could NOT have a competitor's logo swapped in.

#### Blog post (~800-1500 words)

```
# [Specific, Provocative or Promise-Driven H1]

[Opening: 2-3 short paragraphs. Set up tension — what's the conventional
wisdom, what's wrong with it, what have you seen that contradicts it?
Reader should feel "this person gets it" within 100 words.
Short paragraphs: 1-3 sentences each.]

[Thesis: 1 paragraph stating the core claim clearly.]

## [Benefit-Led or Question-Based H2 — not a label]

[Lead with the point in the first 1-2 sentences.
Then support with evidence: specific data, named examples, customer scenarios.
2-3 sentence paragraphs. Bullets for key info extraction.]

## [Benefit-Led H2]

[Same pattern: point first, then support.
Front-load each section. Use single-sentence paragraphs for emphasis.]

## [Benefit-Led H2]

[Continue the argument. Each H2 section supports the thesis.
Scanning just H2s should convey the full argument.]

## [Optional: "What This Means for [Audience]" or Implications H2]

[Actionable takeaway: what should the reader do differently?
1-2 paragraphs.]

[Funnel-appropriate CTA: guide, framework, assessment — not "book a demo"
for TOFU content. Product tour or case study for MOFU.]
```

V2 characteristics: H2s communicate benefits or questions, never labels. Short paragraphs (1-3 sentences). Front-loaded sections. Customer quotes woven in with full attribution. Specific proof throughout. CTA matched to funnel stage. Reads like a person with a point of view, not a textbook.

#### Landing page (~400-600 words of copy)

```
# [Buyer-World Outcome Headline — what changes for them, not what the tool does]
[Subhead: 1-2 sentences narrowing the promise and naming the audience]

[Primary CTA — funnel-appropriate, specific verb + outcome]

## [Problem H2 — names the problem in buyer language]

[2-3 short paragraphs or bullets: current state, what's broken,
what it's costing them. Buyer language, not product language.]

## [Solution H2 — benefit-led: "How [outcome] actually works"]

**[Capability 1: Benefit heading — what the buyer gets]**
[2-3 sentences: how it works, framed as buyer value]

**[Capability 2: Benefit heading]**
[2-3 sentences]

**[Capability 3: Benefit heading]**
[2-3 sentences]

## [Proof section]

[Metrics bar: 3-4 quantified outcomes with customer attribution]

> "[Customer quote — describes before/after transformation, includes
specific outcomes, reads like a real person said it]"
> — [Name], [Title], [Company]

[CTA — same primary CTA copy as hero, consistent]

[Footer CTA — final conversion prompt, short and confident]
```

V2 characteristics: Hero headline is a buyer outcome, not a product attribute. Problem section before solution. Solution blocks map to specific pain points. Proof is attributed and quantified with customer quotes. CTA appears 2-3 times with consistent copy. H2s work as standalone value propositions. No FAQ as content dumping ground.

### Visual hierarchy and readability

Outputs should be easy to skim. Apply formatting proportional to the output length.

**All output types:**
- Use **bold** on key terms, names, metrics, and phrases the reader's eye should land on first. Bold the thing that matters most — not entire sentences.
- Keep paragraphs short. 1-3 sentences. Single-sentence paragraphs for emphasis.
- Use whitespace intentionally.

**Longer outputs (blog posts):**
- Use horizontal rules (`---`) between major sections.
- H2s communicate benefits or questions — never labels like "Background" or "Conclusion."
- Front-load every section: key point in the first 1-2 sentences.

**Short outputs (one-pagers, landing pages):**
- Use horizontal rules to separate major sections (problem, solution, proof).
- Bold sparingly on key metrics and outcomes.
- CTA placement acts as a structural rhythm element.

---

## Reference files

Read the relevant reference file before generating any content:

- `references/one-pager.md` — Structure, template, and rules for marketing collateral one-pagers
- `references/blog-post.md` — Structure, routing by blog type, and rules for blog posts
- `references/landing-page.md` — Copy + structural guidance for landing pages including section components and layout recommendations
