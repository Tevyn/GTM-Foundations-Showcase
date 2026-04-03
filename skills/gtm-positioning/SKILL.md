---
name: gtm-positioning
description: >
  Generate a Positioning document for a B2B SaaS company from ICP and PSF context.
  Produces two versions: V1 (capability-focused, battle-card-heavy, missing market frame —
  the kind of positioning that lives in most Series A-B companies' competitive intel folders)
  and V2 (market-framed, buyer-anchored, defensible — built from the focused ICP and
  quantified PSF). Use this skill whenever the user wants to: define market positioning,
  create competitive differentiation frameworks, build a value wedge, write positioning
  statements, define market category and frame of reference, articulate where they win
  and why, or create positioning documentation that aligns marketing, sales, and product.
  Also trigger when the user mentions positioning, competitive positioning, market position,
  value wedge, market category, competitive differentiation, right to win, frame of reference,
  positioning statement, or "where do we win." This skill can run standalone or as part of
  the gtm-orchestrator sequence.
---

# GTM Positioning Skill

This skill generates Positioning documentation for B2B SaaS companies. It operates in two modes that produce deliberately different quality levels — V1 represents what most companies actually have (competitive battle cards and capability checklists masquerading as positioning), while V2 shows what becomes possible when you've done the ICP and PSF work first and can now anchor positioning in the buyer's frame of reference.

## Why Positioning is the third pillar

Positioning depends on both ICP and PSF because you can't articulate where you win without knowing who you're winning for and what problem carries the most value. A broad ICP forces positioning to stay generic — when your buyer could be anyone, your "right to win" dissolves into a feature list. Unquantified PSF means positioning can't anchor on business impact — it defaults to product capabilities because there's no economic argument to stand on.

The ICP skill answers *who we're built for*. PSF answers *what's costing them money and how we solve it*. Positioning picks up where both leave off: it answers *where do we have the strongest position given our product, the problem, our buyer, and the alternatives they're actually weighing?* The boundary is clean — PSF maps problems to solutions and quantifies value but doesn't do competitive framing. Positioning synthesizes PSF's differentiation angles into a market frame and a defensible position, but doesn't write the messaging (that's Messaging's job).

**The core question Positioning answers is "where do we win — and why should the buyer believe us?"** — driven by the buyer's frame of reference, not by the company's product roadmap. A good positioning doc makes it impossible to dodge this question. It names the market category, defines the competitive landscape from the buyer's perspective, identifies the value wedge where the company has a defensible advantage, and distills all of this into a positioning statement that every GTM function can use as a spine. Everything excluded is a deliberate choice.

Positioning also feeds everything downstream. Messaging can't build a narrative arc without knowing the market frame, the value wedge, and the competitive contrast. Sales-comms can't write emails or talk tracks that position the company as a peer rather than a vendor without a clear articulation of where and why the company wins. Positioning provides the strategic scaffolding that Messaging translates into buyer language.

## Input requirements

Positioning needs two things:

**From the ICP and PSF skills (or provided directly):**
- `icp.md` — the ICP document (firmographics, technographics, triggers, buyer roles, deal economics, pain points, qualification framework, negative ICP)
- `psf.md` — the PSF document (problem areas mapped through pain → impact → solution, objections, proof points)
- `context.md` — the growing context file. Positioning reads two sections:
  - **ICP Context** — specifically the "Competitive & Market Context" subsection (competitors, alternatives, win/lose signals, adjacent categories) and "Buyer Language & Framing" subsection
  - **PSF Context > For Positioning** — solution differentiation angles, problem areas ranked by right-to-win, win/lose scenarios, objections that reveal positioning opportunities

**What Positioning extracts from these inputs before generating:**
- The competitive landscape: who the buyer is actually weighing (competitors, manual workarounds, internal builds, doing nothing)
- Solution differentiation angles from PSF: how the product's approach differs from incumbent/obvious approaches
- Problem areas ranked by right-to-win (solution fit + ICP alignment + quantified value)
- Win/lose scenarios: where the solution is strongest vs. where alternatives have an edge
- Buyer role priorities: what the champion vs. economic buyer evaluates
- The ICP segment's language for describing their situation and alternatives

**Clarifying questions (ask only if context is thin):**
If the ICP doc, PSF doc, and context file are comprehensive, Positioning shouldn't need to ask anything. If they're sparse, pick 2-3 from this list:

1. "How does the company describe its market category today?" (ask if the existing materials don't name a category or if the category feels inherited rather than chosen)
2. "What do buyers compare this product to most often — competitors, manual processes, or internal tools?" (ask if the competitive context from ICP is thin)
3. "Where does the sales team feel strongest in competitive deals, and where do they lose?" (ask if win/lose scenarios are missing from PSF context)

When called by the orchestrator, these answers will be pre-provided. When run standalone, ask them conversationally.

## Mode: V1 (Broad Foundations)

V1 represents what positioning actually looks like in most Series A-B companies — not a deliberate positioning document, but a collection of competitive battle cards and capability comparisons that the team treats as positioning. V1 looks like someone pulled it together from competitive intel and the product page. It's organized around the product's capabilities relative to competitors, includes a side-by-side feature checklist, and has a positioning statement that could describe any product in the category.

### V1 characteristics — what to produce and why

**Where V1 is passable (realistic unevenness):**
- The competitive comparison section is the strongest part — more detailed than anything else in the document. This is the "comfortable territory" for V1: companies build battle cards before they build positioning because competitive intel feels urgent and concrete. The battle card content may even be reasonably accurate — the company has been in enough deals to know what competitors offer. It just isn't synthesized into a market frame or a defensible position.
- There's some awareness of alternatives — the company knows who they lose deals to
- Product capabilities are clearly articulated (even if they're not translated into buyer value)

**Where V1 falls apart:**
- **No market frame of reference.** This is V1's largest gap. The document jumps straight into competitive comparisons without first defining the market category, the buyer's landscape of alternatives, or the criteria by which the buyer evaluates options. Without this frame, every GTM function interprets the competitive landscape differently — marketing tells one story, sales tells another, product builds toward a third.
- **Organized by "us vs. them" capabilities, not by buyer criteria.** The competitive comparison is a feature checklist: "We have X, they don't." This is product-out thinking. The buyer doesn't evaluate by checking off features — they evaluate by asking "which option best solves my specific problem, given my constraints?" V1 never maps features to buyer evaluation criteria.
- **Positioning statement is generic or undifferentiated.** Something like "[Company] provides [broad category] solutions that deliver better ease of use and faster time to value." This could describe any product in the category. No evidence, no wedge, no reason to believe. The statement compounds the weakness of a broad ICP (can't claim a specific buyer) and shallow PSF (can't quantify a specific value).
- **Describes what they built, not where they win.** Features, capabilities, technology — but not the specific intersection of problem, buyer, and approach where the company has a defensible advantage. The document answers "what does our product do?" when the buyer is asking "why should I choose you over doing nothing / using what I already have?"
- **No value wedge.** No articulation of the single, differentiating advantage that matters most to the ICP — the one thing competitors can't easily replicate. Instead, there's a list of differentiators that reads like a marketing brochure. Without a wedge, sales reps in competitive deals improvise different positioning with every prospect.
- **Built on too-broad ICP.** Because V1 ICP is unfocused, V1 positioning can't claim a specific buyer's frame. The competitive comparison tries to address how the product beats alternatives for everyone — tech companies, financial services, healthcare — which means it beats alternatives for no one in particular.
- **Product "vision" is aspirational but disconnected.** There may be a mission or vision statement, but it floats above the positioning rather than grounding it. "We exist to transform how teams [broad verb]" doesn't help a rep explain why this product wins in a specific deal.

### V1 output template

```markdown
# [Company Name] — Positioning

## Our Vision
[Aspirational statement about why the company exists — broad, could apply to multiple products in the category. "We believe [broad aspiration]. [Company] exists to [broad verb] for [broad audience]."]

## What We Do
[Product description focused on capabilities — what the product is and what it does, not the problem it solves or for whom. 2-3 sentences that read like the "About" section of the website.]

## Competitive Landscape
[This is the strongest section — more detailed than the rest. Feature-by-feature or capability-by-capability comparison. May include a comparison table.]

| Capability | [Company] | Competitor A | Competitor B | Manual/Status Quo |
|-----------|-----------|-------------|-------------|-------------------|
| [Capability 1] | ✓ (with detail) | Partial | ✗ | ✗ |
| [Capability 2] | ✓ | ✓ | ✓ | ✗ |
| [Capability 3] | ✓ | ✗ | ✓ | ✗ |

[Brief narrative on competitive advantages — "Unlike [Competitor A], we provide [capability]. Unlike [Competitor B], we offer [capability]."]

## Key Differentiators
- [Differentiator 1 — product capability framed as a benefit: "Faster time to value through [feature]"]
- [Differentiator 2 — another capability: "More flexible [feature] than alternatives"]
- [Differentiator 3 — may be a stretch: "Enterprise-grade [attribute]"]

## Positioning Statement
"[Company] is a [broad category] platform that helps [broad audience] [broad outcome] with [broad differentiator]."
```

**V1 should be fast to produce.** Target 400-700 words. The length comes from the competitive comparison table and differentiator list, not from depth on market framing or buyer-anchored reasoning. It should feel like someone from product marketing built it from competitive intel and the product page — because in most companies, that's exactly how positioning documentation gets created.

**The competitive comparison pattern — comfortable, not valuable.** V1's competitive comparison section is its strongest area because battle cards feel urgent: "We need to know how to handle it when a prospect mentions [Competitor]." This is real and valid — but it's not positioning. It's reactive intelligence about what to say when the buyer brings up an alternative, not a proactive frame for how the buyer should evaluate the category. V1 doesn't question this — it treats competitive readiness as a proxy for positioning. V2 corrects it by starting with the buyer's frame and building the competitive story from there.

**Critical: never label the stronger section.** The unevenness should be visible through quality difference alone — the competitive comparison is simply more detailed and grounded than the vision, differentiators, or positioning statement. Do not add meta-labels or annotations that call out which section is better. The reader should notice the difference organically.

## Mode: V2 (Focused Foundations)

V2 is built on top of the focused ICP and quantified PSF. Because the ICP narrowed to a specific segment and the PSF identified where the solution has the strongest right to win, Positioning can now do its real job: decide where the company stands in the buyer's mind relative to their other choices.

### V2 characteristics — what to produce and why

**The core shift from V1 to V2:**
V1 organizes around the product (what we built, how it compares). V2 organizes around the buyer's perception (how buyers describe their alternatives, what made them choose, what they say when recommending). This is the fundamental difference: V1 answers "what does our product do?" while V2 answers "how do we want our target customers to understand us versus their other choices?"

**The single most important V1/V2 difference:** V2 anchors positioning in buyer perception — how buyers actually describe alternatives, what criteria they use when comparing, what made them choose this product, what they say when recommending it. V1 positions from the company's perspective using product capabilities. This is the difference between a document that tells the team *where we stand in the buyer's mind* (V2) and one that tells them *what features we have* (V1).

**Critical boundaries — what Positioning is NOT:**
- Positioning is NOT messaging. We're not writing copy today. We're deciding WHERE we stand in the buyer's mind. The words come in the Messaging pillar — first we need to agree on what we're standing on.
- Positioning is NOT competitive analysis. Detailed feature-by-feature comparisons and technical alternative assessments belong in PSF context and competitive intel. Positioning uses competitive context to define the frame, not to build a battle card.
- Positioning is NOT a restatement of ICP. Don't re-profile the buyer (firmographics, tech stack lists, company size ranges). The ICP doc already does this. Positioning references the buyer, not re-describes them.

**What V2 must include:**

- **Market category and frame of reference.** The category choice answers: "What frame should the buyer use when evaluating us?" This is a strategic decision because the frame determines the competitive set — and therefore the positioning conversation. Options might include: an existing category, a subcategory, an adjacent category, or a new frame entirely. Each implies different alternatives the buyer will consider and different evaluation criteria they'll apply. Name the category, explain why this frame (not an adjacent one), and describe what it means for the competitive set. The reasoning matters more than the label — if the team understands why this frame, they can hold it consistently even when prospects try to pull them into a different one.

- **Product vision — why we exist.** Not aspirational fluff, but a grounded articulation connecting the ICP's problem to why this company's approach is the right response. Should be specific enough that any employee could explain it to a friend, and the friend would understand both the problem and why this company is the one solving it. The vision should make the positioning feel inevitable.

- **Value wedge.** The single, differentiating advantage that matters most to the ICP and that competitors can't easily replicate. The wedge sits at the intersection of three things: (1) what the ICP values most, (2) where the product's approach is genuinely different, and (3) what competitors can't or won't do. The wedge is NOT a feature — it's an approach, a perspective, or a structural advantage. Think creatively about what constitutes an "edge" — it may not be a product capability at all. It might be an approach to the problem, a philosophy about how the solution should work, or a structural position in the market that competitors can't occupy.

  **Wedge reality tests (apply these before committing):**
  - *Buyer perception:* "Our ICP buyers perceive this as a meaningful differentiator" — does the market agree this edge matters, or is it something only the company cares about?
  - *Buyer resonance:* "The value wedge resonates when buyers hear it" — do prospects react with recognition ("yes, that's exactly what I need") or confusion ("I don't understand why that's different")?
  - *Ownability:* "This positioning is ownable" — are competitors already claiming this space, or is there room? Can the company credibly hold this position?
  - *Recommendation test:* What would a happy customer say when recommending this product to a peer? That language often reveals the perceived wedge more accurately than internal positioning work.

- **How buyers see their alternatives.** Not a feature comparison — a perception map. For each major alternative (competitors, status quo, do nothing), describe: how buyers talk about it, why they consider it, what makes them choose it, and what makes them walk away from it. Use buyer language from recorded calls and customer interviews, not product marketing language. The goal is to understand the buyer's decision landscape as they experience it, so the positioning can meet them where they are.

  Frame alternatives the way buyers describe them: "We looked at [alternative] because [reason]. We almost went with them because [strength]. But ultimately we chose [us] because [edge]." This framing reveals what actually drives decisions, not what features exist.

- **Positioning statement.** A concise, usable statement: "For [ICP buyer] facing [primary problem], we are the right choice because [specific edge], which [alternative] can't match because [reason]." This is not a tagline — it's an internal alignment tool. Every piece of marketing copy, every sales deck, every product decision should be traceable back to this statement. Test: can three different people on the GTM team read this statement and independently produce aligned communications?

### V2 output template

```markdown
# [Company Name] — Positioning

## Overview
[2-3 sentence summary: the positioning thesis — who this company is positioned for, where they have the strongest right to win, and why this positioning. This should read as strategic rationale, not a product description.]

## Product Vision
[Why we exist — grounded in the buyer's problem and the company's approach. Not aspirational fluff, but a specific articulation that makes the positioning feel inevitable: "of course this product exists, because this problem demands this approach." 2-4 sentences an employee could explain to a friend.]

## Market Frame of Reference

### The Category We're Defining
**Category:** [Named category]
**Why this frame:** [Why this category and not an adjacent one. What competitive set does this frame create? What evaluation criteria does it activate? What does the buyer expect from solutions in this category? The reasoning is more important than the label — if the team understands why this frame, they can hold it consistently.]

### How Buyers Evaluate Alternatives
[How the ICP buyer actually navigates their decision. Not a feature matrix — a description of the buyer's experience. What do they look at first? What do they compare? What criteria matter most, and in what order? Written from the buyer's perspective, in their language.]

**What buyers consider and why:**

**[Alternative type — e.g., "Consolidating onto a single platform"]**
Buyers consider this because [reason in buyer language]. They like [genuine strength]. What holds them back: [what makes them hesitate or walk away — specific to this ICP, not generic].

**[Alternative type — e.g., "Staying with what they have"]**
Buyers stick with this because [reason]. It works when [condition]. It breaks down when [condition specific to this ICP's stage/scale].

**[Alternative type — e.g., "Building it themselves"]**
Buyers consider this because [reason — often cultural or cost-driven]. What makes them walk away: [the realization that changes the calculus].

## Value Wedge
[The single differentiating advantage. Not a feature — an approach, a perspective, or a structural position. 2-4 sentences that articulate: what the edge is, why it matters to this buyer, and why it's defensible.]

[Write the wedge the way a happy customer would describe it when recommending the product to a peer. This is the "word of mouth" version of the positioning — the language buyers actually use, not the language the company wishes they'd use.]

**Why this wedge holds:**
- **Buyers perceive it as meaningful:** [Evidence that the market agrees this edge matters — not just that the company thinks it does]
- **It's ownable:** [Why competitors can't or won't claim this same position — structural reasons, not feature gaps]
- **It resonates on contact:** [How buyers react when they hear this — recognition, not confusion]

## Positioning Statement
> For [ICP buyer] facing [primary problem], [Company] is the [category] that [specific edge]. Unlike [primary alternative], [Company] [what alternatives can't match] because [reason].

**How to use this statement:**
[Brief guidance — not a rulebook, but a compass. Marketing uses it to frame campaigns. Sales uses it to anchor the first 30 seconds of a conversation. Product uses it to evaluate roadmap priorities against the wedge. The statement is the test every GTM decision should pass.]
```

**Language and tone guidance for V2:**
The positioning doc should read like it was written by someone who has listened to dozens of buyer calls and synthesized what they heard. It should use buyer language — how prospects describe their situation, their alternatives, and their decision criteria. It should NOT read like a technical specification or a competitive intelligence report. If the doc lists specific tool names, engineer counts, or revenue ranges, it's restating the ICP — redirect to buyer perception language instead. Human language, not spec language.

**Do not restate ICP details.** The positioning doc should reference the buyer without re-profiling them. "Engineering leaders at scaling companies who've outgrown their tooling" — not "Series B-D SaaS companies with 100-1,500 employees running Datadog + CloudWatch + Prometheus." The specifics live in the ICP doc. Positioning uses the buyer's self-description.

**Do not pre-write messaging.** Positioning decides where the company stands. Messaging decides how to say it. If a section starts including specific proof point numbers, talk track language, or campaign angles, it's crossed into Messaging territory. Pull back to the strategic decision: where do we stand and why?

**GTM workability check — apply but don't include in doc.** Before finalizing, validate the positioning against these three questions. If any answer is "no," the positioning needs work. But the check itself is a skill-level quality gate, not a section in the output document:
- **Marketing:** If a best-fit prospect landed on the homepage, could they answer "is this for me, and why should I care?" in under 10 seconds?
- **Sales:** If you handed reps the positioning, would their decks, talk tracks, and objection handling all sound like the same coherent story?
- **Product:** Can a best-fit user look at the product and say "this was clearly built for someone like me, to solve exactly my problem" before reading a case study?

**V2 should be thorough but disciplined.** Target 1,200-2,200 words. The depth should be visible — the market frame, value wedge, and competitive differentiation should each feel substantial enough to anchor real GTM decisions. But don't over-generate: if the market frame is clear and the wedge is defensible, the section is done. Don't pad with extra analysis to hit a word count.

## Updating context.md

After generating, append a "Positioning Context" section to context.md. This carries forward the accumulated insights for Messaging.

**For V2, use this structure:**

```markdown
## Positioning Context (added by Positioning skill)

### For Messaging
- Market category and frame of reference: how to introduce the company and product in context of the buyer's world (category name, market description, why this frame)
- Value wedge in buyer language: the core differentiating advantage translated into how the buyer would describe why they chose this product
- Competitive contrast themes: not feature comparisons, but the 2-3 narrative contrasts that Messaging should weave into communications (e.g., "symptom treatment vs. root cause resolution," "point solution vs. orchestration layer")
- Positioning statement as messaging spine: the statement itself plus guidance on how Messaging should use it as an anchor without quoting it directly
- Buyer evaluation criteria ranked: what matters most to the buyer and in what order — Messaging should lead with the criterion where the company is strongest
- Evidence anchors for credibility: the proof points and reasoning that make the positioning believable — Messaging needs these to back up claims
- "Where we don't win" guidance: the alternatives or scenarios where the company isn't the strongest choice — Messaging should steer toward the wedge, not away from weaknesses
```

**For V1:** The context.md update is thinner — a "Positioning Observations" section with bullet points capturing whatever competitive and market observations emerged, without the structured depth. This mirrors V1 PSF's "Problem-Solution Observations" pattern. V1 Positioning Observations should include competitive intel bullets, a rough positioning claim, and maybe a note on perceived differentiators — but no structured "For Messaging" subsections. Messaging inherits the same quality gap.

```markdown
## Positioning Observations (added by Positioning skill)
- [Competitive observations — who we compete with and basic win/lose patterns]
- [Rough positioning claim — what the team believes about where they fit]
- [Perceived differentiators — what the team thinks sets them apart]
- [Any market category assumptions]
```

## Generating realistic content

**Market frame grounding:** The market category choice should be plausible given the company's product and context. Don't invent a category — choose from real, recognizable categories that the buyer would use to describe what they're looking for. If the product spans multiple categories, choose the one where the ICP's problem is most acute and the company's position is strongest. The frame of reference should reflect how this specific buyer evaluates options, not how the company wishes they evaluated options.

**Value wedge grounding:** The wedge must be grounded in real product capabilities and PSF differentiation angles. Don't invent advantages the product doesn't have. The wedge should pass three tests: (1) Is it true? (based on the product context available), (2) Does the ICP care about it? (based on the ICP's priorities and evaluation criteria), (3) Can competitors easily replicate it? (based on competitive context). If any answer undermines the wedge, choose a different one.

**Competitive differentiation grounding:** Be honest about alternatives' strengths. V2 competitive differentiation gains credibility by acknowledging where competitors are genuinely strong, then showing where the company wins for this specific ICP. A one-sided competitive teardown is less useful than an honest assessment that helps reps navigate real objections. Frame through PSF's differentiation angles: "[Typical approach] addresses [symptom] but fails because [root cause]. Our approach [resolution] because [why it works]."

**V1 sourcing:** V1 content should look like it was assembled from the company's existing competitive intel and product marketing. Use the language from their website, their feature descriptions, their competitive battle cards. V1 reflects what the company says about itself relative to competitors — product capabilities, not buyer-anchored positioning.

**V2 sourcing:** V2 content should sound like it came from strategic analysis of the buyer's world. The market frame should use buyer language (from ICP context). The value wedge should be grounded in the buyer's evaluation criteria, not the company's feature priorities. The competitive differentiation should be framed by what the buyer cares about, not what the company wishes they cared about.

**Positioning statement formula:** The V2 positioning statement follows a specific structure: For [ICP segment], who [key problem/need], [Company] is the [category] that [value wedge / how it solves differently]. Unlike [primary alternative/approach], [Company] [key differentiator grounded in evidence]. This isn't a creative exercise — it's a synthesis exercise. Every element should be traceable to the ICP, PSF, or competitive context. If any element requires inventing something not grounded in upstream documents, flag it as an assumption.

## When called by the orchestrator

The orchestrator will provide:
- `icp.md` for the selected company
- `psf.md` for the selected company
- `context.md` with ICP Context and PSF Context already populated
- Mode (V1 or V2)
- For V2: the focused ICP segment and quantified PSF to build positioning around

Generate the document, update context.md, and return both. Don't re-ask questions the orchestrator or upstream skills already answered.

## When run standalone

1. Ask for the ICP document, PSF document, and context file — or context about the company
2. If no ICP or PSF exists, note the gap — Positioning without ICP and PSF will be significantly weaker because there's no buyer frame to anchor on and no quantified value to build a wedge from. Offer to produce a "best effort" positioning or recommend running ICP and PSF skills first.
3. Extract what you can, ask 2-3 clarifying questions if needed
4. Generate V1
5. If a focused ICP (V2-quality) and quantified PSF (V2-quality) are available, ask if the user wants V2 Positioning — then generate it

## File output

Save documents as markdown files:
- V1: `[company-name]/v1/positioning.md` + update `[company-name]/v1/context.md`
- V2: `[company-name]/v2/positioning.md` + update `[company-name]/v2/context.md`

When run as part of the orchestrator sequence, the orchestrator manages file paths. When standalone, create the directory structure yourself.
