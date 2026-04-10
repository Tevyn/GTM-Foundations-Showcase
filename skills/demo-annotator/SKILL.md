---
name: demo-annotator
description: >
  Annotate GTM demo outputs with brief, plain-language commentary explaining why V1 and V2
  outputs differ — tracing each difference back to the foundation documents (ICP, problem-solution,
  positioning, messaging) that caused it. Produces reveal statements that connect common foundation
  mistakes to business impact across the four business challenges (top of funnel growth, engagement
  & conversion, retention, account value). Produces 2-3 short, scannable annotations per output pair.
  Use this skill whenever the user wants to: add commentary to demo outputs, explain why V1 and V2
  are different, annotate a side-by-side comparison, make a demo self-explanatory, or add "why this
  matters" context to existing V1 vs V2 output pairs. Also trigger when the user mentions annotate,
  commentary, explain the difference, "why is V2 better," call out differences, or "add notes to
  the demo."
---

# Demo Annotator

This skill reads a pair of V1 ("Original") and V2 ("With Methodology") outputs from a gtm-demo run, identifies 2-3 differences between them, and writes brief commentary that names what in the foundation documents caused each difference. It also produces reveal statements that connect common foundation mistakes to business impact across the four business challenges the demo is organized around.

## Why this exists

The demo talk track starts with business challenges the prospect recognizes — top of funnel growth, engagement & conversion, retention, account value. The annotations show *how* those challenges manifest in GTM outputs (the "how this shows up" step), and the reveal connects the difference back to the foundation quality that caused it (the "why" step).

This is a demonstration of focus, not a researched business recommendation. The annotations should make the impact of foundation quality feel obvious and concrete — not prescribe specific strategy decisions.

## The four business challenges

These are the organizing frame for the demo — the prospect picks the one most relevant to them, and the demo shows how it plays out in real GTM outputs. Annotations are not individually tagged with a challenge anymore, but you should still think about which challenge(s) each difference connects to — that thinking drives which Reveal statements you write in Step 4.

**Top of funnel growth** — pipeline creation is slow, CAC is high, demand creation is inconsistent. Shows up in GTM when: targeting is broad (dilutes budget, raises CAC), positioning is defensible only through 1:1 feature comparison (no differentiation), content doesn't cut through noise because it's not relevant to a specific audience or problem.

**Engagement & conversion** — weak win rate, low engagement, low response rate, slow deal cycles. Shows up in GTM when: messaging doesn't resonate or use the buyer's language, content is surface-level and doesn't earn clicks or engagement, proof points aren't problem-specific, outreach is generic and doesn't connect with the audience's priorities.

**Retention** — high churn, weak NRR, low CSAT, low referral volume. Shows up in GTM when: messaging across the customer journey is inconsistent (expectations set in sales don't match post-sale experience), value story is unclear so customers can't articulate why they stay, problem-solution work is shallow so the product feels interchangeable.

**Account value** — low ACV, low upsell opportunity, deal size inconsistency, high discount rate. Shows up in GTM when: pricing is anchored to competitor pricing instead of problem value, positioning leads with features instead of differentiated value, ICP is too broad to support focused packaging.

## What this skill needs

1. **Company name** — to locate the V1/V2 foundation docs and demo outputs
2. **Demo output slug** — which prompt's outputs to annotate (the subfolder name under `demo-output/`)
3. **Evidence catalog** — `skills/demo-annotator/references/evidence-catalog.md` — curated stats to cite in the Evidence field

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

### Step 2: Identify 2-3 differences (max 4)

Scan both outputs for the moments where the quality gap is most visible AND most connected to a business challenge a demo attendee would recognize. You're not looking for every difference — you're looking for 2-3 that make a demo attendee think "this is costing me revenue" AND "my team couldn't have made the call that produced this difference on their own."

**Prioritize differences that trace back to a strategic decision.** The strongest annotations aren't just about V2 having better information — they're about V2 reflecting a deliberate choice to focus on one path over others. Look for moments where V2 quality stems from a niche selection (chose one segment over others), a tradeoff (excluded something viable to go deeper on something stronger), or a focus decision the team hasn't made. The V1 output isn't wrong — it's the rational output of a team that hasn't made the focusing decision yet.

**For each difference you identify:**

1. **Select the specific passage from each document** — the 1-4 sentences (or one short paragraph) from v1.md and v2.md that most clearly demonstrate the difference. Copy the text exactly as it appears in the source document. Pick the passage where the contrast is most visible to a reader seeing the outputs for the first time.

2. **Note (mentally) which challenge(s) this difference connects to** — which of the four business challenges does this difference reflect? You won't write this into the annotation, but you'll use it in Step 4 to decide which Reveal statements to write. Use the challenge-to-foundation mapping table below. Only count challenges where the connection is clear and direct — don't stretch.

3. **Frame the V1/V2 observations through the relevant challenge lens** — don't just describe what's different; describe how the difference shows up as a business problem. If the difference connects to retention, the V1 observation should explain how the output quality contributes to churn or weak NRR, not just that it's generic.

**Not every output will surface every challenge.** A cold outbound email is unlikely to reflect retention. A blog post may not connect to account value. Only carry challenges into Step 4 that are genuinely visible — don't force-fit.

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

Use this table to identify which challenge(s) each difference connects to, and how the foundation gap drives the business problem. This is your primary tool for deciding which Reveal statements to write in Step 4.

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

Each annotation has a **Section** label plus five fields: V1, V2, Difference, Impact, Evidence. V1, V2, and Difference are each exactly one sentence. Impact is one sentence (or two very short ones, ~20 words total). Evidence is ~12 words. This brevity constraint is the most important formatting rule in the skill — it's what makes annotations scannable during a live demo.

1. **Section:** — Required. A short phrase naming what section of the output we're looking at, with a light reference to the output type. Examples: "Here's how the email opens", "The competition section of the brief", "How the landing page describes the problem". This is NOT a comparison label — just name the excerpt so it's always obvious what part of the output we're reviewing.
2. **V1:** — One sentence. What the original foundation caused the output to do.
3. **V2:** — One sentence. What the focused foundation caused the output to do differently.
4. **Difference:** — One short sentence. A factual, neutral headline calling out what's different between the two versions. This is NOT an assertion of impact — it simply names the difference so the presenter can speak to it. The "One {X}, the other {Y}" pattern is a useful default (e.g., *"One opens with a broad industry observation, the other opens with a specific moment the buyer is living through right now."*) but not required. Don't claim one version is better — just name the contrast.
5. **Impact:** — One short sentence (or two very short ones) totaling ~20 words. A standalone business reality statement that appears on its own card after the comparison. Frame it around what the **buyer** does or doesn't do — purchase, champion internally, build a business case, delete the email — not what the seller "earns" or "signals." See the **Impact framing — write for the buyer, not the seller** section below for the five rules this field must follow.
6. **Evidence:** — One supporting metric or stat. Start from `skills/demo-annotator/references/evidence-catalog.md` and **tighten the closest match** to fit the specific Impact line — lead with the number, drop softeners and tactical clauses, aim for ~12 words. The Impact carries the assertion; Evidence is the short stat that backs it. If no catalog line fits the Impact, substitute an equivalent stat from a credible named source. If nothing is a strong match, leave blank. See the **Evidence framing** section below for the four rules.

If you can't say it in one sentence, you're being too specific. Zoom out. Name the pattern, not the details.

**Brevity calibration:**

Each line should be roughly 15-25 words. The entire annotation (all three lines) should be readable in under 10 seconds. If you're quoting specific metrics, stats, product names, or technical details from the outputs, you've gone too deep — describe the *type* of difference, not the specifics.

This is a demonstration that shows the impact of focus. It is not a researched strategy recommendation. Don't cite specific numbers from the outputs (miss rates, BLEU scores, dollar figures). Don't name specific product capabilities or competitive claims. Describe the pattern: "the output uses quantified outcomes" not "the output cites 95% false alarm reduction."

**Voice and style:**

Be direct, be concise, say it once and say it well. Use specific, recognizable situations rather than abstract descriptions. Use human, true-to-speech language. Abbreviations: GTM and ICP are fine. Spell out everything else — problem-solution, positioning, messaging.

**Difference lines appear below the passages on the same card.** They are factual headlines that name what's different — the presenter will speak to the "so what" live. Keep them short and observational: "One asks rhetorical questions about the problem, the other states the mechanism as observed fact." Do not assert impact in the Difference line — that's the Impact's job. The "One {X}, the other {Y}" pattern is a useful default but not required; any short, neutral, factual phrasing works as long as it doesn't claim one version is better.

---

## Impact framing — write for the buyer, not the seller

The Impact line is the most carefully calibrated field in this skill. It appears on its own card after the comparison, and it has to land in the few seconds the viewer is looking at it. These five principles are not soft preferences — every Impact line should pass all five.

**Audience note:** The viewer is a CEO, founder, or investor watching a live demo of the impact of GTM foundations. They are NOT a VP of Sales. Frame Impact in language an executive uses to make decisions about GTM foundations, not language sales teams use to coach reps.

**The card stands alone.** Each Impact card is read in isolation in the display — Difference, V1, V2, and Impact don't appear on screen at the same time. The Impact line must be fully understandable on its own, without reference to any other field. If a phrase only makes sense because it echoes language in the Difference, rewrite it.

### The five principles

**1. Tie Impact to business stakes, not incremental performance gains.**

Default sales-domain framings ("earns the first conversation," "earns credibility," "earns consideration") describe the difference as a *boost*. Reframe to an *urgent binary* — what gets through vs. what doesn't, what closes vs. what stalls, what gets read vs. what gets deleted. Make the consequence physical and observable wherever possible.

- Weak: *"Broad outreach sounds like every other vendor. Specificity is what earns the first conversation."*
- Strong: *"Generic outreach gets deleted. An email that opens with a signal the buyer recognizes from their own week gets read."*

**2. Write for an exec/investor audience, not a sales VP.**

Sales-domain phrases — "earns the first conversation," "pitching vs. consulting," "consultative selling," "the only seat at the table" — are jargon to the audience watching the demo. They map to sales training programs, not executive decision-making about GTM foundations.

- Weak: *"A seller who walks into a call with a market overview is pitching. A seller with the buyer's decision criteria is consulting."*
- Strong: *"A brief built around one buyer's priorities — and the order they weigh them — gives sellers a way to create urgency. A generic brief just starts a feature fight."*

**3. Avoid opaque or methodology-leaking terms; describe in plain language.**

Words that require the viewer to translate before they understand are too slow for a demo. "Mechanism as observed fact," "mechanism-level specificity," and similar compact-but-opaque framings only make sense if the viewer is also reading another field. Replace with plain description.

Terms-as-labels like "feature-first" and "problem-first" are also off-limits — they're terms, not descriptors. Say *"messaging that centers the problem"* instead of *"problem-first messaging."*

- Weak: *"Surface-level pain descriptions don't earn consideration. Mechanism-level specificity does."* — "mechanism-level specificity" is opaque and only resolves with context from the Difference field, which isn't on screen at the same time.
- Strong: describes how the pain plays out in plain language and ties to a buyer action.

**4. Frame Impact around buyer action and confidence to move forward.**

The most acute Impact frames are about what the buyer is *able to do* (or *unable to do*) as a result of the foundation work — not about what the seller signals or how the message lands. Name a buyer action: purchase, champion internally, build a business case, move forward, delete the email, scroll past.

Reference framings:
- *"Buyers with the right information and proof at the right time have the confidence to move forward with a purchase."*
- *"Buyers understand their problems; they need evidence you can solve them."*
- *"When marketing directly addresses stakeholder concerns with concrete data and realistic timelines, buyers can confidently champion your solution internally and build a bulletproof business case."*

Watch for vendor-side framings sneaking in: "earns credibility," "justifies premium pricing," "earns the conversation," "signals trust." These are about what the vendor accomplishes, not what the buyer can now do. Rewrite to the buyer side.

- Weak: *"Logo lists signal you sell to everyone. Problem-specific proof is what justifies premium pricing and larger deals."* — "justifies premium pricing" is vendor-side.
- Strong: a framing closer to *"Buyers with the right proof at the right time have the confidence to move forward with a purchase."* — buyer-side action.

**5. Don't frame "conceding a competitor has good capabilities" as the bad thing.**

Sellers should be encouraged to acknowledge a competitor's strengths and reframe back to the buyer's problem. The mistake in a weak competitive brief isn't conceding — it's failing to reframe. Frame the contrast around problem-precision vs. vagueness, not around concession.

- Weak: *"Conceding a competitor is 'solid' invites comparison shopping. Reframing the problem earns the only seat at the table."*
- Strong: *"Buyers move faster when they see their problem named precisely. Vague competitive comparisons slow deals down."*

### Length and form

**Length:** ~20 words max. One sentence, or two very short sentences. The two-short-sentences shape (e.g., *"Generic outreach gets deleted. An email that opens with a signal the buyer recognizes from their own week gets read."*) is the canonical form.

**Em-dashes:** Em-dashes around a parenthetical insertion are fine and often make the line more concrete (*"A brief built around one buyer's priorities — and the order they weigh them — gives sellers a way to create urgency."*). What's banned is using a dash or semicolon to glue two independent clauses into one long compound sentence.

**The pattern (when in doubt):** {what the unfocused version actually is — observable behavior} + {what the buyer can now do, or can't do, as a result}.

---

## Evidence framing — tailor catalog stats; the Impact carries the assertion

The Evidence line appears as small supporting text below the Impact on the same card. It is NOT the place to make the comparative claim — the Impact already does that. Evidence is the short stat that backs it.

**Catalog policy:** `skills/demo-annotator/references/evidence-catalog.md` is a starting point, not literal copy. Select the closest match for the specific Impact you're supporting and tighten it. Aim for ~12 words. Lead with the number. Drop softeners and tactical clauses. If no catalog line is a strong match for what the Impact asserts, substitute an equivalent stat from a credible named source.

### The four principles

**1. Tighten and front-load the number.** Drop softeners, qualifiers, and explanatory clauses. The number lands first.

- Catalog: *"Personalized cold outreach sees up to ~18% response rates — a 3–10x improvement over generic outreach."*
- Tightened: *"Personalized outreach sees up to 18% response rates — 3–10x higher than generic emails."*

- Catalog: *"Moving from feature-first to problem-first language tends to shift conversion from low single-digit to mid-to-high single-digit (2–3x) when underlying fit is real."*
- Tightened: *"Problem-first messaging converts at 2–3x the rate of feature-first outreach."*

**2. Avoid tactical / marketing-domain framings in Evidence.**

Don't use *"A/B tests show,"* *"experiments find,"* or any phrasing that points the viewer toward marketing tactics. The demo is about GTM foundations, not testing — and many organizations are stuck in a vicious cycle of trying to test their way out of bad foundations. Use *"Reports indicate,"* *"Studies show,"* or a named source instead.

- Weak: *"A/B tests show that intent-matched, specific value framing can lift conversion by 31% to 104% vs. generic messaging."*
- Strong: *"Reports indicate that outcome-specific proof can lift email conversion by 31–104% over generic value claims."*

**3. Drop redundant context the demo already establishes.**

If the demo output is already a cold email, don't say "cold outreach" — just say "outreach." If we're already looking at a landing page, don't repeat "landing page." Cut anything the viewer already knows from the surrounding context.

**4. When no direct metric exists, cite a credible directional report by name and year.**

This is the acceptable substitution shape: *"According to a 2025 [source] report, [finding]."* Use this when there's a real source for the directional claim but no clean stat to lead with.

- Example: *"According to a 2025 Forrester report, enterprise deals are most frequently stalled by internal justification, while buying groups move faster when stakeholders are able to prove ROI."*

**Drop unnecessary supporting prose; let the Impact carry the assertion.** Catalog lines often pad their numbers with explanatory clauses ("— quantified cost of inaction reduces 'no decision' outcomes"). Strip these. Add explanatory context only when the stat would be confusing without it.

- Catalog: *"40–60% of deals are lost to customer indecision, not to competitors — quantified cost of inaction reduces 'no decision' outcomes."*
- Tightened: *"40–60% of enterprise deals are lost to indecision, not competitors."*

If you can't find a catalog stat that tightens to fit the Impact, and you don't have a credible external source either, leave Evidence blank. A forced match is worse than none.

---

**V2 observations: let the specificity speak for itself.** Don't summarize V2's content with generic labels like "the healthcare prospect" or "healthcare-specific outcomes." Instead, point to the fact that the focused foundation doc contains richer, more specific information — and let the reader see the output difference directly. The V2 observation should describe what the output *does* differently, not restate what's in the V2 docs.

Bad V2: "The focused ICP targets healthcare only, so the email opens with a concrete signal the healthcare prospect recognizes."

Good V2: "The focused ICP is specific enough that the email can open with a signal the prospect recognizes from their own world — no generic industry framing needed."

**Banned language:**

These fall into two groups. The first group leaks methodology internals the reader hasn't been introduced to. The second group is sales-domain or methodology-leaking phrasing that doesn't land with an exec/investor audience and tends to soften urgency. Both groups are banned.

*Methodology jargon — the reader doesn't have context:*
- "narrative spine," "positioning spine," "messaging spine"
- "value wedge," "defensible wedge," "competitive wedge"
- "pillars," "messaging pillars"
- "PSF," "pain chains," "pain-to-value"
- "buyer-anchored," "niche-driven," "problem-anchored"
- "messaging framework," "positioning framework"
- "AE #1," "AE #2," or any reference to seller personas in the demo outputs
- Foundation doc section names used as labels: "Buying Triggers section," "Pain (Specific)," "Value Wedge section," "Impact (Quantified)," "narrative arc," "specificity cascade" — these are for your internal analysis when tracing cause-and-effect, not for annotation text

*Sales-domain phrasing and vendor-side framings — these soften urgency or talk past an exec audience:*
- "earns the conversation," "earns the first conversation," "earns credibility," "earns consideration," "earns the next click"
- "pitching vs. consulting," "consultative selling," "the only seat at the table"
- "justifies premium pricing," "premium pricing," "signals trust"
- "feature-first" / "problem-first" used as labels (describe instead: *"messaging that centers the problem"*)
- "mechanism-level," "mechanism as observed fact," and similar compact-but-opaque phrases that only resolve with context from another field

*Specifics from the outputs themselves:*
- Any specific metrics, percentages, dollar figures, or product feature names pulled from the outputs

The reason these are banned: the reader is seeing this skill's output during a demo. Methodology terms have no context, sales-domain phrases talk past an exec/investor audience and frame the difference as an incremental boost instead of an urgent business reality, and specific numbers make it look like a business case rather than a demonstration of how focus changes everything downstream. Foundation doc section names are part of your analytical toolkit — they help you trace the right causal chain, but they should never appear in the annotations themselves.

**Instead, use language like:**
- "the original ICP is broad, so..." / "the focused ICP targets one buyer type, so..."
- "the original problem-solution work stays surface-level..." / "the focused problem-solution work maps the specific mechanism..."
- "the original positioning leads with features..." / "the focused positioning explains why the typical approach fails..."
- "the original messaging has no connecting thread..." / "the focused messaging is organized around a single idea..."
- "the focused problem-solution work maps the specific workflow that burns time, so the output can describe the mechanism instead of just naming the symptom..."
- "the focused positioning explains why the typical approach falls short, so the output can dismiss alternatives as a peer observation instead of naming competitors..."
- "the focused ICP knows when pain becomes acute for this buyer, so the output can state the problem as fact instead of asking about it..."
- "the focused messaging gives every section a connecting thread, so the output tells a story instead of listing independent benefits..."

**Good examples — notice: Impact lines describe physical/observable buyer behavior or buyer confidence to act, Evidence is tightened to ~12 words and leads with the number. Treat these as patterns to adapt, not lines to copy verbatim — even when a new situation is structurally similar, tailor the wording to the specific buyer and output you're annotating.**

> **Section:** Here's how the email opens
>
> **V1:** The original ICP is broad, so the email opens with a generic industry trend that could be sent to any business in any sector.
>
> **V2:** The focused ICP knows exactly when this buyer's pain becomes acute, so the email opens with a growth signal the prospect recognizes from their own week.
>
> **Difference:** One opens with a broad industry observation, the other opens with a specific moment the buyer is living through right now.
>
> **Impact:** Generic outreach gets deleted. An email that opens with a signal the buyer recognizes from their own week gets read.
>
> **Evidence:** Personalized outreach sees up to 18% response rates — 3–10x higher than generic emails.

> **Section:** How the brief frames each competitor
>
> **V1:** The original positioning leads with features and complexity, so the brief concedes competitors are "solid" and argues that this product is simpler.
>
> **V2:** The focused positioning explains why the typical approach fails for this buyer, so the brief reframes competitors as solving the wrong problem entirely.
>
> **Difference:** One concedes the competitor is good and argues on complexity, the other reframes whether the competitor solves the buyer's actual problem.
>
> **Impact:** Buyers move faster when they see their problem named precisely. Vague competitive comparisons slow deals down.
>
> **Evidence:** Buying groups that align on the problem — not just the solution — are 2.5x more likely to close (Gartner).

> **Section:** The deal context at the top of the brief
>
> **V1:** The original ICP covers five industries and a wide company size range, so the brief can only describe a generic market trend instead of a specific deal scenario.
>
> **V2:** The focused ICP targets one buyer type with known triggers, so the brief gives the seller a specific prospect profile, evaluation criteria, and the order the buyer weighs them.
>
> **Difference:** One describes a broad market moving off spreadsheets, the other describes a specific buyer with known triggers and a ranked evaluation checklist.
>
> **Impact:** A brief built around one buyer's priorities — and the order they weigh them — gives sellers a way to create urgency. A generic brief just starts a feature fight.
>
> **Evidence:** 40–60% of enterprise deals are lost to indecision, not competitors.

> **Section:** The audience framing on the landing page
>
> **V1:** The original ICP is broad, so the landing page writes for everyone without any audience signal in the copy.
>
> **V2:** The focused ICP targets one buyer type, so the page describes the reader's world accurately without labeling them.
>
> **Difference:** One writes for a broad audience, the other writes for one buyer type without ever labeling them.
>
> **Impact:** Content written for everyone converts no one. Focus is what turns budget into pipeline.
>
> **Evidence:** Companies with a clearly defined ICP see up to 68% higher ROI on their campaigns.

**Bad examples and why:**

> "The V1 ICP spans seven industries and six buyer roles without prioritization, so AE #2 has no specific signal to reference" → too specific (counting industries), references AE #2, too long
>
> "V2's positioning claims a single defensible wedge (synthetic data that preserves clinical meaning for healthcare LLMs)" → methodology jargon ("defensible wedge"), names specific product capabilities, reads like a strategy recommendation
>
> "Proof comes from healthcare-specific evidence: health system accuracy comparison, 12-point AUC improvement = $2.3M/year" → cites specific metrics from the output, too deep for a demonstration
>
> "The V2 messaging framework anchors to a positioning spine that runs through every section" → methodology jargon ("messaging framework," "positioning spine")
>
> "Surface-level pain descriptions don't earn consideration. Mechanism-level specificity does." → "earns consideration" is a sales-domain framing that softens urgency, and "mechanism-level specificity" is opaque on its own — it only resolves with context from the Difference, which isn't on screen at the same time. The card has to stand alone.
>
> "Logo lists signal you sell to everyone. Problem-specific proof is what justifies premium pricing and larger deals." → "justifies premium pricing" is vendor-side framing, not a buyer action. Reframe to what the buyer is now able to do with the proof — build a business case, move forward, gain confidence to purchase.
>
> "A seller who walks into a call with a market overview is pitching. A seller with the buyer's decision criteria is consulting." → "pitching vs. consulting" is sales training language and lands as jargon to an exec audience.

**Annotation count:** Aim for 2-3. Never more than 4. Pick the ones where the cause-and-effect-to-business-outcome chain is clearest. Spread across different foundation inputs when possible — don't write 3 annotations that all trace back to the ICP.

### Step 4: Write the reveal statements

After writing the annotations, write a reveal section. The reveal connects the business challenges your annotations surfaced to the foundation docs, through a common mistake organizations make.

From the challenges you noted (mentally) in Step 2, write one statement per foundation doc (ICP, problem-solution, positioning, messaging) for each challenge, following this structure:

1. **Common mistake** — what most organizations get wrong with this foundation area
2. **What the focused foundation does instead** — what changes when the foundation is built with methodology
3. **How that connects to the challenge** — why this matters for top of funnel / conversion / retention / account value

Each statement should be 1-2 sentences. Use the challenge-to-foundation mapping table from Step 2 as your guide.

**Important:** Use "problem-solution" (not "PSF") in all reveal text — this is a non-standard abbreviation that the audience won't recognize.

Only include challenges that your annotations actually surfaced — don't write reveal statements for challenges that aren't represented. Only include foundation docs where the connection to the challenge is clear and direct.

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

**Section:** {Short phrase naming what section of the output we're looking at — e.g., "Here's how the email opens", "The competition section of the brief", "How the landing page describes the problem". Lightly reference the output type and section.}

> [!v1-passage]
> {Exact excerpt from v1.md — 1-4 sentences, copied verbatim}

> [!v2-passage]
> {Exact excerpt from v2.md — 1-4 sentences, copied verbatim}

**V1:** {one-sentence observation about what V1 does and why, framed through the relevant challenge lens}

**V2:** {one-sentence observation about what V2 does differently and why}

**Difference:** {one sentence — factual headline of what's different, not asserting impact}

**Impact:** {one sentence — standalone business reality statement, ~20 words max}

**Evidence:** {one supporting stat tightened from evidence-catalog.md or sourced externally — ~12 words, lead with the number, no "A/B tests" phrasing — leave blank if no strong match}

---

**Section:** {section name for this passage pair}

> [!v1-passage]
> {Exact excerpt from v1.md}

> [!v2-passage]
> {Exact excerpt from v2.md}

**V1:** {observation}

**V2:** {observation}

**Difference:** {factual headline}

**Impact:** {business reality statement}

**Evidence:** {supporting stat or blank}

---

# Reveal

## {Challenge Name}

**ICP:** {1-2 sentence reveal statement: common mistake → focused foundation → challenge connection}

**Problem-solution:** {1-2 sentence reveal statement}

**Positioning:** {1-2 sentence reveal statement}

**Messaging:** {1-2 sentence reveal statement}

## {Next Challenge Name, if the annotations surfaced more than one}

**ICP:** {reveal statement}

...
```

Every annotation must have all six fields: Section, V1, V2, Difference, Impact, Evidence. Always pair V1 and V2 — no one-sided annotations. Evidence may be left blank if no catalog stat is a strong match.

The `**Section:**` field is required. It is the primary text above each passage pair — the label the prospect reads first. It must be a short phrase naming what section of the output we're looking at, with a light reference to the output type (e.g., "Here's how the email opens", "The competition section of the brief", "How the landing page describes the problem"). It should NOT be a comparison label like "Two different email openings" or a generic fallback like "Email Opening" or a methodology term. Just name the excerpt.

Every annotation must also have both passage blocks. The passages are direct quotes — copy the exact text from the source document. Keep them short (1-4 sentences). The `> [!v1-passage]` and `> [!v2-passage]` markers must appear exactly as shown — they are parsed by the demo display frontend.

Also update `meta.json` to include a `challenges` array listing the challenges your annotations surfaced (used by the demo display to organize the talk track):
```json
{"prompt": "...", "skill": "...", "challenges": ["Engagement & Conversion", "Retention"]}
```

Use the exact challenge names: "Top of Funnel Growth", "Engagement & Conversion", "Retention", "Account Value".

Confirm to the user: "Annotations saved — {N} annotations covering [which challenges were surfaced] and [which foundation inputs were referenced]."

## What this skill does NOT do

- It doesn't modify the V1 or V2 outputs themselves
- It doesn't generate new demo outputs (that's gtm-demo's job)
- It doesn't prescribe strategy decisions — it demonstrates the impact of foundation quality
- It doesn't evaluate which output is "better" — it explains what caused the differences and what that means for the business
- It doesn't force-fit challenges — if an output doesn't clearly demonstrate a challenge, don't carry it into the Reveal
