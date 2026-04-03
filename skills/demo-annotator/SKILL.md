---
name: demo-annotator
description: >
  Annotate GTM demo outputs with brief, plain-language commentary explaining why V1 and V2
  outputs differ — tracing each difference back to the foundation documents (ICP, problem-solution,
  positioning, messaging) that caused it, and connecting each difference to a business challenge
  (top of funnel growth, engagement & conversion, retention, account value). Tags each annotation
  with the business challenge(s) it reflects, and produces reveal statements that connect common
  foundation mistakes to business impact. Produces 2-3 short, scannable annotations per output pair.
  Use this skill whenever the user wants to: add commentary to demo outputs, explain why V1 and V2
  are different, annotate a side-by-side comparison, make a demo self-explanatory, or add "why this
  matters" context to existing V1 vs V2 output pairs. Also trigger when the user mentions annotate,
  commentary, explain the difference, "why is V2 better," call out differences, or "add notes to
  the demo."
---

# Demo Annotator

This skill reads a pair of V1 ("Original") and V2 ("With Methodology") outputs from a gtm-demo run, identifies 2-3 differences between them, tags each with the business challenge it reflects, and writes brief commentary that does two things: names what in the foundation documents caused each difference, and connects it to a business challenge the audience cares about. It also produces reveal statements that connect common foundation mistakes to business impact.

## Why this exists

The demo talk track starts with business challenges the prospect recognizes — top of funnel growth, engagement & conversion, retention, account value. The annotations show *how* those challenges manifest in GTM outputs (the "how this shows up" step), and the reveal connects the difference back to the foundation quality that caused it (the "why" step).

This is a demonstration of focus, not a researched business recommendation. The annotations should make the impact of foundation quality feel obvious and concrete — not prescribe specific strategy decisions.

## The four business challenges

Every annotation must be tagged with one or more of these challenges. These are the organizing frame for the demo — the prospect picks the one most relevant to them, and the annotations show how it plays out in real GTM outputs.

**Top of funnel growth** — pipeline creation is slow, CAC is high, demand creation is inconsistent. Shows up in GTM when: targeting is broad (dilutes budget, raises CAC), positioning is defensible only through 1:1 feature comparison (no differentiation), content doesn't cut through noise because it's not relevant to a specific audience or problem.

**Engagement & conversion** — weak win rate, low engagement, low response rate, slow deal cycles. Shows up in GTM when: messaging doesn't resonate or use the buyer's language, content is surface-level and doesn't earn clicks or engagement, proof points aren't problem-specific, outreach is generic and doesn't connect with the audience's priorities.

**Retention** — high churn, weak NRR, low CSAT, low referral volume. Shows up in GTM when: messaging across the customer journey is inconsistent (expectations set in sales don't match post-sale experience), value story is unclear so customers can't articulate why they stay, problem-solution work is shallow so the product feels interchangeable.

**Account value** — low ACV, low upsell opportunity, deal size inconsistency, high discount rate. Shows up in GTM when: pricing is anchored to competitor pricing instead of problem value, positioning leads with features instead of differentiated value, ICP is too broad to support focused packaging.

## What this skill needs

1. **Company name** — to locate the V1/V2 foundation docs and demo outputs
2. **Demo output slug** — which prompt's outputs to annotate (the subfolder name under `demo-output/`)

If the user says something like "annotate the Tonic Textual cold email," parse the company and look up available demo outputs. If there's only one, use it. If there are multiple, ask which one.

## How to annotate

### Step 1: Read the inputs

Read all of these (you need both the outputs AND the foundations to trace cause-and-effect):

**Demo outputs:**
- `company-gtm-docs/{company}/demo-output/{slug}/v1.md`
- `company-gtm-docs/{company}/demo-output/{slug}/v2.md`
- `company-gtm-docs/{company}/demo-output/{slug}/meta.json`

**V1 foundation docs:**
- `company-gtm-docs/{company}/v1/icp.md`
- `company-gtm-docs/{company}/v1/psf.md`
- `company-gtm-docs/{company}/v1/positioning.md`
- `company-gtm-docs/{company}/v1/messaging.md`

**V2 foundation docs:**
- `company-gtm-docs/{company}/v2/icp.md`
- `company-gtm-docs/{company}/v2/psf.md`
- `company-gtm-docs/{company}/v2/positioning.md`
- `company-gtm-docs/{company}/v2/messaging.md`

### Step 2: Identify 2-3 differences (max 4) and tag challenges

Scan both outputs for the moments where the quality gap is most visible AND most connected to a business challenge. You're not looking for every difference — you're looking for 2-3 that make a demo attendee think "this is costing me revenue" AND "my team couldn't have made the call that produced this difference on their own."

**Prioritize differences that trace back to a strategic decision.** The strongest annotations aren't just about V2 having better information — they're about V2 reflecting a deliberate choice to focus on one path over others. Look for moments where V2 quality stems from a niche selection (chose one segment over others), a tradeoff (excluded something viable to go deeper on something stronger), or a focus decision the team hasn't made. The V1 output isn't wrong — it's the rational output of a team that hasn't made the focusing decision yet.

**For each difference you identify:**

1. **Select the specific passage from each document** — the 1-4 sentences (or one short paragraph) from v1.md and v2.md that most clearly demonstrate the difference. Copy the text exactly as it appears in the source document. Pick the passage where the contrast is most visible to a reader seeing the outputs for the first time.

2. **Tag the challenge(s)** — which of the four business challenges does this difference reflect? An annotation can be tagged with multiple challenges if the difference is relevant to more than one. Use the challenge-to-foundation mapping table below to identify the connection. Only tag challenges where the connection is clear and direct — don't stretch.

3. **Frame the V1/V2 observations through the challenge lens** — don't just describe what's different; describe how the difference shows up as the tagged business problem. For example, if tagged "Retention," the V1 observation should explain how the output quality contributes to churn or weak NRR, not just that it's generic.

**Not every output will have examples of every challenge.** A cold outbound email is unlikely to reflect retention challenges. A blog post may not connect to account value. Tag only what's genuinely visible — don't force-fit.

**The specificity cascade — your analytical lens:**

The strongest annotations trace a compounding chain that starts with a non-decision: No niche decision → ICP stays broad → can't assert the problem with confidence → can't name the mechanism → can't frame as a peer → defaults to vendor pitch. The V1 team isn't incompetent — they're operating rationally within the ambiguity of not having chosen a focus. When you find a visible difference, identify the decision point — the moment where someone would have needed to choose one path over others. That's the link your annotation should highlight, and the foundation section to trace back to.

**What makes a good annotation target:**

The best annotations connect four things in a short chain:
1. A **strategic decision** that required expertise (choosing a niche, excluding a viable segment, selecting which problem to lead with)
2. A specific foundation doc **section** that decision shaped (not just "the ICP" but what specifically — the buying triggers, the pain points, the firmographics — said or didn't say)
3. A specific **output move** that section enabled or prevented (the opening hook, the mechanism naming, the proof attribution, the audience framing)
4. A business outcome framed through the **decision gap** (what the lack of that decision costs — not just "this is better" but "without this decision, the team can't get here")

**Where to look for high-signal differences:**

*Differences caused by the ICP:*
- V1 opens with the sender or a generic industry observation vs. V2 opens with something specific to the buyer's world *(the V2 ICP's buying triggers give the output a specific signal to reference as the opening hook)*. For marketing content, broad targeting dilutes budget — the same spend reaching a million people vs. focused on the thousand who matter. For sales outreach, broad targeting means the seller can't create a strong enough signal to earn engagement — the outreach sounds like it could have come from any vendor. In both cases, specificity increases engagement and repetition within a tight audience builds trust.
- V1 asks about the problem ("Are you struggling with...?") vs. V2 states it as fact *(the V2 ICP's pain points are specific enough to assert confidently)*. When you can't be confident your prospect has the problem, you ask — and questions signal uncertainty to buyers. Content relevance is what breaks through noise fatigue.
- V1 could be sent to anyone in the industry vs. V2 is clearly written for one type of buyer *(the V2 ICP's buyer roles table tells the output exactly whose priorities to reflect)*. Generic outreach that doesn't acknowledge specific stakeholder priorities gets ignored in B2B, where multiple decision-makers each need to see their role reflected.

*Differences caused by problem-solution work:*
- V1 names the problem at headline level ("data quality challenges") vs. V2 describes the specific mechanism *(the V2 PSF's pain-specific subsections describe the workflow, the activity, the sequence of events — not just the symptom)*. Buyers form opinions before talking to sales — surface-level content doesn't earn the next click.
- V1 has no quantified impact vs. V2 has specific costs or time losses *(the V2 PSF's impact-quantified subsections provide dollar figures and FTE waste the output can reference)*. Without numbers, every claim sounds the same as every other vendor's claim. Quantified pain is what makes a buyer stop and calculate whether this is worth their time.
- V1 proof points are logo lists vs. V2 proof points show before/after outcomes in the buyer's own context *(the V2 PSF's proof points include customer stories with specific before/after metrics)*. Logo lists signal "we sell to everyone" — the opposite of "we understand your world." Role-specific proof is what moves economic buyers, technical evaluators, and end users forward together.

*Differences caused by positioning:*
- V1 names competitors directly vs. V2 dismisses the typical approach *(the V2 positioning's "how buyers evaluate alternatives" section gives the output specific alternatives to dismiss as a peer observation)*. Direct competitor mentions invite comparison shopping — the buyer adds three vendors to the eval instead of one. Framing why the typical approach fails positions you as the only alternative.
- V1 leads with product capabilities vs. V2 leads with what changes for the buyer *(the V2 positioning's value wedge frames the structural advantage in terms the buyer cares about, not features)*. Feature-first language converts at commodity rates. Problem-first language can shift conversion significantly when the underlying fit is real.

*Differences caused by messaging:*
- V1 has no connecting thread between sections vs. V2 is organized around a single idea *(the V2 messaging's pillars anchor different sections/emails to the same narrative thread)*. When benefits shift between assets (or even within a single asset), the product feels fuzzy and risky to buyers, slowing decisions. Consistent messaging compounds — recognition, trust, conversion.
- V1 uses internal product language vs. V2 uses the buyer's language *(the V2 messaging's buyer language patterns table maps what buyers say vs. how to reframe it)*. Buyers scan for words that match the problem already in their head. Internal language ("AI-powered platform," "intelligent automation") doesn't trigger recognition — it gets filtered as noise.
- V1 value props float independently vs. V2 tells a story *(the V2 messaging's narrative arc — problem, why now, promise — gives the output a structure that connects every section)*. When messaging aligns across acquisition, sales, and customer success, win rates improve and sales cycles shorten because expectations are set earlier and reinforced consistently.

---

### Foundation-to-output mapping tables

These tables are your **analytical toolkit** for tracing cause-and-effect. They map which foundation doc section enables which output move, and what V1 defaults to when that section is missing or weak. Use them to identify the 2-3 highest-signal differences — do not try to cover all of them.

**For sales communications outputs (cold emails, sequences, call prep, competitive briefs):**

| Foundation Doc Section | V2 Output Move It Enables | What V1 Does Instead |
|---|---|---|
| ICP — Buying Triggers | Opening hook references a specific trigger the prospect recognizes | Opens with sender/company intro or generic industry observation |
| ICP — Pain Points | Asserts the problem as observed fact | Asks rhetorical questions ("Are you struggling with...?") |
| PSF — Pain (Specific) | Names the mechanism — the workflow, the activity, the sequence | Names the symptom only ("alert fatigue," "data quality challenges") |
| PSF — Impact (Quantified) | References specific costs or time losses | No quantified impact; vague or unsubstantiated claims |
| PSF — Proof Points | Casual social proof with before/after outcomes | Logo-drops or formal stats without story context |
| Positioning — How Buyers Evaluate Alternatives | Dismisses the typical approach as a peer observation | Names competitors directly, inviting comparison shopping |
| Positioning — Value Wedge | Frames structural advantage competitors cannot claim | Leads with product capabilities any vendor could list |
| Messaging — Pillars | Each email in a sequence anchored to a different pillar | No connecting thread; topics shift randomly between emails |
| Messaging — Buyer Language Patterns | Uses the buyer's own words for the problem | Uses internal product language ("AI-powered platform") |

**For marketing content outputs (one-pagers, blog posts, landing pages):**

| Foundation Doc Section | V2 Output Move It Enables | What V1 Does Instead |
|---|---|---|
| ICP — Primary Segment / Firmographics | Describes the reader's world accurately without labeling them | Writes for "everyone" — no audience signal in the copy |
| ICP — Buying Triggers | "Why now" urgency framing | No urgency; timeless but toothless |
| PSF — Pain (Specific) | Problem section describes mechanism-level workflows | Problem section stays at symptom level or is missing entirely |
| PSF — Impact (Quantified) | Proof bar with attributed, quantified outcomes | Vague or unattributed metrics ("trusted by leading organizations") |
| PSF — Proof Points | Customer quotes describing before/after transformation | No customer stories, or generic praise quotes |
| Positioning — Value Wedge | Solution framing a competitor could not replicate | Feature list any competitor could swap their logo onto |
| Positioning — How Buyers Evaluate Alternatives | "Conventional wisdom is wrong" tension in opening | No tension; jumps straight to product description |
| Messaging — Pillars | Benefit sections map to pillars; blog goes deep on one | Independent feature/benefit claims with no thread |
| Messaging — Story (Problem → Why Now → Promise) | Content flow follows narrative arc | Essay structure with label headings ("Background," "Solution") |
| Messaging — Voice & Tone | Confident, human, earned-authority voice | Corporate, hedged, vendor-centric tone |

### Challenge-to-foundation mapping

Use this table to identify which challenge to tag each annotation with, and how the foundation gap connects to the business problem. This is your primary tool for challenge tagging.

**Top of funnel growth:**

| Foundation | How It Connects |
|---|---|
| ICP | For marketing: relevance to a specific audience focuses budget — the same spend reaching the right people vs. diluted across everyone. For sales: specificity creates a strong enough signal that outreach earns engagement instead of getting filtered. Both drive recognition and demand |
| Problem-solution | Problem specificity drives urgency and clicks — surface-level content doesn't earn engagement |
| Positioning | A clear niche makes your product the best solution to a specific problem — builds recognition and demand instead of competing on features |
| Messaging | Messaging consistency builds trust, recognition, and creates clarity — repetition within a focused audience compounds into pipeline |

**Engagement & conversion:**

| Foundation | How It Connects |
|---|---|
| ICP | Connects specific buyers with their specific priorities — improved engagement and conversion because the content feels written for them |
| Problem-solution | High-value problem with proof drives urgency and clicks — buyers engage when content reflects their actual situation |
| Positioning | Clear differentiation earns consideration — feature comparison invites shopping, problem framing earns conversion |
| Messaging | Messaging consistency builds trust, recognition, and creates clarity — when every touchpoint tells the same story, conversion improves |

**Retention:**

| Foundation | How It Connects |
|---|---|
| ICP | Clarity in who you serve and the value you deliver leads to customer referrals — customers can articulate your value to peers |
| Problem-solution | High problem value + value delivery reduces churn — when the problem you solve is clearly valuable, customers stay |
| Positioning | Consistency across GTM strengthens the value narrative — customers who hear the same story from marketing, sales, and CS retain better |
| Messaging | Alignment across the customer journey sets expectations, reinforces them, and delivers on value — inconsistency makes the product feel interchangeable |

**Account value:**

| Foundation | How It Connects |
|---|---|
| ICP | Focused audience supports strong pricing and packaging strategy to maximize ACV — you can price for the specific value you deliver |
| Problem-solution | Strong problem value drives increased account value, supports post-close value delivery, and creates a clear path to expansion and upsell |
| Positioning | Unique, differentiated value increases ACV — when buyers see you as the only solution to their specific problem, price resistance drops |
| Messaging | Consistent value narrative across the journey supports expansion — when value is clear and reinforced, upsell conversations are natural |

### Highest-signal differences by content type

When you're deciding which 2-3 differences to annotate, start here:

- **Cold emails:** ICP buying triggers → opening hook, and PSF pain-specific → mechanism naming are usually the most visible. Positioning → peer observation is a strong third.
- **Sequences:** Look for whether each V2 email anchors to a different messaging pillar vs. V1 repeating the same generic pitch.
- **One-pagers:** Messaging pillars → benefit sections, and PSF → proof bar are highest-signal.
- **Blog posts:** Positioning → tension opening, and messaging story arc → content flow are most visible.
- **Landing pages:** ICP → audience framing (without segment labels), and PSF → problem section dominate.
- **Call prep / competitive briefs:** PSF → pre-call hypotheses, and positioning → competitive framing are highest-signal.

### Step 3: Write the annotations

Each annotation has a **Section** label plus exactly three lines. Each V1/V2/Impact line is exactly one sentence. This constraint is the most important formatting rule in the skill — it's what makes annotations scannable during a live demo.

1. **Section:** — Required. A natural, descriptive label for what the prospect is looking at (e.g., "Two different email openings", "How each version describes the problem"). This is the primary heading above each passage pair. It should read as a plain-language description of the comparison — not a generic label like "Email Opening" or a methodology term.
2. **V1:** — One sentence. What the original foundation caused the output to do.
3. **V2:** — One sentence. What the focused foundation caused the output to do differently.
4. **Impact:** — One short sentence (~20 words max). A standalone, centered "why this matters" statement that lands after the prospect has seen the contrast. States the business reality as fact using challenger principles — not a framing setup. Must tie to a business outcome.

If you can't say it in one sentence, you're being too specific. Zoom out. Name the pattern, not the details.

**Brevity calibration:**

Each line should be roughly 15-25 words. The entire annotation (all three lines) should be readable in under 10 seconds. If you're quoting specific metrics, stats, product names, or technical details from the outputs, you've gone too deep — describe the *type* of difference, not the specifics.

This is a demonstration that shows the impact of focus. It is not a researched strategy recommendation. Don't cite specific numbers from the outputs (miss rates, BLEU scores, dollar figures). Don't name specific product capabilities or competitive claims. Describe the pattern: "the output uses quantified outcomes" not "the output cites 95% false alarm reduction."

**Voice and style:**

Be direct, be concise, say it once and say it well. Use specific, recognizable situations rather than abstract descriptions. Center business impact and revenue outcomes. Use human, true-to-speech language that speaks to an exec audience.

Abbreviations: GTM and ICP are fine. Spell out everything else — problem-solution, positioning, messaging.

**Impact lines are standalone centered statements that appear after the prospect has already seen the contrast.** They land as a concise "why this matters" — the fact of the matter, stated with challenger confidence. The prospect has just seen two passages side by side; the Impact tells them what that difference actually costs.

**The voice:** State the observation as fact, not as a setup or framing device. Use challenger principles — teach the prospect something about their own situation they haven't articulated. Tie every Impact back to a business outcome. The tone is "here's what's actually happening" not "here's why you should care."

**Length constraint:** Impact must fit as a header — one sentence, max ~20 words. If it's longer, cut it. No compound sentences joined by dashes or semicolons.

**The pattern:** {what the unfocused version actually is} + {what earns the outcome instead}.

Bad impact: "Specificity allows the email to surface in relevant conversations repeatedly, building recognition and trust instead of competing for attention in a crowded inbox." (too long, tactical, reads as a setup paragraph)

Good impact: "Generic observations are just noise. What earns a response is a story the buyer sees themselves in." (concise, states the fact, ties to outcome)

Bad impact: "Sales outreach that opens with a generic observation gets filtered as noise — without the decision of who you're built for, sellers can't earn the first read from the buyers who actually need them." (too long, too much scaffolding — reads as explanation, not statement)

Good impact: "Broad outreach sounds like every other vendor. Specificity is what earns the first conversation." (concise, challenger framing, business outcome)

Bad impact: "Buyers form opinions before talking to sales — showing you understand their real constraint earns the next click." (tactical — "next click" is a marketing metric, not a business outcome)

Good impact: "Surface-level pain descriptions don't earn consideration. Mechanism-level specificity does." (states the fact, names what works)

Bad impact: "When targeting is broad, the same budget reaches everyone and resonates with no one — specificity is what focuses pipeline and drives engagement." (too long, compound sentence)

Good impact: "Content written for everyone converts no one. Focus is what turns budget into pipeline." (concise, business outcome)

**V2 observations: let the specificity speak for itself.** Don't summarize V2's content with generic labels like "the healthcare prospect" or "healthcare-specific outcomes." Instead, point to the fact that the focused foundation doc contains richer, more specific information — and let the reader see the output difference directly. The V2 observation should describe what the output *does* differently, not restate what's in the V2 docs.

Bad V2: "The focused ICP targets healthcare only, so the email opens with a concrete signal the healthcare prospect recognizes."

Good V2: "The focused ICP is specific enough that the email can open with a signal the prospect recognizes from their own world — no generic industry framing needed."

**Banned language — these terms leak methodology internals that the reader hasn't been introduced to:**
- "narrative spine," "positioning spine," "messaging spine"
- "value wedge," "defensible wedge," "competitive wedge"
- "pillars," "messaging pillars"
- "PSF," "pain chains," "pain-to-value"
- "buyer-anchored," "niche-driven," "problem-anchored"
- "messaging framework," "positioning framework"
- "AE #1," "AE #2," or any reference to seller personas in the demo outputs
- Any specific metrics, percentages, dollar figures, or product feature names pulled from the outputs
- Foundation doc section names used as labels: "Buying Triggers section," "Pain (Specific)," "Value Wedge section," "Impact (Quantified)," "narrative arc," "specificity cascade" — these are for your internal analysis when tracing cause-and-effect, not for annotation text

The reason these are banned: the reader is seeing this skill's output during a demo. They don't have context for methodology-specific terms, and specific numbers make it look like a business case rather than a demonstration of how focus changes everything downstream. Foundation doc section names are part of your analytical toolkit — they help you trace the right causal chain, but they should never appear in the annotations themselves.

**Instead, use language like:**
- "the original ICP is broad, so..." / "the focused ICP targets one buyer type, so..."
- "the original problem-solution work stays surface-level..." / "the focused problem-solution work maps the specific mechanism..."
- "the original positioning leads with features..." / "the focused positioning explains why the typical approach fails..."
- "the original messaging has no connecting thread..." / "the focused messaging is organized around a single idea..."
- "the focused problem-solution work maps the specific workflow that burns time, so the output can describe the mechanism instead of just naming the symptom..."
- "the focused positioning explains why the typical approach falls short, so the output can dismiss alternatives as a peer observation instead of naming competitors..."
- "the focused ICP knows when pain becomes acute for this buyer, so the output can state the problem as fact instead of asking about it..."
- "the focused messaging gives every section a connecting thread, so the output tells a story instead of listing independent benefits..."

**Good examples — notice: one sentence per line, no metrics, no jargon, Impact is short and states the fact:**

> **Section:** Two different email openings
>
> **Challenge:** Engagement & Conversion
>
> **V1:** The original ICP is broad, so the email defaults to a generic industry observation and can't personalize.
>
> **V2:** The focused ICP is specific enough that the email can open with a signal the prospect recognizes from their own world.
>
> **Impact:** Generic observations are just noise. What earns a response is a story the buyer sees themselves in.

> **Section:** Who the landing page is written for
>
> **Challenge:** Top of Funnel Growth
>
> **V1:** The original ICP is broad, so the landing page writes for everyone without any audience signal in the copy.
>
> **V2:** The focused ICP targets one buyer type, so the page describes the reader's world accurately without labeling them.
>
> **Impact:** Content written for everyone converts no one. Focus is what turns budget into pipeline.

> **Section:** How each version describes the problem
>
> **Challenge:** Engagement & Conversion
>
> **V1:** The original problem-solution work describes pain at headline level, so the output sounds like every other vendor in the category.
>
> **V2:** The focused problem-solution work maps how the pain actually plays out, so the output describes the buyer's real workflow and its cost.
>
> **Impact:** Surface-level pain descriptions don't earn consideration. Mechanism-level specificity does.

> **Section:** The thread that connects each section
>
> **Challenge:** Retention
>
> **V1:** The original messaging lists independent value propositions, so the output reads as a feature list with no connecting thread.
>
> **V2:** The focused messaging is organized around a single idea, so every section of the output reinforces the same story.
>
> **Impact:** A shifting value story makes the product feel interchangeable. Consistency is what retains customers.

**Bad examples and why:**

> "The V1 ICP spans seven industries and six buyer roles without prioritization, so AE #2 has no specific signal to reference" → too specific (counting industries), references AE #2, too long
>
> "V2's positioning claims a single defensible wedge (synthetic data that preserves clinical meaning for healthcare LLMs)" → methodology jargon ("defensible wedge"), names specific product capabilities, reads like a strategy recommendation
>
> "Proof comes from healthcare-specific evidence: health system accuracy comparison, 12-point AUC improvement = $2.3M/year" → cites specific metrics from the output, too deep for a demonstration
>
> "The V2 messaging framework anchors to a positioning spine that runs through every section" → methodology jargon ("messaging framework," "positioning spine")

**Annotation count:** Aim for 2-3. Never more than 4. Pick the ones where the cause-and-effect-to-business-outcome chain is clearest. Spread across different foundation inputs when possible — don't write 3 annotations that all trace back to the ICP.

### Step 4: Write the reveal statements

After writing the annotations, write a reveal section. The reveal connects each business challenge (that appears in the annotations) to the foundation docs, through a common mistake organizations make.

For each challenge tagged in the annotations, write one statement per foundation doc (ICP, problem-solution, positioning, messaging) that follows this structure:

1. **Common mistake** — what most organizations get wrong with this foundation area
2. **What the focused foundation does instead** — what changes when the foundation is built with methodology
3. **How that connects to the challenge** — why this matters for top of funnel / conversion / retention / account value

Each statement should be 1-2 sentences. Use the challenge-to-foundation mapping table from Step 2 as your guide.

**Important:** Use "problem-solution" (not "PSF") in all reveal text — this is a non-standard abbreviation that the audience won't recognize.

Only include challenges that are actually tagged in the annotations — don't write reveal statements for challenges that aren't represented. Only include foundation docs where the connection to the challenge is clear and direct.

**Good reveal statement examples:**

> **ICP:** Most companies define their ICP as an industry list and a company size range — so every team defines "our customer" differently. When ICP work identifies the specific buyer, their triggers, and their priorities, every asset can speak directly to that person — and that specificity is what focuses budget and drives pipeline.

> **Messaging:** Most companies have a different value story on their website, in their sales deck, and in their outreach — so buyers hear three different products. When messaging is organized around a single idea, every touchpoint reinforces the same promise — and that consistency is what compounds into trust and shorter sales cycles.

> **Problem-solution:** Most companies describe their problem at headline level — "data quality challenges" or "alert fatigue" — so their content sounds like every other vendor. When problem-solution work maps the specific mechanism that burns time and money, content can describe the buyer's real situation — and that specificity is what earns engagement and reduces churn.

### Step 5: Save the output

Save annotations to: `company-gtm-docs/{company}/demo-output/{slug}/annotations.md`

Use this format:

```markdown
# Annotations: {prompt from meta.json}

---

**Section:** {A natural, descriptive label for what the prospect is looking at — e.g., "Two different email openings", "How each version describes the problem", "The proof each version offers". This is the primary heading above the passage pair.}

> [!v1-passage]
> {Exact excerpt from v1.md — 1-4 sentences, copied verbatim}

> [!v2-passage]
> {Exact excerpt from v2.md — 1-4 sentences, copied verbatim}

**Challenge:** {one or more of: Top of Funnel Growth, Engagement & Conversion, Retention, Account Value — comma-separated if multiple}

**V1:** {one-sentence observation about what V1 does and why, framed through the challenge lens}

**V2:** {one-sentence observation about what V2 does differently and why}

**Impact:** {one sentence — see Impact field rules below}

---

**Section:** {descriptive label for this passage pair}

> [!v1-passage]
> {Exact excerpt from v1.md}

> [!v2-passage]
> {Exact excerpt from v2.md}

**Challenge:** {challenge tag(s)}

**V1:** {observation}

**V2:** {observation}

**Impact:** {one sentence — see Impact field rules below}

---

# Reveal

## {Challenge Name}

**ICP:** {1-2 sentence reveal statement: common mistake → focused foundation → challenge connection}

**Problem-solution:** {1-2 sentence reveal statement}

**Positioning:** {1-2 sentence reveal statement}

**Messaging:** {1-2 sentence reveal statement}

## {Next Challenge Name, if multiple challenges tagged}

**ICP:** {reveal statement}

...
```

Every annotation must have all five fields: Section, Challenge, V1, V2, Impact. Always pair V1 and V2 — no one-sided annotations.

The `**Section:**` field is required. It is the primary text above each passage pair — the label the prospect reads first. It must be a natural, descriptive phrase that tells the reader what they're comparing (e.g., "Two different email openings", "How each version earns the next click", "The proof each version offers"). It should NOT be a generic fallback like "Email Opening" or a methodology term. Write it as a plain-language description of the contrast the reader is about to see.

Every annotation must also have both passage blocks. The passages are direct quotes — copy the exact text from the source document. Keep them short (1-4 sentences). The `> [!v1-passage]` and `> [!v2-passage]` markers must appear exactly as shown — they are parsed by the demo display frontend.

The `**Challenge:**` field must appear exactly as shown — it is parsed by the demo display frontend to group annotations by business challenge. Use the exact challenge names: "Top of Funnel Growth", "Engagement & Conversion", "Retention", "Account Value".

Also update `meta.json` to include a `challenges` array listing all challenges tagged across the annotations:
```json
{"prompt": "...", "skill": "...", "challenges": ["Engagement & Conversion", "Retention"]}
```

Confirm to the user: "Annotations saved — {N} annotations covering [which challenges were tagged] and [which foundation inputs were referenced]."

## What this skill does NOT do

- It doesn't modify the V1 or V2 outputs themselves
- It doesn't generate new demo outputs (that's gtm-demo's job)
- It doesn't prescribe strategy decisions — it demonstrates the impact of foundation quality
- It doesn't evaluate which output is "better" — it explains what caused the differences and what that means for the business
- It doesn't force-fit challenges — if an output doesn't clearly demonstrate a challenge, don't tag it
