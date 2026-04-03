---
name: gtm-messaging
description: >
  Generate a Messaging document for a B2B SaaS company from ICP, PSF, and Positioning context.
  Produces two versions: V1 (marketing-only, feature-framed value props, no narrative arc —
  the kind of messaging that lives on a Series A-B company's homepage and pitch deck) and V2
  (narrative-driven, buyer-anchored, workable across GTM — built from the focused ICP, quantified
  PSF, and defensible positioning). Use this skill whenever the user wants to: create messaging
  frameworks, define value propositions, build narrative arcs, establish voice and tone guidelines,
  create talk track guidance, or develop messaging pillars that align marketing, sales, product,
  and CS. Also trigger when the user mentions messaging, value props, narrative, brand voice,
  talk tracks, messaging pillars, messaging framework, "how do we talk about this," or
  "what's our story." This skill can run standalone or as part of the gtm-orchestrator sequence.
---

# GTM Messaging Skill

This skill generates Messaging documentation for B2B SaaS companies. It operates in two modes that produce deliberately different quality levels — V1 represents what most companies actually have (polished homepage value props and a stiff elevator pitch, with no narrative arc connecting them), while V2 shows what becomes possible when you've done the ICP, PSF, and Positioning work first and can now translate strategy into the actual words every GTM function uses.

## Why Messaging is the fourth pillar

Messaging depends on all three upstream pillars because it's translating strategy into language. Without a focused ICP, messaging can't speak to a specific buyer — it defaults to generic industry language. Without quantified PSF, messaging can't articulate specific value — it resorts to capability descriptions. Without defensible positioning, messaging has no spine — every claim floats without a frame of reference.

The ICP skill answers *who we're built for*. PSF answers *what's costing them money and how we solve it*. Positioning answers *where we win and why*. Messaging picks up where all three leave off: it answers *how do we tell this story in buyers' language?* The boundary is clean — Positioning provides the strategic scaffolding (market frame, value wedge, competitive contrast). Messaging translates that scaffolding into a narrative the buyer recognizes, value propositions the team can use, and voice/tone guidance that keeps communications consistent.

**The core question Messaging answers is "how do we say this in a way that makes the buyer act?"** — driven by voice of the customer, not by internal product language. A good messaging doc makes it impossible to default to feature-speak. It provides a narrative arc that leads with the buyer's problem, articulates why now, delivers a promise grounded in the value wedge, and gives every GTM function the language patterns they need to tell the same coherent story. Everything in the messaging doc should be traceable to the upstream pillars.

Messaging is the terminal pillar in the chain. Its output — the messaging doc — is the asset that downstream work (sales-comms, content, campaigns, enablement) references directly. The quality of every customer-facing communication a company produces is a symptom of the messaging foundations it's built on.

## Input requirements

Messaging needs three things:

**From the ICP, PSF, and Positioning skills (or provided directly):**
- `icp.md` — the ICP document (firmographics, technographics, triggers, buyer roles, deal economics, pain points, qualification framework, negative ICP)
- `psf.md` — the PSF document (problem areas mapped through pain → impact → solution, objections, proof points)
- `positioning.md` — the Positioning document (market category, value wedge, positioning statement, competitive differentiation by buyer criteria)
- `context.md` — the growing context file. Messaging reads two sections:
  - **PSF Context > For Messaging** — quantified impact data per problem area, pain → consequence chains with buyer language, before/after transformation framing, story arc for strongest problem area, buyer language patterns
  - **Positioning Context > For Messaging** — market category and frame, value wedge in buyer language, competitive contrast themes, positioning statement as messaging spine, buyer evaluation criteria ranked, evidence anchors, "where we don't win" guidance

**What Messaging extracts from these inputs before generating:**
- The positioning statement (becomes the spine — referenced at the top of the messaging doc)
- Buyer language patterns from ICP and PSF (how buyers describe their problem vs. how the company describes its product)
- Quantified impact data (raw material for proof points and value narratives)
- Pain → consequence chains (building blocks for the narrative arc)
- Before/after transformation framing (the "Our Promise" foundation)
- Competitive contrast themes (narrative contrasts to weave into messaging — e.g., "symptom treatment vs. root cause resolution")
- The value wedge in buyer language (anchors every value proposition)

**Clarifying questions (ask only if context is thin):**
If the upstream documents and context file are comprehensive, Messaging shouldn't need to ask anything. If they're sparse, pick 2-3 from this list:

1. "How do customers describe what this product does when they recommend it to a peer?" (captures VoC language — the single most important input for messaging)
2. "What words or phrases does the sales team hear most often from prospects when describing their problem?" (grounds the narrative arc in real language)
3. "Is there existing messaging the team uses today — homepage copy, pitch deck language, email templates?" (identifies V1 material and reveals the gap)

When called by the orchestrator, these answers will be pre-provided. When run standalone, ask them conversationally.

## Mode: V1 (Broad Foundations)

V1 represents what messaging actually looks like in most Series A-B companies — not a deliberate messaging framework, but a collection of homepage value props, a pitch deck narrative, and an elevator pitch that the marketing team owns and the rest of the org loosely references. V1 looks like someone pulled it together from the website and the most recent investor deck. It's organized around product capabilities, written for a marketing audience, and lacks the narrative connective tissue that would make it usable across GTM.

### V1 characteristics — what to produce and why

**Where V1 is passable (realistic unevenness):**
- The value props are the strongest section — more polished than anything else in the document. This is the "comfortable territory" for V1: companies iterate on value props for the homepage and pitch deck because those are the most visible external-facing assets. The value props may even be reasonably compelling — the marketing team has tested headlines and refined the language through multiple website revisions. They just aren't connected to a narrative arc, grounded in buyer language, or supported by the reasoning and evidence that would make them usable beyond marketing.
- There's usually a tagline or elevator pitch that's been rehearsed — it may even sound good — but it describes the product rather than the buyer's problem
- Some awareness of "the story" exists — the pitch deck has a problem slide and a solution slide

**Where V1 falls apart:**
- **Written exclusively for marketing.** The messaging doc reads like a brand guidelines page — headlines, subheadlines, value prop bullets. A product marketer can use it for web copy. But a sales rep can't extract a talk track from it. A CS team can't use it to frame a QBR. Product can't use it to explain a roadmap decision. It's a marketing asset, not a GTM asset.
- **No narrative arc.** There's no "story" that connects the buyer's problem → why it matters now → what the solution changes → why this company is the one to deliver it. The value props exist as standalone bullets. Without a narrative arc, every GTM function tells a different version of the story — or worse, leads with features because there's no story to tell.
- **Feature-framed, not problem-framed.** Value props describe what the product does: "AI-powered [capability]," "Flexible [feature]," "Enterprise-grade [attribute]." These are product descriptions, not buyer messages. A buyer reading them learns what the product is, not why they should care. The value props don't answer "so what?" from the buyer's perspective.
- **No voice of the customer.** The language is internal — how the company talks about itself, not how buyers talk about their problems. No integration of buyer language patterns, no indication that the messaging was tested against how prospects actually describe their situation. This makes it easy to sound like every other vendor in the category.
- **No "why this messaging" reasoning.** The doc presents messaging as decisions already made, without the reasoning behind them. Why these value props and not others? Why this framing? Without reasoning, the team can't adapt the messaging to new situations — they can only copy/paste what exists.
- **Positioning statement is a tagline, not a spine.** If there's a positioning statement, it's treated as a headline — something to put at the top of the website. It's not used as an alignment tool that every piece of messaging traces back to. The relationship between the positioning statement and the value props is implicit at best.
- **No talk track guidance.** No guidance on how to verbally communicate the messaging — what to say in the first 30 seconds of a sales call, how to handle the "what do you do?" question, how to respond when a prospect asks "how is this different from [alternative]?" Sales teams are left to improvise.
- **No voice & tone guidance beyond brand adjectives.** Maybe a few brand personality words ("innovative," "trusted," "bold") but no actionable guidance on how to write or speak. No examples of what good and bad tone looks like. No adaptation guidance for different channels or audiences.

### V1 output template

```markdown
# [Company Name] — Messaging Guide

## Elevator Pitch
"[Company] is [product description] that [capability statement] for [broad audience]."

## Value Propositions

### [Value Prop 1 — the strongest, most polished from homepage iteration]
**Headline:** [Polished, marketing-ready headline — the one that's been A/B tested]
**Supporting Copy:** [2-3 sentences expanding on the capability. Product-framed: describes what the product does, not what the buyer gains. May sound good but answers "what is it?" not "why should I care?"]

### [Value Prop 2]
**Headline:** [Less polished — describes a capability]
**Supporting Copy:** [Thinner — restates the feature as a benefit without evidence or buyer grounding]

### [Value Prop 3]
**Headline:** [May be a stretch — an aspiration or future capability]
**Supporting Copy:** [Weakest section — generic benefit language]

## Brand Voice
- [Adjective 1] — e.g., "Innovative"
- [Adjective 2] — e.g., "Trusted"
- [Adjective 3] — e.g., "Approachable"
[No examples. No guidance on application. No channel adaptation.]
```

**V1 should be fast to produce.** Target 400-700 words. The length comes from the value prop descriptions, not from narrative depth or operational guidance. It should feel like the marketing team put it together from the website and pitch deck — because in most companies, that's exactly how messaging documentation gets created.

**The value prop pattern — comfortable, not connected.** V1's value props are its strongest section because they're the most iterated-on marketing asset. Homepage headlines get tested. Pitch deck bullets get refined through dozens of presentations. But they exist as standalone claims — no narrative connects them, no reasoning explains them, no buyer language grounds them. V1 doesn't question this — it treats polished copy as a proxy for effective messaging. V2 corrects it by embedding each value prop in a narrative arc, grounding it in buyer language, and explaining why it matters for this specific buyer.

**Critical: never label the stronger section.** The unevenness should be visible through quality difference alone — the first value prop is simply more polished and specific than the others. Do not add meta-labels or annotations that call out which section is better.

## Mode: V2 (Focused Foundations)

V2 is built on top of the focused ICP, quantified PSF, and defensible positioning. Because the ICP narrowed to a specific segment, PSF quantified the value, and Positioning defined the frame, Messaging can now do its real job: translate all of that into the words and narrative patterns every GTM function uses to tell a coherent, buyer-anchored story.

### V2 characteristics — what to produce and why

**The core shift from V1 to V2:**
V1 organizes around the product (what it does, why it's good). V2 organizes around the buyer's journey (what's hurting them, why they should care now, what changes, and why this company is the one to deliver it). This inversion changes everything — marketing writes campaigns that start with the buyer's problem instead of the product's features. Sales leads conversations with the buyer's pain instead of a product demo. CS frames value delivery in terms of the buyer's outcomes instead of product usage metrics.

**The single most important V1/V2 difference:** V2 messaging is anchored in voice of the customer — how buyers actually describe their problem, their situation, and their criteria — and explicitly shows how VoC has been integrated. V1 uses the company's internal language. This is the difference between messaging that makes a buyer say "they get it" (V2) and messaging that makes a buyer say "sounds like every other vendor" (V1). When generating V1, use the company's own product language. When generating V2, use buyer language patterns from the ICP and PSF, and note where VoC has shaped the messaging.

**What V2 must include:**

- **Positioning statement as the spine.** Reference the positioning statement from the Positioning doc at the top. This anchors everything — every piece of messaging below should be traceable back to this statement. The messaging doc doesn't regenerate or rewrite the positioning statement; it uses it as the alignment spine and provides brief guidance on how to use it as an anchor without quoting it directly.

- **The narrative arc.** A three-part story structure that every GTM function can use as the foundation for their communications:
  - **The Problem We're Solving:** What's happening in the buyer's world that demands attention? Written in buyer language — the way a prospect would describe the situation to their CEO, not the way the company describes it on a product page. Grounded in PSF's pain → consequence chains.
  - **Why Now / Why Care:** What's changed that makes this problem urgent? Why can't the buyer wait another quarter? This creates the urgency that moves the buyer from "interesting" to "we need to do something." Grounded in ICP triggers and market context from Positioning.
  - **Our Promise:** What changes when the buyer chooses this solution? Not what the product does — what the buyer's world looks like after. Grounded in the value wedge from Positioning and the before/after transformation framing from PSF.

  The narrative arc should be tight — 3-5 sentences per section, written in a way that a rep could internalize and deliver conversationally, or a marketer could adapt into campaign copy. It should NOT read like a press release.

- **Messaging pillars (2-4).** Each pillar is a value proposition paired with its actual messaging. This is the core operational section — it gives every GTM function the specific language to use. For each pillar:

  | Element | What to Include |
  |---------|----------------|
  | **Pillar Name** | A concise label for the value proposition (not a tagline — an internal reference name) |
  | **Headline** | The buyer-facing message in one sentence — written in buyer language, not product language |
  | **Supporting Message** | 2-3 sentences expanding the headline. Must answer "so what?" from the buyer's perspective. Connects to quantified impact from PSF. |
  | **Why It Matters** | The reasoning behind this pillar — why this value prop (not another one), why it resonates with this ICP, what evidence supports it. This is the "why this messaging" reasoning that V1 lacks. |
  | **Proof Point** | Customer evidence, benchmark, or credible estimate that backs the claim. From PSF proof points. |

  Pillars should be ordered by importance to the ICP buyer — lead with the pillar that maps to their primary evaluation criterion (from Positioning's buyer evaluation criteria ranking).

- **Voice & tone guidelines.** Actionable guidance on how to communicate — not brand adjectives, but practical direction that a content writer, a sales rep, and a CS manager can all apply. Include:
  - **Voice characteristics:** 3-4 descriptors with examples of what each sounds like in practice and what it *doesn't* sound like. (e.g., "Confident, not arrogant: 'We've seen this pattern in 200+ implementations' — not 'We're the industry leader in X.'")
  - **Tone adaptation:** How tone shifts across channels and contexts — website copy vs. sales email vs. discovery call vs. support interaction. Same voice, different register.
  - **Buyer language patterns:** Specific words and phrases to use (from VoC) and specific words to avoid (internal jargon, vendor-speak). Include the contrast: "Buyers say [X]. We've been saying [Y]. Use their language."
  - **The "vendor test":** A quick litmus test — if you replaced the company name with any competitor's name and the copy still made sense, the messaging is too generic. Redo it.

- **Talk track guidance.** Not full scripts (that's the sales-comms skill's territory), but principles and frameworks that guide verbal communication. Include:
  - **The 30-second version:** How to answer "what do you do?" using the narrative arc, not a product description. Provide the structure: [Problem] → [What we do differently] → [Proof]. This should feel like a conversation, not a pitch.
  - **The "how are you different?" response:** How to handle the inevitable competitive comparison question using the value wedge and competitive contrast themes from Positioning. Lead with the buyer's criterion, not the product's feature.
  - **Language to avoid:** Specific phrases that signal vendor-speak or weak positioning. (e.g., "We're a platform that..." "Our solution leverages..." "We help companies...")

- **Metaphors and analogies (optional but recommended).** If a strong metaphor or analogy emerges from the narrative arc, include it. Good metaphors make complex value props instantly understandable. Include a brief testing framework: Does it simplify? Would someone outside the industry get it? Does it reinforce the value wedge?

### V2 output template

```markdown
# [Company Name] — Messaging Framework

## Positioning Spine
> [Positioning statement from the Positioning doc — referenced as the anchor, not regenerated]

**How this anchors the messaging:** [1-2 sentences on how the narrative arc, pillars, and voice all trace back to this statement. Brief guidance on using the positioning statement as a compass — not as copy to quote, but as the test every piece of messaging should pass.]

## The Story

### The Problem We're Solving
[What's happening in the buyer's world — written in buyer language, grounded in PSF pain → consequence chains. 3-5 sentences that a prospect would read and say "that's exactly what's happening to us."]

### Why Now
[What's changed that makes this urgent — why the buyer can't wait another quarter. Grounded in ICP triggers and market context. 2-4 sentences that create urgency without being salesy.]

### Our Promise
[What changes when the buyer chooses this solution — the buyer's world after, not the product's features. Grounded in the value wedge and before/after transformation framing. 2-4 sentences.]

## Messaging Pillars

### 1. [Pillar Name] — [One-line headline in buyer language]
[2-3 sentence supporting message. Answers "so what?" from the buyer's perspective. Connects to quantified impact.]

**Why this matters:** [Reasoning — why this pillar, why it resonates with this ICP, what evidence supports it]
**Proof point:** [Customer evidence or credible estimate from PSF]

### 2. [Pillar Name] — [Headline]
[Same structure]

### 3. [Pillar Name] — [Headline]
[Same structure]

### [Optional: 4. Pillar Name — Headline]
[Same structure — only if warranted. 3 is usually sufficient. 4 only if a genuine fourth value area exists that the ICP cares about.]

## Voice & Tone

### Voice Characteristics
| Characteristic | Sounds Like | Doesn't Sound Like |
|---------------|-------------|-------------------|
| [e.g., Confident] | [Example phrase/sentence] | [Counter-example] |
| [e.g., Specific] | [Example] | [Counter-example] |
| [e.g., Empathetic] | [Example] | [Counter-example] |

### Tone by Context
- **Website / marketing content:** [How the voice shows up in written marketing]
- **Sales conversations:** [How the voice adapts for verbal, 1:1 communication]
- **Customer success:** [How the voice adapts for ongoing relationship context]

### Buyer Language Patterns
| Buyers Say | We've Been Saying | Use Their Language |
|-----------|-------------------|-------------------|
| "[Buyer phrase]" | "[Internal phrase]" | [Guidance on adoption] |
| "[Buyer phrase]" | "[Internal phrase]" | [Guidance] |

**The vendor test:** If you replaced [Company] with any competitor's name and the copy still made sense, the messaging is too generic. Redo it.

## Talk Track Guidance

### "What do you do?"
[The 30-second answer using the narrative arc. Structure: Problem → What we do differently → Proof. Written conversationally — this is how a rep would say it in a meeting, not how it would appear on a website.]

### "How are you different?"
[How to handle the competitive comparison question. Lead with the buyer's criterion, not the product's feature. Use competitive contrast themes from Positioning.]

### Language to Avoid
- [Specific phrase] — why it's a problem and what to say instead
- [Specific phrase] — why and alternative
- [Specific phrase] — why and alternative

```

**GTM workability check — apply but don't include in doc.** Before finalizing, validate the messaging against these four questions. If any answer is "no," the messaging needs work. But the check itself is a skill-level quality gate, not a section in the output document:
- **Marketing:** Can a content marketer write a blog post, an ad, and a landing page from this messaging without needing to reinterpret or invent?
- **Sales:** Can a rep internalize the narrative arc and deliver it conversationally in a discovery call? Can they answer "what do you do?" and "how are you different?" without improvising?
- **Product:** Can a PM use the messaging to frame a feature announcement in terms of buyer value instead of technical capability?
- **CS:** Can a CSM frame a QBR around the messaging's value pillars to show "here's the problem you had, here's what changed"?

**V2 should be thorough but disciplined.** Target 1,500-2,500 words. This is likely the longest document in the chain because it's translating strategy into usable language — the narrative arc, pillars with supporting messaging, voice/tone guidance, and talk track principles all need room. But don't pad: if a pillar's messaging is clear in 2 sentences, don't stretch to 5. The test is workability — can every GTM function pick this up and use it without reinterpretation?

## Updating context.md

After generating, append a "Messaging Context" section to context.md. Since Messaging is the terminal pillar, this update is minimal — it captures the key messaging assets so other skills (like sales-comms) can reference the context file without reading the full messaging doc.

**For V2, use this structure:**

```markdown
## Messaging Context (added by Messaging skill)
- Narrative arc summary: the problem → why now → promise structure in condensed form
- Messaging pillars: pillar names and one-line headlines (not full messaging — just the reference labels)
- Voice & tone summary: the core voice characteristics and key buyer language patterns
- Primary metaphor/analogy (if one was developed)
- Talk track anchors: the "what do you do?" and "how are you different?" frameworks in condensed form
```

**For V1:** A thinner "Messaging Observations" section with bullets — whatever messaging assets were identified (value props, elevator pitch, brand adjectives) without the narrative, reasoning, or operational guidance.

```markdown
## Messaging Observations (added by Messaging skill)
- [Key value props identified — headlines only]
- [Elevator pitch or tagline]
- [Brand voice adjectives if any]
- [Any messaging patterns observed]
```

## Generating realistic content

**Narrative arc grounding:** The narrative arc must be grounded in upstream documents. The "problem" comes from PSF's pain → consequence chains, written in buyer language from the ICP context. The "why now" comes from ICP triggers and Positioning's market context. The "promise" comes from Positioning's value wedge and PSF's before/after transformation framing. Don't invent narrative elements that aren't supported by the upstream chain — if a claim can't be traced back to ICP, PSF, or Positioning, flag it as an assumption.

**Voice of the customer integration:** V2's defining characteristic is that it sounds like the buyer, not like the company. Use buyer language patterns from the ICP Context and PSF Context explicitly. When writing the narrative arc and pillar messaging, default to the buyer's words. When there's a tension between how the company describes itself and how buyers describe the problem, use the buyer's version and note the contrast in the "Buyer Language Patterns" table. This is one of the highest-value things the messaging doc does — it forces the company to adopt the buyer's frame.

**Messaging pillar grounding:** Each pillar should be traceable to a specific combination of: a problem area from PSF (the "what"), the value wedge from Positioning (the "why"), and quantified impact from PSF (the "proof"). Don't create pillars that aren't grounded in the upstream chain. If there are only 2 strong pillars supported by evidence, use 2 — don't stretch to 3 or 4. Pillars should be ordered by importance to the ICP buyer, based on Positioning's buyer evaluation criteria ranking.

**V1 sourcing:** V1 content should look like it was pulled from the company's website, pitch deck, and brand guidelines. Use the language from their homepage, their value prop bullets, their "About" section. V1 reflects how the company talks about itself — product capabilities framed as benefits, internal language that sounds polished but doesn't connect to the buyer's world.

**V2 sourcing:** V2 content should sound like it was developed from buyer interviews and customer research. The narrative arc should use buyer language. The pillars should be framed around buyer outcomes, not product capabilities. The voice guidance should reflect how the buyer wants to be spoken to, not how the company wants to sound.

**The "why this messaging" reasoning:** V2 includes "Why It Matters" reasoning for each pillar. This is not marketing fluff — it's the strategic rationale that connects each pillar back to the ICP, PSF, and Positioning. This reasoning is what makes the messaging doc usable beyond marketing: a sales rep reading "Why It Matters" understands not just what to say, but why it resonates with this buyer. V1 omits this entirely — it presents messaging as decisions already made.

## When called by the orchestrator

The orchestrator will provide:
- `icp.md` for the selected company
- `psf.md` for the selected company
- `positioning.md` for the selected company
- `context.md` with ICP Context, PSF Context, and Positioning Context already populated
- Mode (V1 or V2)
- For V2: the focused ICP segment, quantified PSF, and defensible positioning to build messaging around

Generate the document, update context.md, and return both. Don't re-ask questions the orchestrator or upstream skills already answered.

## When run standalone

1. Ask for the ICP document, PSF document, Positioning document, and context file — or context about the company
2. If upstream documents are missing, note the gap — Messaging without all three upstream pillars will be progressively weaker. Missing ICP means no buyer language. Missing PSF means no quantified value. Missing Positioning means no spine. Offer to produce a "best effort" messaging doc or recommend running the upstream skills first.
3. Extract what you can, ask 2-3 clarifying questions if needed
4. Generate V1
5. If focused upstream documents (V2-quality ICP, PSF, and Positioning) are available, ask if the user wants V2 Messaging — then generate it

## File output

Save documents as markdown files:
- V1: `[company-name]/v1/messaging.md` + update `[company-name]/v1/context.md`
- V2: `[company-name]/v2/messaging.md` + update `[company-name]/v2/context.md`

When run as part of the orchestrator sequence, the orchestrator manages file paths. When standalone, create the directory structure yourself.
