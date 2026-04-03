---
name: sales-comms-v2
description: >
  Generate and review V2 (strong foundations) B2B SaaS sales communications — cold emails,
  sequences, follow-ups, discovery call scripts, talk tracks, call prep briefs, and competitive
  briefs. Produces foundation-driven seller communications grounded in focused GTM foundations.
  Reads ONLY from V2 doc sets. Also supports reviewing and improving existing sales copy.
  Use this skill whenever the user wants to: write sales emails or outbound sequences, draft
  discovery scripts, prepare for sales meetings, create competitive briefs, review existing
  sales copy, or generate any B2B sales messaging. Also trigger when the user mentions outbound,
  prospecting, cold email, sequence, discovery call, talk track, objection handling, call prep,
  meeting prep, sales brief, competitive brief, battle card, or anything related to writing
  words that sellers use with buyers.
---

# Sales Communications V2 Skill — Foundation-Driven Output

This skill generates, reviews, and improves B2B SaaS sales communications — both written (emails, sequences) and verbal (discovery call scripts, talk tracks). It produces communications that leverage strong GTM foundations: niche ICP, quantified problem-solution fit, defensible positioning, and buyer-anchored messaging.

## How this skill thinks about sales comms

There's a core principle driving everything here: **the quality of a seller's communications is a symptom of the GTM system they're working within.**

Two sellers can follow the same template. One produces compelling, resonant outreach. The other produces generic noise. The difference usually isn't talent — it's foundations:

| | Strong Foundations (V2 — this skill) | Weak Foundations (V1) |
|---|---|---|
| **ICP** | Focused niche; knows exactly who they're selling to | Too broad; trying to be relevant to everyone |
| **Buyer understanding** | Knows what incites action for this persona | Surface-level understanding of buyer motivations |
| **Value prop** | Specific problem/solution value they can prove | Generic benefits that could apply to any vendor |
| **Process** | Repeatable engagement process they've refined | Ad hoc approach; each email is a fresh start |
| **Enablement** | Has the messaging, positioning, and proof points | Working from weak collateral or figuring it out alone |

This skill embodies the left column. V2 communications draw deeply on all four foundation documents — using specific language from the messaging doc, targeting the exact persona from the ICP, connecting to real problems from the problem-solution fit, and leveraging differentiation from the positioning.

### How foundations compound — the specificity cascade

The four foundation areas aren't independent — they compound. A niche ICP is the root that makes everything else possible:

1. **Niche ICP → you know the inflection point.** A narrow ICP lets you know *when* pain becomes acute for this specific segment — the threshold, the trigger, the scaling moment. ("Once you hit ~10 engineers, monitoring tools start working against you.")

2. **Inflection point knowledge → you state problems as facts, not questions.** Because you know the threshold, you can assert the problem confidently as something you've seen before. This signals peer credibility.

3. **Problem-solution fit → you name the mechanism, not just the symptom.** You've internalized the problem-solution fit deeply enough to describe the buyer's *workflow* — the specific activity that burns time, the specific metric that suffers, the specific sequence of events.

4. **Messaging → provides the conceptual frame, not a tagline.** You've internalized the messaging so deeply it shapes the email's structure and word choice without ever appearing as a tagline. ("Kill the noise" and "3-5 alerts that actually mattered" are derivatives of "See the signal, not the noise.")

5. **Positioning → becomes a peer observation, not a competitive comparison.** You dismiss the obvious approach as someone who's seen it fail ("just centralize all the alerts — that's like collecting water from 5 broken faucets"). This is positioning delivered as lived experience.

**This cascade is the core mechanism that enables V2 quality.** When producing analysis (only when requested), always trace back to which foundation enabled the move. The root cause of V2's strength is ICP focus.

---

## Doc isolation rules

**This skill reads ONLY from V2 docs.** The path is `company-gtm-docs/{company}/v2/`. Read `v2/icp.md`, `v2/psf.md`, `v2/positioning.md`, `v2/messaging.md`, and `v2/context.md`. Do NOT read, reference, or incorporate anything from the `v1/` directory.

Draw deeply on the V2 foundation documents. Every output should trace back to specific sections of these docs — not just reference them conceptually.

### What to pull from each foundation doc

**ICP (icp.md) — the targeting and trigger engine:**
- **Buying Triggers section** → Use these as the opening hook for cold emails. Every trigger maps to a pain point. Signal-based outreach uses these triggers to prove relevance and timing:
  - Funding round → Growth pain: scaling the team with new capital means new hires need to be productive fast
  - New executive hire → Proving ROI fast: first 90 days are about quick wins
  - Hiring surge → Scaling challenges: ramp time becomes the bottleneck
  - Tech adoption → Integration opportunity: new tooling creates a window for complementary solutions
  - Earnings call mention → Strategic priority: leadership told analysts this is a priority, you can help
  - Competitor dissatisfaction → Switching pain: frustration creates openness to alternatives
- **Pain Points section** → Assert these as observed facts, not questions. The niche ICP lets you state problems confidently because you've seen this pattern in this exact segment before.
- **Qualification Framework** → Shapes discovery questions. Use the "listen for" cues as pre-call hypotheses.
- **Negative ICP section** → Tells you who to disqualify and why — use this in competitive briefs to explain when the competitor is actually the better fit.
- **Buyer Roles table** → Match communication tone and focus to the specific role. What the Champion cares about is different from what the Economic Buyer cares about.

**PSF (psf.md) — the pain and proof engine:**
- **Pain (Specific) subsections** → These describe the buyer's *workflow* — the specific activity that burns time, the sequence of events. Use these to name the *mechanism* of pain, not just the symptom. This is the core differentiator between V2 and V1 emails.
- **Impact (Quantified) subsections** → Dollar figures, FTE waste, revenue risk. Use these in discovery prep (pre-call hypotheses), call prep briefs (quantified stakes), and competitive briefs (cost of inaction). When the PSF says "$600K-$1.8M annual cost burden," that number should appear in your communications where appropriate.
- **Proof Points subsections** → Customer stories with specific before/after metrics. Use these as casual social proof in emails ("one of our customers cut their alert volume from 94 to 28") and as Discovery Prompter narratives in call prep.
- **Objections subsections** → Pre-built objection responses. Pull these directly into call prep briefs and competitive briefs.

**Positioning (positioning.md) — the differentiation engine:**
- **How Buyers Evaluate Alternatives section** → Lists the specific alternatives buyers consider (consolidation, DIY, do nothing, process discipline) with win/lose signals. Use these to dismiss the obvious approach as a peer observation in cold emails.
- **Value Wedge section** → The structural advantage competitors can't follow. This anchors competitive briefs and shapes the "dismiss the obvious approach" move in emails.
- **Competitive Set section** → Named alternatives with specific weaknesses. Use in competitive briefs — but frame as buyer-context-driven, not feature comparison.
- **Market Frame of Reference** → Shapes how you describe the problem space. Use the frame that resonates with this buyer's worldview.

**Messaging (messaging.md) — the language and narrative engine:**
- **Messaging Pillars** → Each pillar anchors a different email in a sequence or a different angle in a competitive brief. Don't use all pillars at once — pick the one most relevant to this buyer's trigger.
- **Talk Track Guidance** → Verbatim responses to "what do you do?" and "how are you different?" — use in call prep and competitive briefs.
- **Buyer Language Patterns table** → What buyers say vs. how to reframe. Mirror their language in discovery, reframe in your narrative.
- **Language to Avoid** → Hard constraint. Never use phrases on this list.
- **Voice & Tone** → Calibrates the register of all communications.

**Context (context.md) — the orientation layer:**

Context.md is a handoff document between skills — it provides a quick orientation on what the company does and which niche they're targeting. It does NOT contain unique information. Use it to get your bearings, then go to the core docs for the actual substance:
- **Company Overview** → Quick orientation on what the company does and the product's core capabilities.
- **V2 Niche Direction** → Read this first to anchor your understanding of who you're writing for, then go to positioning.md for the full market frame and ICP for the detailed segment definition.
- **Pain patterns and consequence chains** → These are summarized here for handoff purposes. The detailed, authoritative versions live in the PSF doc — always pull from PSF, not context.md.
- **Competitive landscape** → Summary pointers. The full competitive framing lives in positioning.md.
- **Qualification signals** → Summary pointers. The detailed frameworks live in ICP (qualification framework section) and messaging (buyer language patterns).

If any documents are missing or sparse, note the gap and explain how it limits what you can produce.

---

## V2 behavioral patterns — follow these

Every output from this skill must exhibit these specific behaviors:

- **Assert problems as fact.** State the pain confidently as something you've seen before — don't ask about it. This signals peer credibility.
- **Name the mechanism of pain.** Describe the buyer's workflow — the specific activity that burns time, the specific metric that suffers. Not just the symptom.
- **Dismiss the obvious approach as a peer.** Name the typical/incumbent solution and explain why it falls short, delivered as lived experience, not a competitive teardown.
- **Use casual, story-driven social proof.** Reference customers conversationally ("I sat down with one of our customers the other week...") rather than formally.
- **Keep the product nearly invisible.** The communication is about the prospect's problem and an alternative approach — not about what the product does.
- **Frame specific, low-commitment CTAs.** Frame what the prospect gets from the conversation, with a specific time commitment.
- **Sound like a peer, not a vendor.** Write like you're texting a professional contact, not drafting a press release. Personality stands out.
- **Be concise.** 100-175 words for cold emails. Every sentence earns its place.

### Output verification checklist

Before finalizing any output, verify:
- [ ] Can I trace the opening hook to a specific ICP buying trigger?
- [ ] Does the pain assertion name a mechanism from PSF (not just a symptom)?
- [ ] Is the "dismiss the obvious approach" line grounded in Positioning's alternatives section?
- [ ] Does the social proof cite a specific before/after metric from PSF proof points?
- [ ] Is the CTA framed as value to the prospect (not just a time ask)?
- [ ] Would swapping in a competitor's name break this email? (If not, sharpen it)

---

## Modes of operation

### Mode 1: Generate from a scenario

The user or calling agent provides context docs and describes what they need.

**Before writing, confirm you have:**
- The V2 context docs (ICP, problem-solution fit, messaging, positioning) — or enough detail to work from
- What type of communication? (cold email, follow-up, discovery opener, full sequence, etc.)
- Any specific scenario details (trigger event, persona variant, "why now")

If context docs are provided, use them as the source of truth. Don't invent pain points or value props that aren't grounded in those documents.

**Produce a single V2 output** — formatted as a clean, realistic communication. No annotations, no commentary, no "why this works" callouts. It should look like something a seller actually wrote and sent.

**Analysis is only produced when the user explicitly requests it** (e.g., "write a cold email and provide feedback," "generate with analysis"). When requested, produce analysis as a **separate document** — never inline with the communication itself. The analysis document should:
- Name which foundation enabled each move and why. Don't just label ("from Problem-Solution Fit") — explain the causal link.
- Include a coaching summary with 3-5 key takeaways that follow the specificity cascade.

### Mode 1b: Sales call prep

The user has an upcoming meeting and needs a structured brief. This is the most common way the discovery methodology gets used in practice — not as a script to read, but as preparation that makes the seller sharp and intentional.

**The best sales-call prep is to walk in with a clear hypothesis about the buyer's pain, the right proof points, and a plan for the next step.** The brief should make the seller dangerous — not just prepared.

**Gather the specifics:**
- The V2 context docs (ICP, problem-solution fit, messaging, positioning)
- Who is the buyer? (name, title, company, company size/stage)
- How did this meeting come about? (inbound demo request, cold outreach reply, referral, event follow-up)
- What do we already know about them? (tech stack, org structure, prior conversations, LinkedIn signals, recent news)
- What type of meeting is this? (first meeting/discovery, follow-up, demo, multi-threaded expansion)

**Produce a call prep brief with these sections:**

**1. Meeting context & buyer snapshot**
- Quick summary of who you're meeting, what their world looks like, and what you can infer about their priorities based on what you know. Cite specific signals.
- **Include ICP fit assessment:** Name which buying triggers from the ICP doc apply to this buyer. Name which pain points from the ICP are most likely active. If there are red flags from the Negative ICP, name those too.

**2. Pre-call hypothesis**
- Based on the context docs and what you know about this buyer, what are the 2-3 most likely pain points? Frame these as hypotheses to validate, not assumptions to lead with.
- **Ground each hypothesis in the PSF:** For each hypothesis, cite the specific PSF problem area it connects to and the quantified impact range. Example: "Hypothesis: alert noise is causing missed incidents → PSF Problem Area 1 estimates $600K-$1.2M/year in unrecovered downtime cost for this segment."
- **Pre-load the proof point:** For each hypothesis, have the relevant customer story from the PSF Proof Points ready to deploy if the hypothesis validates.

**3. Opening & rules of engagement**
- A suggested opener and agenda-setting script, customized to this specific meeting. Open with status parity, align on objective/agenda/decision, use softening language.

**4. Discovery Prompter (if applicable)**
- A draft customer pain narrative tailored to this buyer's world. This should use specifics from the PSF — the problems this persona typically faces, the quantified impact, and a proof point that mirrors what this buyer likely experiences.
- The narrative should be specific enough that the buyer recognizes their own situation in the story.
- Include the handoff phrase: "Enough about our customers... help me understand YOUR challenges when it comes to [specific area]."

**5. Key questions to ask**
- Organized by the discovery arc, not as a flat checklist:
  - **Surface the problem:** Open-ended questions about their current situation
  - **Uncover the need behind the need:** Push past the first answer to the business driver
  - **Diagnose root cause:** "What's your opinion on why this is happening?"
  - **Quantify impact:** "What metric is suffering as a result of...?"
  - **Explore ripple effects:** "What are the ripple effects this challenge is having across the business?"
  - **Understand buying criteria:** "What do you think you need in a solution to solve these challenges?"
- For each group, provide 2-3 specific questions tailored to this buyer's context.

**6. Likely objections & response frameworks**
- Anticipate 2-4 objections based on buyer profile, company stage, and meeting origin.
- **Pull objection responses from the PSF Objections subsections** — these are pre-built and grounded in the foundation docs.
- For each: acknowledge, probe deeper, reframe using their pain language.

**7. Recommended next steps (pre-planned)**
- Have a clear POV on What, Who, and Why before the call starts.
- Suggest the specific next step, who should be in the room, and why.

**V2 call prep looks like:**
- **Call objective is explicit** — states the desired outcome for the buyer and what needs to be true for the deal to advance.
- **Buyer snapshot includes ICP fit signals** — connects this buyer's profile to the ICP and names why they're a strong fit.
- **Pre-call hypotheses are grounded in problem-solution fit** — specific, testable, tied to the ICP, with quantified impact ranges and proof points ready to deploy.
- **Questions are tailored** to this buyer's specific signals, company stage, and what's already known.
- **Discovery Prompter mirrors this buyer's likely world** — tells a customer story this prospect will recognize.
- **Next steps are pre-planned** with a clear POV on What, Who, and Why.

### Mode 1c: Competitive brief

The user needs competitive intelligence formatted for seller use. **A good competitive brief should make it easy for reps to answer "why us, why now, why not them" in one or two minutes.** It's a cheat sheet, not an encyclopedia.

**Two common triggers:**
1. **Deal-level:** "Brief me on [competitor] for this deal — the prospect is evaluating them and us."
2. **Outbound motion:** Initiative to contact competitor customers based on a trigger event.

**Gather the specifics:**
- The V2 context docs
- Which competitor?
- What's the context? (active deal, outbound campaign, general enablement)
- If deal-level: what do we know about the prospect, their current stack, and evaluation status?
- If outbound motion: what's the trigger event creating switching opportunity?

**V2 competitive brief looks like:**
- **Anchored in positioning, not features.** The brief explains where the competitor's *approach* breaks down for this buyer's situation — not a feature checklist. Pull from the Positioning doc's "How Buyers Evaluate Alternatives" section and Value Wedge.
- **Covers where competitors are perceived as stronger** and gives the seller the reframe. Don't just list competitor strengths — pair each one with the honest context and the language to redirect the conversation. Pull from the Positioning doc's competitive set and the PSF's objection responses.
- **Insights are contextual.** "When buyers in this segment hit [inflection point], [competitor]'s approach breaks down because [mechanism]."
- **Actionable talk track.** Verbatim conversational language — peer-level, not defensive. The seller should be able to read this and use it in the next hour.
- **Proof points are specific.** Customer switching stories that mirror the buyer's situation, pulled from PSF proof points.
- **Short enough to be useful.** A seller should be able to read the entire brief in under 5 minutes. The narrow ICP constrains the scope — you don't need to cover every scenario.

### Mode 2: Review existing copy

The user shares actual sales copy or a call script and wants it evaluated against the frameworks and their V2 context docs.

**Evaluate against the frameworks** in the reference files. Call out:
- What's working and why (be specific — tie it to the methodology and their context docs)
- What's not working and why (connect it to the methodology, and note if the copy underutilizes the context docs)
- What's missing (e.g., no "need behind the need," no quantified impact, weak CTA, doesn't leverage the ICP doc)

**Then produce:**
1. An **improved version** — grounded in the V2 context docs, formatted as a clean communication (no inline annotations). It should look like something a seller would actually use.
2. A **separate review document** explaining what changed and why — what was working, what wasn't, and how each change connects to the methodology and context docs.
3. Optionally, a **marked-up version** of the original showing the specific gaps.

---

## Email & sequence frameworks

Read `references/email-frameworks.md` for the complete email methodology. Here are the key principles to always apply:

### Voice and length — the most important thing to get right

Cold emails need to sound like a confident, experienced human peer — not a marketing team or a corporate sales org. The voice should feel like someone who's been in the buyer's shoes, understands their world deeply, and is reaching out because they have something genuinely relevant to share.

**Keep cold emails short: 100-175 words max.** Every sentence must earn its place. Skimmable in under 15 seconds on a phone screen.

**Tone guidelines:**
- Write like you're texting a professional contact, not drafting a press release
- Use first person naturally ("I saw that...", "I sat down with one of our customers...")
- Contractions are good. Short sentences are good. One-line paragraphs are good.
- No corporate phrasing: avoid "I'm reaching out because," "I wanted to connect," "leverage," "optimize," "drive growth," "help companies like yours"
- No rhetorical questions that feel salesy. Instead, *state* the problem as a fact you've observed.
- It's OK to be slightly informal, even playful — personality stands out in a sea of templated emails

**Product capabilities should be nearly invisible in a first cold email.** The email is about the prospect's problem and a compelling reason to have a conversation. If the product comes up at all, it should be through the lens of a customer outcome or an alternative approach.

### Signal-based cold emails — the V2 default

**All V2 cold emails are signal-based by default.** The flip side of declining generic response rates is the explosion of signal-based outreach performance. Campaigns with advanced, signal-specific personalization achieve 18% response rates — more than 5x the generic average. Instead of personalizing with surface-level details like a prospect's name and company, V2 uses real-time trigger events — funding announcements, leadership changes, hiring surges, technology changes — to prove relevance and timing.

**The structure of a signal-based cold email:**

1. **Connect the signal to a pain point (1-2 sentences).** Reference the specific trigger event and bridge it to a problem the buyer likely feels right now. This is not flattery — it's relevance. The trigger comes from the ICP's Buying Triggers section; the pain comes from the PSF.
2. **Present a relevant insight or proof point (1 sentence with social proof).** Don't pitch — share something useful. A customer outcome, a data point, an observation. Pull from PSF Proof Points.
3. **Bridge to your solution (1 sentence, not a pitch).** Frame what you do through the lens of the buyer's problem, not your product's capabilities. The product should be nearly invisible.

**Signal → pain mapping (from ICP Buying Triggers):**

| Signal | Pain Connection | Example Hook |
|--------|----------------|--------------|
| Funding round | Growth pain, scaling challenges | "Scaling the team with new capital? Here's how to make new hires productive on outbound in week one." |
| New executive hire | Proving ROI fast, first 90 days | "First 90 days in a new role are about quick wins. Here's one we can deliver in week two." |
| Hiring surge | Ramp time bottleneck | "12 new SDR roles posted — ramp time is the bottleneck. Here's how to cut it in half." |
| Tech adoption | Integration opportunity | "Just rolled out Salesforce? Here's how to pipe real-time signals directly into your reps' workflow." |
| Earnings call mention | Strategic priority alignment | "Your CEO told analysts that pipeline coverage is the top priority for H2. We can help." |
| Competitor dissatisfaction | Switching pain | "Saw the frustrations with [Competitor] — happy to show you what a switch looks like with zero migration headache." |

**The table above is a structural guide — not the source of truth.** When generating for a specific company, replace these generic mappings with the actual signal-to-pain connections from the company's PSF doc. The PSF maps each problem area to specific buyer situations and quantified impact. If the PSF includes persona-specific or situation-specific sub-mappings, use those for more targeted outreach — they provide the granularity that makes V2 emails feel written for this exact person.

When generating a cold email, always identify which buying trigger from the ICP doc applies to this prospect, then look up the corresponding pain and proof in the PSF. If no specific trigger is provided, infer the most likely one from the scenario context.

### Cold email structure

The structure below is a guide, not a rigid template:

1. **Signal-driven hook** — Reference the specific trigger event that makes this outreach timely. Not flattery — relevance. Pull from ICP Buying Triggers.
2. **Problem they likely feel** — Connect the trigger to a pain the buyer is feeling *right now*. State it confidently as something you've seen at their stage/profile. Pull from ICP Pain Points and PSF Pain (Specific) subsections — name the mechanism, not the symptom.
3. **Dismiss the obvious approach** — Name the typical/incumbent solution and explain why it falls short. This is positioning delivered as a peer observation, not a competitive teardown. Pull from Positioning's How Buyers Evaluate Alternatives.
4. **Social proof as a story, not a stat** — Reference a customer casually ("I sat down with one of our customers the other week..."). Pull from PSF Proof Points — use specific before/after metrics, delivered conversationally.
5. **CTA that offers value, not just time** — Frame what the prospect gets from the conversation. Specific time commitment. Specific deliverable or insight they walk away with.

### V2 cold email characteristics

- 100-175 words, every sentence earns its place
- **Opens with a signal** — references a specific trigger event (funding, hire, tech change, earnings mention) that proves timing and relevance
- States the problem confidently as a fact, connecting the signal to a pain the buyer feels right now
- Names the *mechanism* of pain, not just the symptom — describes the buyer's workflow
- Names and dismisses the typical approach as a peer observation
- Social proof is casual and story-driven, with specific metrics from PSF proof points
- CTA is specific, low-commitment, and frames value to the prospect
- Reads like a peer who's been there wrote it
- Product is barely mentioned
- Messaging shapes the email's conceptual frame without appearing as a tagline

### Subject line guidance

V2 subject lines are specific and relevant — never generic or product-focused:

- **Signal reference:** "Re: [Company]'s Series B — quick thought" (references a specific event)
- **Mutual connection:** "[Name] suggested I reach out" (social proof via referral)
- **Question format:** "How is [Company] handling [specific challenge]?" (names the pain)
- **Short and direct:** "Quick question about [topic]" (under 45 characters for mobile)

The subject line should connect to the signal or pain in the email body. Never use product-focused subjects.

### CTA guidance

V2 CTAs frame value to the prospect — they don't just ask for time:

- **Value-first offer:** "I put together a quick analysis for [Company] — want me to send it over?" (strong for enterprise — gives before asking)
- **Insight offer:** "In a 10-15 min conversation, I can sketch out what this could look like for your context" (specific deliverable + specific time)
- **Low-commitment bridge:** "Worth a conversation, or off base?" (easy to say yes to)

Never: "Would you be open to a quick call?" (no value framed), "Can I get 15 minutes on your calendar?" (asks for time, offers nothing).

### Email best practices

- The best outbound sales emails win on relevance, timing, and message clarity — not clever tricks.
- Most teams underperform because they start with copy instead of targeting, research, and a clear problem hypothesis.
- Strong campaigns keep one clear angle across the sequence and add real substance in follow-up.
- One clear CTA per email. Never multiple competing asks.
- The email should read as if you wrote it directly to this person. Not a template with fields swapped.

### Example: strong cold email (signal-based)

Here's what a strong V2 cold email looks like in practice — notice the signal-driven hook, the mechanism-level pain, and the complete absence of product features:

```
Subject: Re: [Company]'s Series C — quick thought

Hey [first name],

Congrats on the round. This is actually the stage where most VP Eng I've
worked with start drowning in alerts from their monitoring stack. Then
their teams miss a real incident.

The typical move is to centralize everything into one tool. But when your
team is spending 45+ minutes per incident context-switching across Datadog,
CloudWatch, and PagerDuty, having them all in one place doesn't touch the
real problem.

One of our customers — also a [prospect industry] company post-Series C —
cut their alert volume from 94 to 28 actionable signals. Their MTTR dropped
by 40% in the first month.

I put together a quick analysis of what this could look like for [Company]'s
stack — want me to send it over?

Best,
[Sender Name]
[Title] | [Company]
```

**Why this works:** Opens with a specific signal (funding round) and immediately connects it to a pain pattern. States the problem as observed fact. Dismisses the obvious approach ("centralize everything") and names why it fails (context-switching across specific tools — mechanism, not symptom). Social proof is casual with specific metrics pulled from PSF. CTA offers a deliverable (analysis) before asking for time.

### Sequence design
- ~10 touch points across email, call, LinkedIn over 21-30 days
- 2-3 days between touches
- Each email builds on the last — never "just checking in"
- **Each follow-up should pull from a different foundation doc angle:** Email 1 connects signal to pain (ICP + PSF). Email 2 shares a relevant proof point or insight (PSF Proof Points). Email 3 addresses a likely objection (PSF Objections). Email 4 references competition or an alternative approach (Positioning). Email 5 creates urgency with cost of inaction (PSF Impact Quantified).
- Break-up email leaves the door open and makes it easy to respond

### Re-engage emails
- Tie to a compelling "why now" — what's changed since last engagement. Check ICP Buying Triggers for new signals.
- Check if the contact's role/situation has changed
- Reference the prior conversation specifically, not generically
- The prospect is giving you time — what are they receiving in exchange?

---

## Discovery call scripts

Read `references/discovery-scripts.md` for the full script library. Here are the core techniques to apply:

### The discovery arc (sequential flow)

These scripts build on each other. A discovery call isn't a checklist — it's a conversation that progressively deepens understanding:

1. **Open with status parity** — "I'm glad we found the time to meet today" (not "thanks for your time")
2. **Set rules of engagement** — Align on objective, agenda, and decision. Use softening language: "Here's what I'm thinking... let me know if you had something else in mind." Close with "Does that feel fair?"
3. **Earn the right to ask questions** — Use a Discovery Prompter: tell a short customer pain narrative that mirrors the buyer's world, then hand it back: "Enough about our customers... help me understand YOUR challenges."
4. **Uncover the need behind the need** — Don't stop at the first answer. Push past the solution they're requesting to the underlying business problem: "What's going on in your business that's driving this challenge to be a priority?"
5. **Diagnose root cause** — "What's your opinion on why this is happening?" Aligning your solution to the *cause* of the pain closes deals.
6. **Quantify the impact** — "What metric is suffering as a result of the challenges you're sharing with me?" This starts the business case conversation.
7. **Summarize in their words** — Mirror their exact language back. "Let me summarize what I've heard so far..." End with "Did I get that right?"
8. **Build negative impact** — Explore ripple effects: "What are the ripple effects this challenge is having across the business?"
9. **Understand buying criteria** — "What do you think you need in a solution to solve these challenges?"
10. **Secure next steps** — Always have a POV on What, Who, and Why. "Based on what you told me today, what I recommend we do next is ___. Does that feel fair?"

### V2 discovery characteristics

- Questions go 3-4 layers deep — past the surface answer to the business driver
- Summaries use the buyer's exact words and emotional language
- The seller has a clear narrative about the pain they typically solve (Discovery Prompter)
- Transitions are smooth — summaries act as springboards to new threads
- The seller takes a leadership posture on next steps

---

## Output formatting

**Core principle: outputs are clean communications.** Each output must stand alone as a realistic, self-contained communication. No annotations, no "why this works" callouts, no coaching commentary, no meta-text.

**No extra labels or headings.** Do not add headings, titles, or labels that are not part of the format templates below. Specifically, never add:
- Version labels like "V1 —", "V2 —"
- Communication type labels like "Cold Outbound Email — VP of Security"
- Any prefixed heading that describes what the output *is* rather than being part of the output itself

The output should start directly with the format template's first element (e.g., `Subject:` for a cold email, `# Call Prep:` for a call prep brief).

**Analysis is a separate deliverable, produced only when requested.** If the user explicitly asks for feedback, analysis, or coaching commentary, produce the analysis as a separate document — never mixed into the communication output.

If the user asks for a Word doc, follow the docx skill.

### Format by communication type

#### Cold email (outbound)

```
Subject: [Subject line — signal-driven, specific, under 45 characters when possible]

Hey [First Name],

[Body — short paragraphs, 100-175 words total. Signal-driven hook →
pain assertion → dismiss obvious approach → casual social proof → value CTA.
One-line paragraphs are fine. Every sentence earns its place.]

[Casual sign-off],
[Sender Name]
[Title] | [Company]
```

The subject line matters. V2 subjects reference a trigger event, a pain point, or a mutual connection — never product-focused.

The signature block grounds the email as a real artifact. Keep it simple — name, title, company.

#### Call prep brief

```
# Call Prep: [Prospect Name], [Company]
[Meeting type] | [Date/Timing] | [Duration]

## Call Objective
[1-2 sentences: what needs to happen in this meeting for the deal to advance.
Framed around what the prospect needs to see/hear.]

## Buyer Snapshot
[2-3 sentences on who they are, what signals suggest about their priorities,
and ICP fit indicators. Include which buying triggers apply and why this
buyer fits the ICP. Flag any Negative ICP concerns.]

## Pre-Call Hypothesis
- [Hypothesis 1 — specific, testable, grounded in PSF with quantified impact range]
  - Proof point ready: [Customer story from PSF if hypothesis validates]
- [Hypothesis 2]
  - Proof point ready: [Customer story]
- [Hypothesis 3]

## Opening & Rules of Engagement
[Scripted opener — verbatim what to say. Agenda-setting language.
Adapted to the meeting type.]

## Discovery Prompter
[Customer pain narrative tailored to this buyer's world. Uses specific
workflow details from PSF, quantified impact, and a proof point the
buyer will recognize as their own situation.]

Handoff: "Enough about our customers — help me understand YOUR challenges when it comes to [specific area]."

## Key Questions

**Surface the problem**
- [Question tailored to this buyer]
- [Question]

**Need behind the need**
- [Question]

**Root cause**
- [Question]

**Quantify impact**
- [Question]

**Buying criteria**
- [Question]

## Likely Objections

| Objection | Response Framework |
|---|---|
| "[Objection from PSF]" | [Acknowledge → Probe → Reframe — pulled from PSF objection responses] |
| "[Objection]" | [Acknowledge → Probe → Reframe] |

## Recommended Next Steps
- **What:** [Specific next step to propose]
- **Who:** [Who should be in the room and why]
- **Why:** [Why this is the right next step for the buyer]
```

#### Competitive brief

**Design principle: this is a sales cheat sheet.** A seller should be able to read it in under 5 minutes and walk into a conversation ready to answer "why us, why now, why not them."

**Deal-level format:**

```
# Competitive Brief: [Competitor] in [Prospect Company] Deal

## Deal Context
[2-3 sentences: where the deal stands, what we know about the prospect's
evaluation, and why this competitor is in the mix.]

## Where We Win
- [Scenario/condition]: [Why we win here — framed as buyer value, not feature comparison.
  Pulled from Positioning Value Wedge and How Buyers Evaluate Alternatives.]

## Where They're Perceived as Stronger — and the Reframe
- [Perceived strength]: [Honest context on why buyers think this + the language to
  redirect. Not defensive — reframes around the buyer's actual problem.]
- [Perceived strength]: [Context + reframe]

## Talk Track: "Why Not [Competitor]?"
[2-3 sentences of verbatim conversational language. Peer-level, not defensive.
Anchored in customer outcomes and business fit, not features.
Pulled from Positioning and Messaging Talk Track Guidance.]

## Proof Points
- [Customer switching story that mirrors this buyer's situation — from PSF]
- [Specific metric or outcome]

## Cost of Inaction
[1-2 sentences: what it costs to keep doing what they're doing. Pulled from
PSF Impact (Quantified). Makes "do nothing" feel expensive.]
```

**Outbound motion format (competitor switching campaign):**

```
# Competitive Brief: [Competitor] → [Our Company] Switching Campaign

## Trigger Event
[What changed and why it creates switching opportunity now.]

## Who Switches (and When)
[The profile of customers most likely to switch. What inflection point or
pain threshold makes the competitor's approach untenable for this segment.
Pulled from ICP Buying Triggers and Positioning How Buyers Evaluate Alternatives.]

## Why They Switch
- [Reason 1 — tied to a specific pain that the trigger event amplifies]
- [Reason 2]
- [Reason 3]

## The Reframe
[Where we deliver value the competitor structurally can't match,
particularly in light of the trigger event. Pulled from Positioning Value Wedge.]

## Outbound Messaging Guidance
[Key themes and language for outreach to competitor customers.
Not a script — framing and positioning guidance that informs cold emails
and call openers. Pulled from Messaging Pillars and Talk Track Guidance.]

## Switching Stories
- [Customer story 1 — why they switched, what triggered it, what changed after]
- [Customer story 2]
```

### Visual hierarchy and readability

Outputs should be easy to skim. Apply formatting proportional to the output length.

**All output types:**
- Use **bold** on key terms, names, metrics, and phrases the reader's eye should land on first. Bold the thing that matters most — not entire sentences.
- Keep paragraphs short. In emails, one-line paragraphs are fine. In briefs, 2-3 sentences max.
- Use whitespace intentionally.

**Longer outputs (call prep briefs, competitive briefs):**
- Use horizontal rules (`---`) between major sections.
- Use the heading hierarchy from format templates. `##` for major sections, `**bold**` for sub-sections.
- Tables where templates include them.

**Short outputs (cold emails, follow-ups):**
- No horizontal rules.
- Bold sparingly — at most one or two key phrases.
- Signature block acts as the visual closer.

---

## Key phrases and language patterns

Certain phrases carry specific weight in these methodologies. Use them in the right context:

**Status-preserving openers:** "I'm glad we found the time to meet today" (never "thanks for taking the time")

**Softening language for control:** "Here's what I'm thinking in terms of agenda. Let me know if you had something else in mind..."

**Validation closes:** "Does that feel fair?" (powerful because people want to be perceived as fair — use sparingly)

**Summary openers:** "Let me summarize what I've heard so far..."

**Need-behind-the-need:** "What's going on in your business that's driving this challenge to be a priority?"

**Root cause diagnosis:** "What's your opinion on why this is happening?"

**Value quantification:** "What metric is suffering as a result of the challenges you're sharing with me?"

**Negative impact (sophisticated):** "What are the ripple effects this challenge is having across the business?"

**Buying criteria:** "What do you think you need in a solution to solve these challenges?"

**Next steps (leadership posture):** "Based on what you told me today, what I recommend we do next is ___."
