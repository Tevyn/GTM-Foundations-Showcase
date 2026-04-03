---
name: gtm-psf
description: >
  Generate a Problem-Solution Fit document for a B2B SaaS company from ICP context and minimal
  company information. Produces two versions: V1 (persona-organized, product-first, unquantified —
  the kind of PSF that lives implicitly in most Series A-B companies' pitch decks) and V2 (problem-first,
  quantified, solution-mapped — built from the focused ICP). Use this skill whenever the user wants to:
  map problems to solutions, quantify the business impact of pain points, create a problem-solution fit
  document, define use cases grounded in buyer pain, build ROI justification frameworks, or connect
  product capabilities to specific dollar-value outcomes. Also trigger when the user mentions
  problem-solution fit, PSF, pain quantification, use cases, ROI mapping, solution mapping,
  business impact analysis, pain-to-value chains, or value engineering. This skill can run
  standalone or as part of the gtm-orchestrator sequence.
---

# GTM Problem-Solution Fit Skill

This skill generates Problem-Solution Fit documentation for B2B SaaS companies. It operates in two modes that produce deliberately different quality levels — V1 represents what most companies implicitly have (scattered across pitch decks and sales conversations), while V2 shows what becomes possible when you've done the ICP work first and can now go deep on the problems that matter most to your best-fit segment.

## Why PSF is the second pillar

PSF depends on ICP because you can't quantify problems you haven't scoped. A broad ICP forces PSF to stay shallow — when your buyer could be anyone from a 10-person startup to a 10,000-person enterprise, the dollar impact of any given problem varies by orders of magnitude. You end up with vague pain descriptions instead of specific business cases.

The ICP skill answers *what hurts and why the business cares*. PSF picks up where ICP left off: it answers *how much it costs and how the solution maps to it*. The boundary is clean — ICP pain points terminate at revenue/cost/risk outcomes but don't quantify them. PSF adds the dollar figures, time calculations, and maps each quantified problem to a specific product capability.

**The core question PSF answers is "what are we FOR?"** — driven by evidence and value, not by product capabilities or company aspiration. A good PSF doc makes it impossible to dodge this question. Every problem area included must earn its place through quantified value, solution strength, and ICP alignment. Everything excluded is a deliberate choice. The result is a document that tells the company — and every GTM function — exactly what they exist to solve and why it matters in dollar terms.

PSF also feeds everything downstream. Positioning can't articulate "where we have the strongest right to win" without knowing which problems carry the most dollar value and which solutions are most differentiated. Messaging can't build a narrative arc without quantified before/after transformation stories. PSF is the economic engine that powers both.

## Input requirements

PSF needs two things:

**From the ICP skill (or provided directly):**
- `icp.md` — the clean ICP document (firmographics, technographics, triggers, buyer roles, deal economics, symptom-level pain points, qualification framework, negative ICP)
- `context.md` — the growing context file. PSF reads the "ICP Context" section, specifically the pain patterns, buyer outcomes by role, initial impact magnitude estimates, and qualification signals indicating pain severity/urgency/frequency

**From the original company context:**
- Whatever screenshots, Q&A answers, or product details were gathered during ICP creation. PSF doesn't re-gather this — it inherits it through the ICP doc and context file.

**What PSF extracts from context before generating:**
- Pain areas with their business-consequence chains (from the ICP doc)
- Buyer role priorities (what the champion vs. economic buyer cares about)
- Product capabilities visible from the original company context (screenshots, product pages)
- Any initial impact magnitude estimates from the ICP handoff
- Deal economics (ACV range, deal cycle) — these constrain what "quantified impact" is credible

**Clarifying questions (ask only if context is thin):**
If the ICP doc and context file are comprehensive, PSF shouldn't need to ask anything. If they're sparse, pick 2-3 from this list:

1. "Which product capability does the sales team demo most often?" (identifies the flagship — important for V1 unevenness)
2. "What's the typical ROI story the company tells in sales conversations?" (grounds the quantification)
3. "Are there any customer case studies or proof points available?" (makes V2 quantification feel evidence-based rather than invented)

When called by the orchestrator, these answers will be pre-provided. When run standalone, ask them conversationally.

## Mode: V1 (Broad Foundations)

V1 represents the kind of problem-solution thinking that exists in most Series A-B companies — not as a dedicated PSF document, but scattered across pitch decks, one-pagers, and sales conversations. V1 looks like someone pulled it together from existing marketing materials. It's organized around personas (not problems), lists product capabilities as solutions (without mapping them to specific pains), and includes use cases that describe the product rather than the buyer's situation.

### V1 characteristics — what to produce and why

**Where V1 is passable (realistic unevenness):**
- There's usually one decent use case — the one tied to the product's flagship capability, the feature the company demos most often. This use case might even have some specificity because the sales team has told the story hundreds of times. It won't be fully quantified, but it'll feel more grounded than the others.
- The company knows their product's capabilities and can list them clearly
- Some awareness of buyer pain exists — they've heard customers complain about specific things

**Where V1 falls apart:**
- **Organized by persona, not by problem.** The doc lists what the CTO cares about, what the VP cares about, what the end user cares about — but never maps a single problem through from pain to impact to solution. This structure makes it impossible to build a coherent sales conversation or marketing campaign because every persona section is a disconnected list.
- **Pain without quantification.** "Cares about speed to value" or "reducing IT burden" — but no dollar figures, no time costs, no conversion impacts. Without quantification, sales can't build urgency and marketing can't build a business case. The pain stays at the feeling level.
- **Product capabilities listed as solutions without problem mapping.** "Custom workflow builder" and "automation engine" appear as solutions, but the doc doesn't say which specific problem each capability solves or why that approach is better than alternatives. The capabilities float free of the problems.
- **Use cases describe the product, not the buyer's situation.** "Pain: workflow is inefficient. Solution: workflow automation." This is a tautology — the use case restates the product category as both the problem and solution. It doesn't describe what the buyer's day looks like before vs. after.
- **No objection-level detail.** No anticipation of "why not just use [alternative]?" or "we tried something like this before." Without objection mapping, every sales conversation that hits resistance is improvised.
- **No proof points.** No customer evidence, no benchmarks, no "here's what happened when someone like you did this." The assertions are unsupported.

### V1 output template

```markdown
# [Company Name] — Problem-Solution Overview

## Executive / Leadership Perspective
**Priorities:** [2-3 high-level concerns — "speed to value," "reducing burden," "future-proofing"]
**How [Product] Helps:** [Generic capability statement — "[Product] provides [broad capability] to address these concerns"]

## Department Manager Perspective
**Priorities:** [2-3 team-level concerns — "team efficiency," "workflow optimization"]
**How [Product] Helps:** [Another generic capability statement]

## End User Perspective
**Priorities:** [2-3 daily-work concerns — "flexibility," "meeting deadlines"]
**How [Product] Helps:** [Another generic capability statement]

## [Optional: Additional Persona — e.g., Security/Compliance Stakeholder]
**Priorities:** [Role-specific concerns]
**How [Product] Helps:** [Capability match]

## Use Cases
### [Flagship Use Case — the one decent section]
**Pain:** [More specific than the others — describes an actual workflow problem, not just a feeling. Still not quantified, but recognizable.]
**Solution:** [Maps to specific product capabilities. May even hint at a before/after.]

### [Secondary Use Case]
**Pain:** [Thin — restates the product category as a problem. "Existing workflow is inefficient."]
**Solution:** [Restates the product capability. "Custom workflow builder and automation."]

### [Optional: Third Use Case]
**Pain:** [Even thinner — may be a stretch use case the company aspires to but hasn't proven]
**Solution:** [Capability list]
```

**V1 may include more problem areas than V2 — but with far less depth.** Where V2 constrains to 1-3 deeply-mapped problems, V1 might list 3-5 use cases because breadth is easy and depth is hard. The extra use cases pad the document without adding workability. This is realistic: companies that haven't done the PSF work tend to list every problem they can think of, hoping coverage substitutes for clarity.

**V1 should be fast to produce.** Target 250-400 words. The length comes from listing many personas and capabilities, not from depth on any single problem. It should feel like a product marketer wrote it from the product page — because in most companies, that's exactly how PSF documentation gets created (when it gets created at all).

**The flagship use case pattern — comfortable, not necessarily valuable.** Every V1 has one section that's noticeably better than the rest. This is the use case closest to the product's most mature, most-demoed feature. The sales team has told this story enough that some specificity has seeped in. It won't be quantified or objection-tested, but it'll feel like it came from actual customer conversations rather than a product page. The other use cases should feel like they were written to fill out the document.

This is a realistic and important weakness to show: most teams, when asked which problem they solve, gravitate toward the one they're most comfortable talking about — usually the one that maps most neatly to their most mature feature. But comfortable isn't the same as valuable. The flagship may not be the highest-value problem for the ICP; it's just the most familiar one. V1 doesn't question this — it treats comfort as a proxy for importance. V2 corrects it by selecting problems based on urgency, frequency, and business impact (not team familiarity), which is why V2 may prioritize entirely different problem areas.

**Critical: never label the flagship.** The unevenness should be visible through quality difference alone — one section is simply more specific and grounded than the others. Do not add meta-labels like "[Flagship]," "[Primary]," or any annotation that calls out which use case is stronger. The reader should notice the difference organically, the way you'd notice it in a real company's materials.

## Mode: V2 (Focused Foundations)

V2 is built on top of the focused ICP. Because the ICP narrowed to a specific segment, PSF can now go deep: specific problems that segment faces, quantified in terms that segment's economic buyer cares about, mapped to product capabilities that address the root cause.

### V2 characteristics — what to produce and why

**The core shift from V1 to V2:**
V1 organizes around the product (what it does, who might care). V2 organizes around the buyer's problem (what's costing them money, how much, and how the solution addresses the root cause). This inversion changes everything — marketing can build campaigns around problems instead of features, sales can lead with business impact instead of demos, and product can prioritize against quantified value instead of feature requests.

**The single most important V1/V2 difference:** V2 anchors every problem to top-line business impact — revenue delay, revenue loss, margin compression, capital inefficiency. V1 stays at the team or department's day-to-day KPIs: "reduces manual work," "improves team efficiency," "speeds up process X." This is the difference between a document that can justify budget (V2) and one that describes nice-to-haves (V1). When generating V1, keep impact language at the department/team KPI level. When generating V2, always chain the operational pain upward to a revenue or cost outcome the economic buyer (CFO, CEO, board) cares about.

**What V2 must include:**

- **1-3 problem areas, selected by problem value + solution strength + ICP alignment.** Constraint is the point. 1-3 deeply-mapped problems forces the kind of depth that makes PSF workable — each problem area should be strong enough to anchor a sales conversation or a marketing campaign on its own. The skill should evaluate each candidate problem area against three gates: (1) Does it have enough evidence for credible quantification? (2) Does the product have a differentiated solution? (3) Is this problem acute for the ICP segment specifically? If any answer is no, don't include it. Two well-mapped problems is almost always better than three where one is thin.

- **Each problem area mapped through a complete chain: problem → pain/frustration → quantified impact → mapped solution.** This is the core structure. For every problem area included:
  - **Pain (Specific):** Two layers here. First, the *workflow pain* — what the buyer actually experiences day-to-day. Not a category ("alert fatigue") but a described workflow: the specific activity that burns time, the specific thing that goes wrong. Second, the *emotional frustration* — how this feels to the buyer. "VP Marketing spending their Friday afternoons in a spreadsheet instead of strategizing" captures both the workflow (manual reporting) and the frustration (strategic leader doing tactical busywork). The pain description should match what you'd hear in prospect and customer conversations — written so a buyer reads it and says "that's exactly what happens to us."
  - **Impact (Quantified):** Dollar figures, time costs, conversion impacts, opportunity costs. These must connect to a top-line business outcome — ideally revenue. Scale to the ICP segment's company size and deal economics. If the ICP says the target is $100M-$1B revenue companies, the impact numbers need to be scaled appropriately. Include the chain from operational impact → business outcome → revenue/cost effect. Don't just state the number — show the math or logic. Example: "At [ICP company scale], this means [X hours/week] at [$Y loaded cost] = $[Z]/year — before counting [downstream effect on pipeline/revenue]."
  - **Solution (Mapped to Capability):** Lead with the resolution approach, then name specific product capabilities. Use this formula: "[Product] resolves [problem area] by [resolution] using [capability/approach]." Where relevant, add: "a more effective way to handle [problem area] because [approach/track record/reasoning]." Mention specific product capabilities so GTM teams can showcase the product alongside the problem — but never lead with the technical capability as the answer. The solution should explain *why this approach* addresses root cause rather than symptom, not just *what the product does*. **Keep solution sections to 3-5 sentences.** The resolution, the capability, and the root-cause reasoning — then stop. Longer solution sections drift into product marketing copy, which belongs in Messaging, not PSF.

- **Workable across all GTM functions.** Test each problem area against:
  - **Marketing:** Can you build a campaign around this problem? Can you create content that speaks to this pain?
  - **Sales:** Can you lead with this problem in the first call? Can you quantify the impact for the buyer?
  - **Product:** Can you use this problem to prioritize roadmap decisions?
  - **CS:** Can you measure whether you're solving this problem? Can you prove value delivery?

- **Objection-level detail.** For each problem area, anticipate the top 1-2 objections: "Why not just use [alternative]?" "We tried something like this." "Can't we build this ourselves?" Include the underlying concern and a response framework grounded in the problem-solution mapping.

- **Proof points.** Customer evidence, benchmarks, or credible estimates that support the quantification. Even if proof points are assumed/illustrative (in a demo context), they should follow the pattern: "[Customer type] achieved [specific result] by [specific mechanism]." The proof point should match the ICP segment's profile.

### V2 output template

```markdown
# [Company Name] — Problem-Solution Fit

## Overview
[2-3 sentence summary: what this document maps, the core thesis for why these problem areas were selected, and how they connect to the ICP segment's priorities. This should read as strategic rationale — why THESE problems, for THIS buyer, solved THIS way.]

## Problem Areas

### 1. [Problem Area Name — descriptive, not jargon]

| Dimension | Detail |
|-----------|--------|
| **Pain (Specific)** | [Two layers: (1) the workflow pain — what the buyer experiences day-to-day, specific enough that they recognize themselves; (2) the emotional frustration — how this feels to the person living it. Both should match what you'd hear in actual buyer conversations.] |
| **Impact (Quantified)** | [Dollar figures, time costs, conversion impacts. Must connect to a top-line business outcome (ideally revenue). Show the logic: "At [ICP company scale], this means [X hours/week] at [$Y loaded cost] = $[Z]/year — before counting [downstream effect on pipeline/revenue]." Chain from operational → business → revenue/cost.] |
| **Solution (Mapped)** | [[Product] resolves [problem area] by [resolution] using [capability/approach]. Lead with the resolution approach, then name specific capabilities. Explain why this approach addresses root cause rather than symptom. Never lead with a technical capability as the "answer."] |

**Objections:**
- "[Likely objection]" → Underlying concern: [what's really behind it]. Response: [grounded in the problem-solution mapping, not in product features]

**Proof Points:**
- [Customer/benchmark evidence supporting the quantification]

### 2. [Problem Area Name]
[Same structure]

### [Additional problem areas as warranted — 1-3 total, constraint forces depth]

## GTM Workability Check
[Brief validation that these problem areas work across functions. Not a checklist — a narrative paragraph confirming: marketing can campaign on these problems, sales can lead with them, product can prioritize against them, CS can measure against them. Call out any areas where one function might struggle — that's useful operational insight.]
```

**V2 should be thorough but disciplined.** Target 900-1,800 words. The depth should be visible — each problem area should feel like it could anchor a sales conversation or a marketing campaign on its own. But don't over-generate: if the quantification is solid and the solution mapping is clear, the section is done. Don't pad with extra analysis to hit a word count.

## Generating realistic content

**Quantification grounding:** Quantification in PSF is a prioritization checkpoint, not a financial model. Its purpose is to separate high-value problems from low-value ones using a value selling framework: urgency (how soon does this hurt?), frequency (how often does it happen?), and business impact (what does it cost at the top line?). These three dimensions create a simple problem value score that determines which problems deserve deep mapping and which should be excluded.

Rough estimates are expected and acceptable. Early-stage companies rarely have enough data for precise financial modeling, and that's fine — the point is directional. "$200K-$600K/year" is useful because it tells you this problem is worth solving; whether it's $300K or $500K doesn't change the GTM strategy. Companies commonly over-index on problems they understand better or hear about more often; quantification forces them to check whether the loudest problem is actually the most valuable one.

Use these grounding rules:
- Scale estimates to the ICP's company size and revenue range
- Use loaded cost for time calculations (not just salary — benefits, overhead, opportunity cost)
- Reference the deal economics from the ICP (ACV range, deal cycle) as a sanity check — the quantified impact should be meaningfully larger than the product's price
- When you don't have real data, use directional ranges ("$X-$Y") and show the assumptions. An honest range is more credible than a precise fiction.
- Don't fabricate customer names. Use "[Customer]" or "[Customer in ICP segment]" as placeholders. The proof point pattern should be real; the specific customer can be filled in later.
- Always chain operational impact upward to a revenue or cost outcome. The quantification isn't complete until it connects to the top line.

**Solution mapping grounding:** Don't invent capabilities the product doesn't have. Map solutions only to features and approaches visible from the original company context (screenshots, product pages, Q&A). If a problem area has no credible solution mapping, it shouldn't be included — that's a product gap to flag, not a PSF item to stretch.

**V1 sourcing:** V1 content should look like it was pulled from the company's existing marketing materials. Use the language from their website, their product page descriptions, their apparent positioning. V1 reflects what the company says about itself, not what the buyer experiences.

**V2 sourcing:** V2 content should sound like it came from buyer conversations and customer research. The pain descriptions should use buyer language (from the ICP context), the impacts should be quantified from the buyer's perspective (what it costs *them*), and the solutions should be framed as resolutions to the buyer's problem (not as product features).

## Updating context.md

After generating, append a "PSF Context" section to context.md. This carries forward the key insights for Positioning and Messaging. **Everything written to context.md must also exist in the core PSF doc** — context.md is a handoff summary, not a repository for unique information.

```markdown
## PSF Context (added by PSF skill)

### For Positioning
- Solution differentiation angles: how our approach to each problem area differs from the obvious/incumbent approach. Frame as "[Typical approach] addresses [symptom] but fails because [root cause reasoning]. Our approach [resolution] because [why it works]."
- Problem areas ranked by strength of right-to-win (solution fit + ICP alignment + quantified value)
- Win/lose scenarios by problem area: where the solution is strongest vs. where alternatives have an edge
- Objections that reveal positioning opportunities (from the PSF objection mapping)

### For Messaging
- Quantified impact data per problem area (dollar figures, time costs, conversion metrics) — raw material for proof points and ROI narratives
- Pain → consequence chains with buyer language (narrative arc building blocks)
- Before/after transformation framing per problem area
- The "situation → pain → consequence → solution → proof" story arc for the strongest problem area
- Buyer language patterns captured during pain mapping (how they describe the problem vs. how the company describes the product)
```

**For V1:** The context.md update is thinner — brief notes on whatever problem-solution observations emerged, without the structured depth. Reflects the same "present but shallow" quality as the V1 PSF doc.

## When called by the orchestrator

The orchestrator will provide:
- `icp.md` for the selected company
- `context.md` with ICP Context already populated
- Mode (V1 or V2)
- For V2: the focused ICP segment to build PSF around

Generate the document, update context.md, and return both. Don't re-ask questions the orchestrator or ICP skill already answered.

## When run standalone

1. Ask for the ICP document or context about the company
2. If no ICP exists, note the gap — PSF without ICP will be weaker because pain areas can't be scoped to a specific segment. Offer to produce a "best effort" PSF or recommend running the ICP skill first.
3. Extract what you can, ask 2-3 clarifying questions if needed
4. Generate V1
5. If a focused ICP (V2-quality) is available, ask if the user wants a V2 PSF — then generate it

## File output

Save documents as markdown files:
- V1: `[company-name]/v1/psf.md` + update `[company-name]/v1/context.md`
- V2: `[company-name]/v2/psf.md` + update `[company-name]/v2/context.md`

When run as part of the orchestrator sequence, the orchestrator manages file paths. When standalone, create the directory structure yourself.
