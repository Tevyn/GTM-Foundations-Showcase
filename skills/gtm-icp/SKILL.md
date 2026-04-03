---
name: gtm-icp
description: >
  Generate an Ideal Customer Profile (ICP) document for a B2B SaaS company from minimal context — typically
  website screenshots and a few clarifying answers. Produces two versions: V1 (broad, unfocused — the kind
  of ICP that lives in most Series A-B companies' Google Drives) and V2 (focused, exclusionary, workable —
  built from a niche selection). Use this skill whenever the user wants to: create an ICP document, define
  a target customer profile, build targeting criteria, create a qualification framework, define who they're
  NOT for, or generate side-by-side ICP comparisons showing focused vs. unfocused targeting.
  Also trigger when the user mentions ICP, ideal customer profile, target customer, buyer persona,
  target market definition, customer segmentation, qualification criteria, or negative ICP.
  This skill can run standalone or as part of the gtm-orchestrator sequence.
---

# GTM ICP Skill

This skill generates Ideal Customer Profile documentation for B2B SaaS companies. It operates in two modes that produce deliberately different quality levels — not because V1 is lazy, but because V1 faithfully represents what most companies actually have, and V2 shows what's possible with focus.

## Why ICP is the root of everything

ICP is the first pillar in the GTM foundations sequence because every downstream decision inherits its assumptions. A broad ICP forces everything else to stay general: problem-solution fit can't be specific if you're solving for 4 industries simultaneously, positioning can't be sharp if your buyer could be anyone from an SMB ops manager to an enterprise CTO, and messaging can't resonate if it has to speak to all of them at once.

This means the ICP skill carries disproportionate weight. When generating V1, the broadness needs to feel *realistic* — the kind of document a competent marketing leader would produce when they haven't yet made hard exclusion decisions. When generating V2, the focus needs to be *actionable* — specific enough that a sales rep could use it to qualify on a first call, and a marketer could build a target account list from it.

## Input requirements

The skill needs baseline context about the company. This typically comes from:

**Always available:**
- Company website screenshots (homepage, product page)
- Whatever the user or orchestrator provides from a brief Q&A

**What to extract from screenshots before asking questions:**
- Company name and apparent category
- Industries or segments mentioned on the site
- Product capabilities visible on the product page
- Any pricing/sizing signals (enterprise vs. SMB indicators)
- Technology or integration mentions
- Customer logos or case study references

**Clarifying questions (ask only what screenshots can't answer):**
Pick 3-5 from this list based on what's missing. Don't ask what you can reasonably infer.

1. "What market category would you put this product in?" (ask if the site doesn't make it obvious)
2. "Is this primarily an enterprise solution, or do they span from SMB up?" (ask if pricing/positioning signals are ambiguous)
3. "Who's the primary buyer — what role or department owns this purchase?" (ask if the site speaks to multiple audiences without a clear primary)
4. "What's the competitive landscape? Who do they lose deals to?" (ask if the site doesn't name competitors or alternatives)
5. "Are there any industries or segments they're particularly strong in vs. just listed on the website?" (ask if the site lists many industries)

When called by the orchestrator, these answers will be pre-provided. When run standalone, ask them conversationally — keep it fast.

## Mode: V1 (Broad Foundations)

V1 represents what a real Series A-B company typically has as their ICP documentation. It's not cartoonishly bad — it's the natural result of a company that hasn't yet made hard exclusion decisions. Someone reasonable wrote this; they just included too much and excluded too little.

### V1 characteristics — what to produce and why

**Where V1 is passable (realistic unevenness):**
- Firmographic basics are present — the company *does* know roughly who buys from them
- There's usually a list of industries, company sizes, and geographies
- Some technographic awareness exists (they know what tools their customers tend to use)
- The document looks complete at first glance

**Where V1 falls apart:**
- **3-4+ industries listed with no prioritization.** The company sells to Tech, Financial Services, Healthcare, and Insurance — but the doc doesn't say which is strongest or why. This forces every downstream asset to either stay general or be rebuilt per-industry.
- **Wide company size range.** Something like "10-10,000+ employees" or "$1M-$1B+ revenue." This is a 1,000x range — it's technically true (they do sell to companies this size) but useless for targeting.
- **Multiple buyer roles across departments.** "Managers, directors, and executives in product, marketing, engineering, or HR." When the buyer could be anyone, nobody on the sales team knows who to call first.
- **Pain points stop one step short of the business implication.** This is a key V1 pattern: the symptom is named but the direct downstream consequence is missing. "Teams are frustrated with alert noise" without "...which increases missed incidents, which increases risk and cost." V1 pain points hover at the team-experience level — frustration, inefficiency, manual work — and never connect to what the economic buyer cares about (revenue, risk, cost). The doc is long because it lists many pains, not because any of them go deep. Length comes from breadth, not depth.
- **Buying triggers are vague.** "Looking to improve their workflow" or "need to prove delivery outcomes." These aren't triggers — they're permanent states. A trigger is a specific event or threshold that creates urgency.
- **No negative ICP (or a token one).** Either missing entirely, or limited to compliance/security exclusions that are really just product gaps, not strategic focus decisions.
- **Pain is framed around efficiency, not revenue.** Time saving, visibility, and control are secondary impacts. The doc doesn't connect to the buyer's top-line business outcomes (revenue, pipeline, CAC, retention).

### V1 output template

```markdown
# [Company Name] — Ideal Customer Profile

## Target Market
**Industries:** [3-4+ industries, listed without prioritization]
**Company Size:** [Wide range — e.g., 10-10,000+ employees; $1M-$1B+ revenue]
**Geography:** [Broad — e.g., NA, EMEA, APAC]

## Technographics
[Generic tool categories — "currently using a [category] tool (Tool A, Tool B, Tool C, etc.) or manual processes (spreadsheets, documents, etc.)"]

## Buying Triggers
[Vague, permanent-state triggers — "looking to improve X," "need to prove Y outcomes"]

## Buyer Roles
[Multiple roles across multiple departments — "managers, directors, and executives in [dept], [dept], [dept], [dept]"]

## Pain Points
- [Symptom #1 — names the frustration without connecting to business impact]
- [Symptom #2 — team-level experience, not revenue-level consequence]
- [Symptom #3]
- [Symptom #4]
- [Symptom #5 — the list is long because breadth substitutes for depth]

## Not a Fit
[Minimal exclusions, usually product-gap-driven — "requires compliance certifications we don't yet support," "needs custom implementation services"]
```

**V1 should be fast to produce.** It's a one-page document that looks like it took 30 minutes to write — because it did. It may run 250-400 words because the *list* of possibilities is long (many industries, many pains, many buyer roles), not because additional reasoning or depth has been added. The length comes from trying to cover everyone, not from understanding anyone deeply.

## Mode: V2 (Focused Foundations)

V2 is built from the V1 context plus a niche selection. The niche is chosen during the orchestrator flow (or provided by the user in standalone mode). V2 takes one slice of V1's breadth and builds depth.

### V2 characteristics — what to produce and why

**The core shift from V1 to V2:**
V1 describes who the company sells to. V2 decides who the company is *built for* — and explicitly names who they're not. This is a strategic decision, not a data exercise. The niche selection won't be perfect (it's a demo, not a market research engagement), but it demonstrates what becomes possible when you narrow.

**What V2 must include:**

- **Single primary segment with specific firmographics.** One industry or a tight cluster. Company size narrowed to a meaningful range (e.g., 500-5,000 employees, not 10-10,000). Revenue range that implies a budget reality. Geography narrowed if relevant.

- **Technographic requirements with reasoning.** Not just "uses Tool X" but *why* that tool signals fit. Example: "5+ martech tools including Marketo/HubSpot Enterprise + Salesforce — must orchestrate a fragmented enterprise stack; single-tool users have no integration pain." The reasoning is what makes it usable for qualification.

- **Specific, event-based buying triggers with thresholds.** Not "looking to improve workflows" but "10+ active campaigns/quarter (below this, a dedicated owner can manage it manually)" or "recent growth event (M&A, headcount increase, funding round) indicating rising complexity." Triggers should include the threshold below which the pain isn't acute enough to buy.

- **Named buyer roles with responsibilities and budget context.** Primary champion, economic buyer, and execution owner — with their titles, what they care about, and how they evaluate. Include deal cycle length, expected ACV range, and buying process details (e.g., "POC expected in 8/10 deals").

- **Pain points at the symptom-to-business-consequence level.** The ICP doc names the pains this segment experiences and traces each one to a direct business consequence the economic buyer cares about. Example: "Without campaign performance unification, marketing leaders can't prove campaign ROI, leading to higher CAC." The chain should always terminate at a revenue, cost, or risk outcome — never at team-level frustration alone. However, the *quantified* impact (dollar figures, percentage improvements, time-to-value calculations) belongs in the Problem-Solution Fit doc. The ICP tells you *what hurts and why the business cares*; PSF tells you *how much it costs and how the solution maps to it*.

- **Competitive landscape observed during ICP research.** Competitors or alternatives mentioned during Q&A or visible on the website, win/lose signals observed, and adjacent categories the product could be confused with. This context grounds the ICP in market reality and feeds directly into the Positioning skill downstream.

- **Buyer language patterns.** How buyers in this segment talk about their problems — language from the website, case studies, and Q&A. Include the contrast between how buyers describe their pain vs. how the company describes the product. This feeds directly into the Messaging skill downstream.

- **Qualification signals.** Beyond the qualification framework questions, capture the specific signals that indicate pain severity, urgency, and frequency for this segment. These help sales prioritize and help marketing build trigger-based campaigns.

- **Negative ICP with strategic reasoning.** Not just "doesn't fit our product" but "high churn risk, low problem value, lower ACV" — reasons grounded in business economics, not product gaps. Include specific disqualification criteria and the "why" so the team can explain it internally.

### V2 output template

```markdown
# [Company Name] — Ideal Customer Profile

## Overview
[2-3 sentence summary: who this ICP targets, the core thesis for why this segment, and what makes them the strongest fit. This should read as a decision rationale, not a description.]

## Primary Segment

### Firmographics
**Industry:** [Single industry or tight cluster with reasoning]
**Company Size:** [Narrow range — e.g., 500-5,000 employees]
**Revenue:** [Range that implies budget reality — e.g., $100M-$1B]
**Geography:** [Narrowed if relevant, with reasoning]

### Technographics
[Specific tools or tool combinations that signal fit, with reasoning for each. Include what the absence of these signals means — i.e., why companies without this stack aren't a fit.]

### Buying Triggers
[Event-based triggers with thresholds. Each trigger should include: the event, why it creates urgency, and the threshold below which pain isn't acute enough to buy.]

## Buyer Roles

| Role | Title(s) | What They Care About | Their Role in the Deal |
|------|----------|---------------------|----------------------|
| **Champion / Decision Maker** | [Specific title] | [Specific priorities] | [Primary evaluator, drives internal consensus] |
| **Economic Buyer** | [Specific title] | [Specific priorities] | [Signs off on budget, needs ROI justification] |
| **Execution Owner** | [Specific title] | [Specific priorities] | [Day-to-day user, owns implementation success] |

### Deal Economics
**ACV Range:** [e.g., $75K-$250K]
**Deal Cycle:** [e.g., 6-9 months]
**Buying Process Notes:** [e.g., "POC expected in 8/10 deals; security review adds 2-4 weeks"]

## Pain Points (Specific to This Segment)
[Pain points this segment experiences, each traced from the specific mechanism of pain to the business consequence the economic buyer cares about. Every chain must land at revenue, cost, or risk — not at team frustration. But stop short of dollar quantification (that's PSF territory). Frame these as things a seller could state as fact on a first call to demonstrate they understand this buyer's world.]

- **[Pain area]:** [Specific mechanism] → [Why it's acute for this segment] → [Business consequence at the revenue/cost/risk level]

## Competitive Landscape
[Competitors or alternatives observed during research. For each: who they are, when this company wins against them vs. loses, and any adjacent categories the product could be confused with. This doesn't need to be exhaustive — capture what emerged during ICP research. Positioning will develop this fully.]

## Buyer Language Patterns
[How buyers in this segment talk about their problems — contrasted with how the company describes the product. Include specific phrases, framings, and tone signals. This is raw material for the Messaging skill to operationalize.]

| What Buyers Say | What the Company Says | Why It Matters |
|----------------|----------------------|----------------|
| [Buyer's words] | [Company's words] | [The gap or insight] |

## Targeting Criteria (Marketing)
[Firmographic and behavioral criteria specific enough to build a target account list. Include: what to filter on in your data tools and what signals to look for in intent data.]

## Qualification Framework (Sales)
[3-5 questions total. Lead with qualitative, empathy-driven questions — prospects don't have numbers ready. Each question includes: the question itself, what to listen for, and what it tells you about fit. Keep this tight — a rep should be able to glance at this section before a call and carry it in their head.]

- [Situational opener — prompts the prospect to describe their current reality. Example: "Tell me about [relevant team/process]. Who owns [pain area] today?" Listen for: severity, workaround complexity]
- [Technographic/scale confirmation — Example: "What does your current [tool/process] setup look like?" Listen for: stack complexity, fit signals]
- [Trigger/timing — Example: "What's changed recently that's making this a priority?" Listen for: recency, urgency, event-driven pressure]
- [Pain depth — Example: "When [pain area] comes up, how does that ripple across the team?" Listen for: whether pain stays local or connects to business outcomes the economic buyer cares about]

### Qualification Signals
[Specific signals that indicate pain severity, urgency, and frequency for this segment. These go beyond the qualification questions — they're the observable indicators that help sales prioritize accounts and help marketing build trigger-based campaigns.]

- **High severity:** [Signals indicating acute pain — e.g., "We get paged 20+ times per week"]
- **High urgency:** [Signals indicating time pressure — e.g., recent funding round, new executive hire, compliance deadline]
- **High frequency:** [Signals indicating the problem is persistent, not episodic]

## Negative ICP (Not a Fit)

| Profile | Why Not | Disqualification Signal |
|---------|---------|------------------------|
| [Segment/type] | [Business reasoning — churn risk, low ACV, low problem value] | [What you'd hear or see that signals this] |
| [Segment/type] | [Business reasoning] | [Signal] |

**How to handle near-misses:** [Brief guidance on prospects who look like a fit on firmographics but aren't — and how to redirect or deprioritize without burning the relationship.]
```

**V2 should be thorough but disciplined.** Target 900-1,800 words. This is the payoff document — it should feel substantively different from V1 in depth and specificity, and the contrast in length should be visible. But don't over-generate: the qualification framework should be 3-5 questions (not 9), pain points should be 3-5 areas (not exhaustive), and each section should be as tight as possible while still being *usable*. If a rep can't skim the doc in 3 minutes and walk away knowing who to call, how to qualify, and what pain to lead with, it's too long.

## Shared context doc: accumulating context across the skill chain

During ICP generation, you'll naturally surface insights that belong in downstream pillar docs — competitive intel, detailed pain economics, buyer language patterns. These insights now belong in the ICP doc itself (see the Competitive Landscape, Buyer Language Patterns, and Qualification Signals sections in the V2 template above).

The context doc (`context.md`) is a **handoff summary** that carries forward key insights for downstream skills in a condensed format. **Everything written to context.md must also exist in the core ICP doc** — context.md is not a repository for unique information.

**As the first skill in the chain, the ICP skill creates `context.md`.** Downstream skills will add to it.

For V2, produce `context.md` alongside the ICP doc with this structure:

```markdown
# GTM Foundations — Shared Context

## Company Overview
[Company name, category, what they do, key context from screenshots and Q&A. This section is written once by the ICP skill and referenced by all downstream skills.]

## ICP Context (added by ICP skill)

### Pain Patterns (for PSF to quantify and map to solutions)
- Pain areas identified with their business-consequence chains (from the ICP Pain Points section) — PSF will add dollar quantification, time costs, and conversion impacts to each
- Buyer outcomes by role (what the champion cares about vs. what the economic buyer needs to see — from the Buyer Roles table)
- Any initial estimates of impact magnitude that PSF should validate and develop
- Qualification signals that indicate pain severity, urgency, and frequency (from the Qualification Signals section)

### Competitive & Market Context (for Positioning)
- Competitors or alternatives observed (from the Competitive Landscape section)
- Win/lose signals observed
- Adjacent categories the product could be confused with

### Buyer Language & Framing (for Messaging)
- How buyers in this segment talk about their problems (from the Buyer Language Patterns section)
- Content themes that map to this segment's triggers
- Buyer motivation framing (what they care about in their own words vs. vendor language)

## PSF Context (added by PSF skill)
[PSF will append its contributions here when it runs]

## Positioning Context (added by Positioning skill)
[Positioning will append its contributions here when it runs]
```

**For V1, the context doc is thinner** — just brief notes capturing whatever competitive and problem context emerged, without the structured depth. V1 context reflects the same "thin but present" quality as the V1 ICP doc.

**Why this matters:** Every downstream skill reads the same file. PSF doesn't need to find `icp-handoff.md` — it reads `context.md`. When PSF finishes, it appends its own context to the same file. By the time Messaging runs, it has accumulated context from ICP, PSF, and Positioning in one place.

## Generating realistic content

When creating either version, ground everything in what you extracted from the screenshots and Q&A. Don't invent capabilities the product doesn't have. Don't name industries the company doesn't serve. The V1 version should reflect what the company's website actually shows — just organized without focus. The V2 version should take one slice of that reality and build depth.

**For V1:** Lean into the patterns visible on the website. If their site lists 4 industries, use all 4. If their product page describes broad capabilities, use them as generic pain points. The website is usually the source material for weak ICP docs — because companies write their site to be broad, and then use that broadness as their ICP.

**For V2:** Make specific, plausible assumptions. You don't have market research — you're picking a niche based on limited context and a directional prompt ("give me an enterprise niche"). The assumptions should be flagged as assumptions, but they should be *specific* assumptions. "We're assuming the VP of Marketing is the primary buyer because the product's core value prop — campaign orchestration — maps to their budget and KPIs" is better than "the buyer is a marketing leader."

## When called by the orchestrator

The orchestrator will provide:
- Extracted context from screenshots
- Answers to clarifying questions
- Mode (V1 or V2)
- For V2: the selected niche parameters

Generate the document and return it. Don't re-ask questions the orchestrator already answered.

## When run standalone

1. Ask for screenshots or context about the company
2. Extract what you can, ask 3-5 clarifying questions
3. Generate V1
4. Ask if the user wants a V2 — if yes, ask for niche direction, present 2 path options, and generate V2

## File output

Save documents as markdown files:
- V1: `[company-name]/v1/icp.md` + `[company-name]/v1/context.md`
- V2: `[company-name]/v2/icp.md` + `[company-name]/v2/context.md`

The context doc is a shared, growing file — not an ICP-specific deliverable. It's created by the ICP skill (as the first in the chain) and appended to by each subsequent skill. All downstream skills read from and write to this same file.

When run as part of the orchestrator sequence, the orchestrator manages file paths and ensures each skill can find `context.md`. When standalone, create the directory structure yourself and instruct the user to provide `context.md` when running subsequent pillar skills.
