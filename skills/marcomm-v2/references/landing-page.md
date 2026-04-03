# Landing Page Reference — Copy + Structure

## Purpose

A landing page is a standalone web page designed to convert a visitor into the next step — a download, a signup, a demo request, a deeper exploration. Unlike a blog post (which earns attention through content value) or a one-pager (which is a self-contained leave-behind), a landing page is part of a journey. The visitor arrived from somewhere (an ad, an email, a search result) with a specific expectation, and the page must deliver on that expectation while building enough conviction to take the next step.

This skill outputs the full copy AND structural recommendations — section order, component types, CTA placement, and visual direction. The output is a markdown document that a designer or developer can build from.

---

## Page architecture

Landing pages follow a vertical persuasion arc. Each section builds on the previous one, layering problem → solution → proof → action. The reader should be able to convert at multiple points (not just the bottom), but the full scroll should feel like a complete argument.

### Core sections (in order)

```
1. HERO SECTION
   Components:
   - H1: Outcome-oriented headline *in the buyer's world*. States what
     changes for them — not what the tool does well. Not a product attribute
     (accuracy, speed, efficiency) but a buyer outcome (ship on time, hit
     targets, pass audits). The result they want, described in their language.
   - Subhead (dek): 1-2 sentences that narrow the promise and signal who
     this is for. This is where you name the audience or use case.
   - Primary CTA: Above the fold. Funnel-appropriate. Clear verb + outcome.
     "See pricing" or "Get the playbook" — not "Learn more."
   - Optional: Hero visual suggestion (product screenshot, illustration,
     or social proof element like a logo bar)

2. PROBLEM SECTION
   Components:
   - H2: Names the problem in the buyer's language
   - 2-3 short paragraphs or bullets that describe the current state —
     what's broken, what's costing them, what they've tried
   - Optional: A "sound familiar?" or recognition prompt that invites
     the reader to self-identify

   Purpose: This section earns the right to talk about the solution.
   If the reader doesn't see themselves in the problem, nothing after
   this will land.

3. SOLUTION / HOW IT WORKS
   Components:
   - H2: Benefit-led, not product-led ("How [outcome] actually works"
     not "Our platform features")
   - 3-4 capability blocks, each with:
     - Benefit heading (what the buyer gets)
     - 2-3 sentences explaining how it works
     - Optional: icon or visual suggestion per block
   - Structure as a 3-column grid or alternating left/right blocks

   Purpose: Bridge from problem to product. Each capability should
   map directly to a pain point from the problem section.

4. PROOF SECTION
   Components — use 1-3 of these depending on what's available:

   a. METRICS BAR: 3-4 quantified outcomes with customer attribution
      Format: [Big number] + [What it measures] + [Who achieved it]
      Layout: Horizontal band, high visual weight

   b. CUSTOMER STORY: 1-2 paragraph mini case study
      Structure: Situation → Challenge → How they used [product] → Result
      Include a customer quote if available

   c. LOGO BAR: Customer or partner logos
      Layout: Horizontal row, grayscale, with a label like
      "Trusted by teams at..." or "Used by X+ companies"

   d. TESTIMONIAL: Direct customer quote with name, title, company
      Layout: Pull quote with headshot if available

   Purpose: Proof converts skeptics. The problem section got them
   nodding, the solution section got them interested, the proof
   section gets them to believe.

5. SECONDARY CTA / CONVERSION SECTION
   Components:
   - H2: Reinforces the outcome or reduces friction
     ("See how [company type] teams use this" or "Start in under 5 minutes")
   - Brief supporting text (1-2 sentences, not a paragraph)
   - CTA button — can be the same as hero or a lower-commitment alternative
   - Optional: address a common objection beneath the CTA
     ("No credit card required" / "14-day free trial" / "Talk to a human, not a bot")

6. ADDITIONAL SECTIONS (use when relevant, not by default)

   FEATURE DEEP-DIVE: For product-specific landing pages where the
   buyer needs more detail. 3-5 features, each with heading + 2-3
   sentences + optional screenshot. Order by buyer priority, not
   product architecture.

   FAQ: 4-6 questions that address real buyer objections or knowledge
   gaps. Don't use FAQ as a dumping ground for content that didn't
   fit elsewhere. Each answer should be 2-3 sentences max.

   COMPARISON TABLE: When the page is positioning against alternatives.
   Columns: [This product] vs. [Alternative approach] vs. [Status quo].
   Rows: Buyer evaluation criteria (from positioning doc), not feature
   checkboxes.

7. FOOTER CTA
   Components:
   - Final conversion prompt — short, confident, clear
   - CTA button
   - Supporting links (pricing, resources, contact)
```

---

## Scan-pattern optimization

Landing pages are the content type where scan-pattern design matters most, because the visitor often didn't choose to read — they clicked an ad or link and are deciding whether to stay.

**F-pattern areas (left-aligned reading):**
- H1 and subhead — these get read first, always
- First sentence of each section — front-load the key message
- Bullet point openings — make the first 3-4 words carry meaning
- Left-aligned CTAs in text-heavy sections

**Z-pattern areas (diagonal scanning):**
- Hero section: eye moves from top-left (headline) to top-right (visual/CTA) to bottom-left (subhead) to bottom-right (secondary element)
- Metrics bars: eye scans left-to-right across numbers

**Layer-cake reading (section-by-section scanning):**
- Readers scan H2s and first lines, skipping body text
- This means your H2s must work as standalone value propositions
- Every H2 should pass the "would this convince someone by itself?" test

**Above-the-fold rules:**
- The hero must make it obvious there's more below: allow content to visibly cut off at the fold
- Hero + beginning of next section should be visible without scrolling
- Avoid ending the viewport on empty whitespace — it signals "page over"

---

## Copy rules specific to landing pages

**Headline math:** Hero H1 = outcome *in the buyer's world*. Subhead = for whom + how. This two-part formula prevents the common mistake of trying to do too much in the headline. The H1 is the promise; the subhead is the proof of specificity.

The hero H1 must describe what changes in the buyer's world — not what the tool does well. This is a critical distinction. "Train high-performing clinical models on de-identified data — without sacrificing accuracy or speed" is tool-framed: it describes the product's performance attributes. Compare to "Ship your clinical AI product on schedule — without compromising patient privacy" which is buyer-world-framed: it describes the outcome the buyer wants in language that reflects their priorities and pressures.

The test: does the headline describe a product attribute (accuracy, speed, efficiency, security) or a buyer outcome (ship on schedule, hit revenue targets, pass your audit, stop losing deals)? Product attributes are features wearing outcome costumes. Real outcomes reference the buyer's goals, timelines, pressures, or business results. Words like "accuracy," "speed," "efficiency," "performance," and "scalability" are almost always tool-framed — replace them with what those attributes actually enable in the buyer's world.

**One page, one argument.** A landing page makes one case for one action. If you find yourself making two different arguments (e.g., "save time" AND "reduce risk" as co-equal themes), pick the primary one and make the other supporting evidence. Competing arguments dilute conversion.

**CTA consistency.** The primary CTA should appear 2-3 times on the page (hero, mid-page, footer) with consistent copy. Don't invent new CTA text each time — repetition builds recognition and clarity. Secondary CTAs (lower commitment) can differ but should be visually distinct from the primary.

**Section transitions.** Each section should create a natural reason to keep reading. The problem section creates urgency → the solution section offers relief → the proof section builds belief → the CTA section makes acting easy. If any section doesn't advance this arc, cut it.

**Social proof placement.** Logo bars and light social proof work well early (after hero, before problem section) to establish credibility before making claims. Heavy proof (case studies, detailed metrics) works better after the solution section, when the reader has context to evaluate it.

---

## Visual and layout notes

Do not include `<!-- LAYOUT NOTE -->` comments or layout/design suggestions in the output. The markdown structure (heading hierarchy, horizontal rules, bullet formatting) should imply the visual hierarchy. Layout decisions are for the design team, not the content output.

---

## Quality checklist

Before finalizing a landing page:

- [ ] Hero H1 is an outcome, not a product name or feature
- [ ] A visitor can understand the offer and audience in under 5 seconds from hero alone
- [ ] Problem section uses buyer language and describes a situation the reader recognizes
- [ ] Every solution block maps to a specific pain point from the problem section
- [ ] Proof points are specific (numbers, names, timeframes) — not vague
- [ ] CTA appears at least 2x (hero + footer minimum) with consistent copy
- [ ] CTA matches the funnel stage — no hard sell on TOFU pages
- [ ] H2s work as standalone statements — scanning just H2s tells the page's story
- [ ] Above-the-fold content invites scrolling (no dead-end whitespace)
- [ ] A competitor could NOT use this page by swapping their logo
- [ ] Markdown structure (headings, rules, bullets) implies visual hierarchy without layout comments
