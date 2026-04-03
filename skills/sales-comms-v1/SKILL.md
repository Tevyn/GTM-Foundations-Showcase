---
name: sales-comms-v1
description: >
  Generate V1 (weak foundations) B2B SaaS sales communications — cold emails, sequences,
  follow-ups, discovery call scripts, talk tracks, call prep briefs, and competitive briefs.
  Demonstrates what seller communications look like when built on broad, unfocused GTM
  foundations. Reads ONLY from V1 doc sets. Do not use this skill directly unless generating
  V1 content for a side-by-side comparison via gtm-demo.
---

# Sales Communications V1 Skill — Weak Foundations Output

This skill generates B2B SaaS sales communications that reflect what sellers produce when working from broad, unfocused GTM foundations. It handles written (emails, sequences) and verbal (discovery call scripts, talk tracks) formats, plus call prep briefs and competitive briefs.

## How this skill thinks about sales comms

There's a core principle driving everything here: **the quality of a seller's communications is a symptom of the GTM system they're working within.**

Two sellers can follow the same template. One produces compelling, resonant outreach. The other produces generic noise. The difference usually isn't talent — it's foundations:

| | Strong Foundations (V2) | Weak Foundations (V1 — this skill) |
|---|---|---|
| **ICP** | Focused niche; knows exactly who they're selling to | Too broad; trying to be relevant to everyone |
| **Buyer understanding** | Knows what incites action for this persona | Surface-level understanding of buyer motivations |
| **Value prop** | Specific problem/solution value they can prove | Generic benefits that could apply to any vendor |
| **Process** | Repeatable engagement process they've refined | Ad hoc approach; each email is a fresh start |
| **Enablement** | Has the messaging, positioning, and proof points | Working from weak collateral or figuring it out alone |

This skill embodies the right column. The V1 seller isn't a bad rep — they're a decent seller working from weaker foundations.

### What V1 is missing — the specificity cascade

The four foundation areas aren't independent — they compound. A niche ICP is the root that makes everything else possible. **V1 doesn't have this root, and the absence cascades:**

1. **Broad ICP → you don't know the inflection point.** A broad ICP can't support assertions about when pain becomes acute for a specific segment. V1 resorts to vague industry observations because the ICP is too wide to pinpoint the moment pain starts.

2. **No inflection point → you ask instead of assert.** V1 has to ask ("Are you struggling with X?") because you genuinely don't know if this prospect has the problem — the ICP is too broad to assume.

3. **Weak problem-solution fit → you name the symptom, not the mechanism.** V1 only knows the symptom ("too many alerts," "reporting is hard") because the foundation hasn't gone deep enough into how the problem actually plays out for a specific segment.

4. **Weak messaging → no conceptual frame.** V1 either drops a tagline in awkwardly or doesn't use messaging at all — resulting in communications with no conceptual through-line. Defaults to feature lists.

5. **Weak positioning → competitive comparison instead of peer observation.** V1 names competitors directly ("Unlike Datadog, New Relic...") because it doesn't have the depth to articulate *why the typical approach is wrong* — only that alternatives exist.

---

## Doc isolation rules

**This skill reads ONLY from V1 docs.** The path is `company-gtm-docs/{company}/v1/`. Read `v1/icp.md`, `v1/psf.md`, `v1/positioning.md`, `v1/messaging.md`, and `v1/context.md`. Do NOT read, reference, or incorporate anything from the `v2/` directory.

Use the V1 foundation documents as source material, but don't compensate for their breadth. If the V1 ICP is broad, the email should be broad. If the V1 messaging is generic, the email should sound generic. The V1 docs' weaknesses should be visible in the output.

---

## V1 behavioral patterns — follow these

Every output from this skill must exhibit these specific behaviors:

- **Broad targeting.** The communication should read as if it could be sent to a wide range of prospects across the industry — not tailored to a specific niche or persona pattern. If the V1 ICP names multiple segments, write to the broadest common denominator.
- **Ask, don't assert.** Use rhetorical questions about pain ("Are you struggling with...?", "Is your team spending too much time on...?") rather than confidently stating the problem as observed fact. The seller doesn't know this prospect's world well enough to assert.
- **Symptom-level problem framing.** Stay at the surface — name the general pain category without describing the mechanism, the workflow, or the specific activity that burns time. "Alert fatigue" not "operators spend most of their shift triaging access control alarms that turn out to be nothing."
- **Product and feature language.** Describe what the product does rather than framing around the buyer's problem and an alternative approach. Use phrases like "our platform," "our solution provides," capability descriptions.
- **Formal or logo-drop social proof.** Name a customer formally or cite a stat without story context, rather than casual "I sat down with a customer" narratives.
- **Generic CTA.** Ask for time without framing what's in it for them ("Would you be open to a quick call?").
- **Corporate tone.** Phrases like "help companies like yours," "drive efficiency," "optimize your operations." The communication should sound like it was written by a marketing team, not a peer.
- **Longer than it needs to be.** 175-225 words for cold emails. Filler context, unnecessary setup, sentences that don't earn their place.

---

## Modes of operation

### Mode 1: Generate from a scenario

The user or calling agent provides context docs and describes what they need.

**Before writing, confirm you have:**
- The V1 context docs (ICP, problem-solution fit, messaging, positioning)
- What type of communication? (cold email, follow-up, discovery opener, full sequence, etc.)
- Any specific scenario details (trigger event, persona variant, "why now")

If context docs are provided, use them as the source of truth. Don't invent pain points or value props that aren't grounded in those documents.

**Produce a single V1 output** — formatted as a clean, realistic communication. No annotations, no commentary. It should look like something a seller actually wrote and sent.

### Mode 1b: Sales call prep

The user has an upcoming meeting and needs a structured brief.

**Gather the specifics:**
- The V1 context docs (ICP, problem-solution fit, messaging, positioning)
- Who is the buyer? (name, title, company, company size/stage)
- How did this meeting come about?
- What do we already know about them?
- What type of meeting is this?

**V1 call prep looks like:**
- **No stated call objective or outcome** — the brief focuses on what the seller needs to cover (pricing, features to demo, talking points) rather than what the prospect needs to walk away with.
- **Buyer snapshot is thin** — basic research notes (company size, title, LinkedIn summary) but no ICP fit analysis. Meeting context references what the seller showed in the last call rather than the buyer's trigger or buying context.
- **Pre-call hypotheses are surface-level** — generic ("they probably want to improve marketing ROI") because the broad ICP can't support specific assertions about this segment's pain patterns.
- **Questions are recycled** — the same generic discovery questions used for every call.
- **Discovery Prompter is generic** — tells a customer story that could apply to any prospect in the industry.
- **Pricing emphasis** — the brief gravitates toward pricing and competitive comparison rather than value and discovery.
- **Next steps are reactive** — "see how it goes" rather than a pre-planned recommendation.

### Mode 1c: Competitive brief

The user needs competitive intelligence formatted for seller use.

**Two common triggers:**
1. **Deal-level:** "Brief me on [competitor] for this deal."
2. **Outbound motion:** Initiative to contact competitor customers based on a trigger event.

**Gather the specifics:**
- The V1 context docs
- Which competitor?
- What's the context? (active deal, outbound campaign, general enablement)
- If deal-level: what do we know about the prospect?
- If outbound motion: what's the trigger event?

**V1 competitive brief looks like:**
- **Reads like a battle card copy/paste.** Surface-level feature comparisons and "we do this, they don't" tables that don't help a seller have a nuanced conversation.
- **No deeper insight.** Doesn't go beyond what's on the competitor's website or existing battle cards.
- **Either too short or too long.** Too short when it's just copy/paste. Too long when it tries to cover every possible scenario because the ICP is too wide to narrow focus.
- **Defensive posture.** Names competitor weaknesses directly rather than framing around the buyer's problem.
- **Generic proof points.** Logo-drops or stats without context — no customer switching stories specific enough for the seller to reference naturally.

---

## Email & sequence frameworks

Read `references/email-frameworks.md` for the complete email methodology. For V1, apply the weak patterns:

### V1 cold email characteristics

- 175-225 words, includes filler and unnecessary context
- Opens with the seller's company or a generic observation ("a lot of companies are moving away from...")
- Asks rhetorical questions about the problem ("Are you drowning in alerts?")
- Stays at the symptom level without naming the mechanism
- Lists product features or capabilities
- Names competitors directly instead of dismissing the approach
- Social proof is formal or name-drops logos without substance
- CTA asks for time without framing what's in it for them ("Would you be open to a 15-minute call?")
- Could be sent to anyone in the industry
- Falls back on corporate sales language ("help companies modernize," "improve efficiency")

### V1 subject lines

Generic or product-focused. Examples: "Improving [pain area] at [Company]", "Quick question about your [function]", "[Company Name] + [Your Company] — [capability]"

### Sequence design
- ~10 touch points across email, call, LinkedIn over 21-30 days
- 2-3 days between touches
- Each email builds on the last — never "just checking in"
- Follow-ups add new reasons to engage: address objections, share social proof, create urgency, reference competition
- Break-up email leaves the door open and makes it easy to respond

### Re-engage emails
- Tie to a compelling "why now"
- Check if the contact's role/situation has changed
- Reference the prior conversation specifically, not generically

---

## Discovery call scripts

Read `references/discovery-scripts.md` for the full script library. For V1, apply the weak discovery patterns:

### V1 discovery characteristics

- Stops at the first answer — treats the buyer's stated need at face value
- Fires questions one after another without summarizing or acknowledging
- Uses generic discovery questions that feel like a checklist
- Paraphrases in their own words instead of mirroring the buyer's language
- Defers on next steps: "So what do you think we should do next?"
- Doesn't connect discovered pain back to the solution's capabilities

### The discovery arc (structural reference)

These scripts provide the structural template — but V1 executes them weakly:

1. **Open with status parity** — "I'm glad we found the time to meet today"
2. **Set rules of engagement** — Align on objective, agenda, and decision
3. **Earn the right to ask questions** — Use a Discovery Prompter (V1: generic, could apply to anyone)
4. **Uncover the need behind the need** — V1 stops at the first answer
5. **Diagnose root cause** — V1 skips this or asks superficially
6. **Quantify the impact** — V1 uses generic industry stats instead of buyer-specific metrics
7. **Summarize in their words** — V1 paraphrases instead of mirroring
8. **Build negative impact** — V1 skips or asks bluntly
9. **Understand buying criteria** — V1 asks but doesn't reshape
10. **Secure next steps** — V1 defers to the buyer

---

## Output formatting

**Core principle: outputs are clean communications.** Each output must stand alone as a realistic, self-contained communication. No annotations, no "why this works" callouts, no coaching commentary, no meta-text.

**No extra labels or headings.** Do not add headings, titles, or labels that are not part of the format templates below. Specifically, never add:
- Version labels like "V1 —", "V2 —"
- Communication type labels like "Cold Outbound Email — VP of Security"
- Any prefixed heading that describes what the output *is* rather than being part of the output itself

The output should start directly with the format template's first element (e.g., `Subject:` for a cold email, `# Call Prep:` for a call prep brief).

If the user asks for a Word doc, follow the docx skill.

### Format by communication type

#### Cold email (outbound)

```
Subject: [Subject line]

Hey [First Name],

[Body — 175-225 words. Corporate tone, feature language, rhetorical questions.
Filler context and unnecessary setup included.]

[Formal sign-off],
[Sender Name]
[Title] | [Company]
```

#### Call prep brief

```
# Call Prep: [Prospect Name], [Company]
[Meeting type] | [Date/Timing] | [Duration]

## Call Objective
[V1: focuses on what the seller needs to cover — pricing, features, talking points —
rather than what the prospect needs to see/hear.]

## Buyer Snapshot
[V1: thin — basic research notes without ICP connection.]

## Pre-Call Hypothesis
- [V1: surface-level, generic]
- [Hypothesis 2]

## Opening & Rules of Engagement
[Scripted opener. Adapted to meeting type.]

## Discovery Prompter
[V1: generic customer story that could apply to any prospect.]

Handoff: "Enough about our customers — help me understand YOUR challenges when it comes to [specific area]."

## Key Questions

**Surface the problem**
- [V1: recycled generic questions]

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
| "[Objection]" | [Acknowledge → Probe → Reframe] |

## Recommended Next Steps
- **What:** [V1: vague or reactive]
- **Who:** [Generic]
- **Why:** [Thin rationale]
```

#### Competitive brief

**Deal-level format:**

```
# Competitive Brief: [Competitor] in [Prospect Company] Deal

## Deal Context
[2-3 sentences on deal status and competitor presence.]

## Where We Win Against [Competitor]
- [Feature comparison — "we do this, they don't"]
- [Feature comparison]

## Where [Competitor] Wins
- [Surface-level assessment]

## The Value Wedge
[V1: thin or absent — defaults to feature list rather than structural advantage]

## Talk Track: When the Buyer Brings Up [Competitor]
[V1: defensive, names competitor weaknesses directly.
Feature-by-feature rather than problem-framed.]

## Relevant Switching Stories
- [V1: logo-drops or stats without context]
```

**Outbound motion format (competitor switching campaign):**

```
# Competitive Brief: [Competitor] → [Our Company] Switching Campaign

## Trigger Event
[What changed and why it creates switching opportunity.]

## Who Switches (and When)
[V1: broad profile, no specific inflection point]

## Why They Switch
- [Reason 1 — generic]
- [Reason 2]

## The Value Wedge
[V1: feature-focused rather than structural]

## Outbound Messaging Guidance
[V1: generic themes, not specific enough to fuel targeted outreach]

## Switching Stories
- [V1: logo-drops without detail]
```

### Visual hierarchy and readability

Outputs should be easy to skim. Apply formatting proportional to the output length.

**All output types:**
- Use **bold** on key terms, names, metrics. Bold the thing that matters most in each paragraph or bullet — not entire sentences.
- Keep paragraphs short. In emails, one-line paragraphs are fine. In briefs, 2-3 sentences max.
- Use whitespace intentionally.

**Longer outputs (call prep briefs, competitive briefs):**
- Use horizontal rules (`---`) between major sections.
- Use the heading hierarchy from format templates.
- Tables where templates include them.

**Short outputs (cold emails, follow-ups):**
- No horizontal rules.
- Bold sparingly.
- Signature block acts as the visual closer.

---

## Key phrases and language patterns

Certain phrases carry specific weight. V1 may use these but executes them weakly:

**Status-preserving openers:** "I'm glad we found the time to meet today"

**Softening language for control:** "Here's what I'm thinking in terms of agenda. Let me know if you had something else in mind..."

**Validation closes:** "Does that feel fair?"

**Summary openers:** "Let me summarize what I've heard so far..."

**Need-behind-the-need:** "What's going on in your business that's driving this challenge to be a priority?"

**Root cause diagnosis:** "What's your opinion on why this is happening?"

**Value quantification:** "What metric is suffering as a result of the challenges you're sharing with me?"

**Negative impact (sophisticated):** "What are the ripple effects this challenge is having across the business?"

**Buying criteria:** "What do you think you need in a solution to solve these challenges?"

**Next steps (leadership posture):** "Based on what you told me today, what I recommend we do next is ___."
