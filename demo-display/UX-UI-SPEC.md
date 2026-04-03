# UX/UI Functional Specification: GTM Foundations Demo Display

**Last updated:** April 2, 2026
**Application type:** Presenter-driven, single-page interactive web experience
**Primary user:** Kaitlin Bell, presenting live to prospects
**Audience:** CEOs/founders, CROs/revenue leaders, and investors at Seed through Series A-B companies
**Technology:** Vanilla HTML/CSS/JS SPA served by Node.js, markdown rendering via marked.js

---

## 1. Product Overview

An interactive comparison engine that makes the quality gap between weak-foundation (V1) and strong-foundation (V2) GTM outputs viscerally obvious — then reveals why the gap exists by connecting it to the four upstream foundations (ICP, problem-solution, positioning, messaging).

The display serves as a live demo tool. All screens are prospect-facing. The landing page acts as visual "wallpaper" while the presenter sets up the conversation. The presenter narrates and controls navigation throughout — the audience watches, not clicks.

### Design Direction: Grounded Edge

The visual identity occupies a specific position: more structured and authoritative than a typical consultancy brand, more distinctive and warm than enterprise SaaS. Directness leads, distinction reveals through engagement. This mirrors the Empathetic Challenger voice — lead with credibility, earn the right to challenge.

**Two accent families, mapped to voice:**
- **Yellow family** (Signal Yellow → Dark Yellow → Yellow Tint) — the push, the challenge
- **Purple family** (Deep Violet → Muted Violet → Lilac → Violet Mist) — the pull, the empathy

---

## 2. Demo Narrative & Talk Track

A reference for delivering the GTM Foundations Showcase in a 1:1 conversation with a CEO/exec prospect or an investor with portfolio companies. Designed for a 10-15 minute screen share.

**The narrative's job:** Not to prove V2 is better — the side-by-side does that on its own. The narrative's job is to prove that **the path from V1 to V2 requires strategic expertise the team doesn't currently have in-house** — and that the methodology is built to navigate that path with them.

### Audience & Company Selection

| Audience | Company Used in Demo | Why |
|----------|---------------------|-----|
| **CEO / Exec Prospect** | A competitor or adjacent player in their space | Execs are too deep in their own context — showing their company leads to nitpicking accuracy, which derails the conversation. A competitor creates subtle competitive tension ("this is what they could look like") without manufactured urgency. |
| **Investor (portfolio intro)** | Actual portfolio companies | Ask about challenges they've tried to help portfolio companies with. Use relevant companies so the pattern recognition is immediate and the investor can see the methodology applied to their own world. |

### Phase 1: Mirror Their World

**Purpose:** Establish pattern recognition before showing anything. The prospect should hear their own situation described back to them.
**Timing:** 1-2 minutes, before screen share.
**Display state:** Not yet visible, or Landing page as wallpaper.

**Talk track territory:**

> "The companies I work with have usually been through a few rounds of trying to fix GTM. They've rewritten messaging, tested new channels, maybe brought in a demand gen hire or an agency. Each time, things improve for a quarter and then flatten. The board is asking what's different this time. The team is starting to lose confidence in their own recommendations because nothing has stuck."

Then the diagnosis:

> "What I've found — and this is consistent across every engagement — is that the problem isn't in the execution layer. It's that the strategic foundation underneath everything was never locked in. And I don't mean they don't have an ICP doc or a positioning statement. They do. The problem is those documents are broad enough to justify anything, which means they're specific enough to drive nothing."

**Why this works:** You're not pitching. You're demonstrating pattern recognition — which is itself a signal of expertise. The investor hears "she's seen this enough to name it before I describe it." The exec hears "she's describing my last three quarters."

### Phase 2: Name Why They Haven't Fixed It

**Purpose:** Close the door on "I'll just tell my team to get more focused." Before showing any output, name the specific reasons the team hasn't already made the niche decision. This is where your role becomes necessary.
**Timing:** 1-2 minutes, still no screen.
**Display state:** Not yet visible.

**Talk track territory:**

> "The reason this doesn't get fixed isn't that the team doesn't know they should be more focused. They usually do. There are two things that keep it stuck."

**Blocker 1: The niche decision feels like a bet they can't afford to get wrong.**

The team is looking at multiple segments that all seem viable. Nobody wants to be the person who said "let's walk away from these other three." There's also pressure — sometimes from the board, sometimes self-imposed — to maintain a large TAM narrative.

> "They're staring at three or four segments that all seem real. They've got customers in each one. And there's a voice in the room — sometimes the board, sometimes the founder — saying 'we can't shrink the story.' So they keep the ICP broad enough to cover all of it, and nothing downstream gets specific enough to actually work."

**Blocker 2: The non-decision has compounded — and the team has adapted to it.**

When the product seems useful to different industries, company sizes, or roles, teams struggle to pick one wedge without feeling like they're ignoring valid demand. Each function follows the signals they've received — and each one is rational on its own. But optimizing for too many audiences weakens all signals.

> "What I see by the time I get involved is that every function has adapted to the ambiguity. Sales has learned what closes — but it's different from what marketing targets. Product is building for a third audience. And the data can't tell you which niche is best, because you've been running signal across all of them. Each team is being rational — they're following the signals they have. But those signals got weaker over time because they were spread across too many audiences. Now nobody can see clearly enough to make the call."

**Why this works:** You've described two problems that an exec cannot solve by telling their team to "get more focused." The first requires someone with expertise to evaluate niche options and make a defensible recommendation. The second requires someone who can see the full GTM system, untangle the compounded effects, and facilitate a decision the whole team can execute against. You've created the space for your role without having said a word about yourself yet.

### Phase 3: The Side-by-Side — Show the Output Gap

**Purpose:** Make the quality difference tangible. The framing has shifted — you're not showing "good vs. bad," you're showing what unfocused foundations produce vs. what focused foundations produce. The audience already understands why the focused version doesn't exist in most orgs.
**Timing:** 5-7 minutes, screen share.
**Display state:** Landing → Annotation Cards (primary), with optional Full Output view.

**Transition into the screen:**

> "Let me show you what this actually looks like in practice. I'm going to show two versions of the same deliverable for [Company]. Same product, same market. The difference is entirely in the foundation underneath."

**For each annotation (walk through 2-3), follow this pattern:**

**Step 1 — Read the V1 passage.**

> "This is what you'd get today if you asked your team — or an AI tool — to write this using the information that's publicly available and the docs that currently exist internally."

**Step 2 — Read the V2 passage.** Don't explain why it's better yet. Let them feel the difference.

**Step 3 — Name what changed and why it required a decision.** This is the critical step. Connect the output quality back to the judgment call underneath it.

> "The reason this version can open with a specific trigger instead of a generic intro is because someone made a decision about which buyer segment to build around — and that decision shaped everything downstream: which problems to lead with, which proof points to use, how to frame the competitive alternative."

**The phrase to return to throughout:** ***"Someone had to make that call."*** Every annotation is evidence that V2 output quality traces back to a strategic decision that required expertise — not just better inputs to a tool.

**On the V1 framing — keep it empathetic, not dismissive:** V1 isn't bad work. It's the natural output of broad foundations. The team that produced it wasn't wrong — they were working with what they had. The point isn't that V1 is a failure. The point is that V1 is the ceiling when foundations are unfocused.

**Screen-to-narrative mapping:**

| Display Element | Narrative Role |
|----------------|---------------|
| Context header (top of output) | Orients the prospect: "Let's take a look at a cold outbound email" — sets expectations for what they're about to see |
| Section label | Names the specific part of the output: "Two different email openings" — keeps the viewer oriented within the document |
| V1 passage (clay bg) | "This is what you'd get today" — read it, let it land |
| V2 passage (yellow-tint bg) | Read it, pause, let the contrast register before narrating |
| Impact statement (below pair) | Scrolls into view after the prospect has processed the contrast — the simplified "why this matters" |
| Output transition (bottom) | Presenter chooses the next output or proceeds to Reveal |

### Phase 4: The Reveal — Reframe the Documents as the System

**Purpose:** Show the foundational documents, but frame them as evidence of collaborative strategic work — not as the deliverable itself.
**Timing:** 2-3 minutes.
**Display state:** Reveal page.

**Talk track territory:**

> "What's underneath V2 is a set of four foundation documents — ICP, problem-solution fit, positioning, and messaging. But I want to be clear about what these actually are, because they're not the typical version of these that live in your Google Drive."

Pick one pillar — ICP is usually most tangible — and briefly show the specificity contrast.

> "This ICP doesn't just say 'mid-market manufacturing companies.' It specifies the operational trigger, the budget cycle, the internal champion, and the competitive situation where this company wins. Every one of those specifics came from a decision about where to focus — and those decisions are what I facilitate with the leadership team."

**The operationalization nod:**

> "Once these foundations are locked in, they change how every tool and process in your GTM org works. The methodology I've built doesn't just produce a strategy document that gets referenced once and sits in a folder. It's operationalized — the same AI tools your team already uses produce fundamentally different output when they're building on a foundation this specific. That's not a one-time strategy project. It's a permanent upgrade to how your GTM system operates."

**What this communicates without saying it explicitly:** You've built the connective tissue between strategy and execution — the methodology directs both the team's thinking and the tools they use. The prospect doesn't need to know about Claude skills or prompt architecture. They need to know that this isn't a deliverable that goes stale.

**Screen-to-narrative mapping:**

| Display Element | Narrative Role |
|----------------|---------------|
| "Where We Started" / "What Changed" panels | Frame the two versions before showing docs — sets up the contrast |
| Foundation card badges (ICP, Problem-Solution, etc.) | Name each one as you scroll; pick 1-2 to expand |
| Doc toggle → expanded V1/V2 docs | Show the specificity gap in the source material; ICP is usually the strongest example |
| "What's Next" CTA callout | Visual anchor for the closing; don't read it — transition to verbal close |

### Phase 5: The Bridge to Engagement

**Purpose:** Describe the engagement shape — briefly, at the "good enough to say yes to the next conversation" level. Address the implementation concern.
**Timing:** 1-2 minutes, close screen share.
**Display state:** Reveal page visible (or screen share ended).

**Talk track territory:**

> "The way I work is embedded with your team, not external to it. I start with a discovery period — usually about two weeks — where I'm meeting with your GTM leaders individually to understand what's actually happening: where deals are stalling, what marketing is seeing, what product is prioritizing and why. From there I bring an initial recommendation on where to focus and a path to get there."

**Address the implementation fear directly:**

> "One thing I want to name — the concern I hear most often is 'we can't blow up our pipeline while we make this shift.' That's the right concern, and it's built into how this works. The methodology moves through progressive phases. The first phase is about elimination — defining what you're clearly NOT, which the team can act on immediately without disrupting what's working. You're making decisions and seeing value at every stage, not waiting ten weeks for a big reveal."

> "The full engagement runs about ten weeks and moves through each of the four foundations. Every decision gets made with the leadership team in the room — not handed over in a strategy doc — because the decisions only stick when the team made them together and understands why."

**Investor variant — add:**

> "I've built this to be repeatable across portfolio companies. If this pattern matches what you're seeing, it might make sense for me to look at a couple of your companies and show you what the gap looks like for them specifically."

### Key Principles for Delivery

| Principle | Detail |
|-----------|--------|
| **The documents are evidence, not the climax** | The narrative builds toward the realization that the gap between V1 and V2 is made of decisions the team hasn't been equipped to make — and that you're the person who facilitates those decisions. |
| **"Someone had to make that call" is the throughline** | Every annotation, every specificity contrast, every reveal moment should reinforce that V2 quality traces back to strategic judgment, not better tooling. |
| **V1 is empathetic, not dismissive** | V1 represents the natural output of broad foundations. The team isn't failing — they're hitting a ceiling. This framing earns trust; "your stuff is bad" loses the room. |
| **Sell the path, not the destination** | The prospect can see V2 is better. What they can't see is how to get there. The narrative's job is to make the path visible — and make clear that navigating it requires the expertise you bring. |
| **Stay conversational** | This is a 1:1 discussion, not a presentation. Pause after Phase 1 and Phase 2 to check for recognition. Let them react to the side-by-side before you narrate. Read the room more than the talk track. |

### Phase-to-Screen Mapping Summary

| Phase | Timing | Display State | Screen |
|-------|--------|--------------|--------|
| Phase 1: Mirror Their World | 1-2 min | Not visible / Landing as wallpaper | Landing |
| Phase 2: Name Why They Haven't Fixed It | 1-2 min | Not visible | Landing |
| Phase 3: The Side-by-Side | 5-7 min | Screen share begins | Landing → Annotation Cards (→ optional Full Output) |
| Phase 4: The Reveal | 2-3 min | Screen share | Reveal |
| Phase 5: Bridge to Engagement | 1-2 min | Reveal visible or screen share ended | Reveal |

---

## 3. User Role

| Attribute | Value |
|-----------|-------|
| **User** | Kaitlin Bell (sole presenter) |
| **Context** | Live screen-share with prospect, typically via video call |
| **Input method** | Mouse clicks, keyboard shortcuts for quick annotation navigation |
| **Device** | Desktop only (laptop presentation) |
| **Interaction model** | Presenter controls all navigation; audience observes |

---

## 4. Screen Inventory

| Screen | Purpose | View Key |
|--------|---------|----------|
| **Landing** | Visual anchor while setting up the conversation; frames the V1/V2 concept; company selection | `landing` |
| **Annotation Cards** (primary) | Scroll-driven passage-by-passage V1/V2 comparison; each section snaps into view, showing the contrast first, then a simplified impact statement | `breakdown` |
| **Full Output** (secondary) | Complete V1/V2 documents side-by-side for credibility; shown at least once per demo | `full` |
| **Reveal** | Connects foundation doc quality to business impact; shows V1/V2 foundation docs under toggles; closes with CTA | `reveal` |

---

## 5. Flows

### Flow 1: Demo Setup → Annotation Walkthrough

**Trigger:** Presenter opens the display in browser before or during the call
**Typical path:**

1. **Landing** — Visible as wallpaper. Presenter selects the prospect's company from the dropdown. Clicks "See the difference →" when ready to begin the comparison.
2. **Annotation Cards** — First output loads automatically. The view opens with an auto-derived context header ("Let's take a look at a cold outbound email"). Presenter scrolls down through snap sections: each annotation shows its section label, then the passage pair, then an impact statement.
3. At the bottom of the scroll sequence, a transition prompt allows the presenter to select the next output or proceed to the Reveal.
4. *(Optional)* Presenter switches to a different output via the output chips in the header sub-bar. Scroll resets to the top of the new output.

**Success state:** Prospect has seen 3-6 annotated passage pairs, experienced the V1/V2 contrast directly before seeing commentary, and understands the quality gap through simplified impact statements.

### Flow 2: Full Output View (Secondary)

**Trigger:** Presenter clicks "Full Output" in the view toggle, or arrives here when an output has no annotations
**Typical path:**

1. **Full Output** — Two columns appear: "Original" (V1, left) and "With GTM methodology" (V2, right). Both columns show the complete rendered markdown document.
2. Presenter scrolls through, pointing out specific passages. Used at least once per demo for credibility — "here's the full document, not cherry-picked."
3. Presenter can toggle back to "Breakdown" (annotation cards) at any time via the view toggle.

**Success state:** Prospect sees a complete document and understands the output gap isn't curated — it's systemic.

### Flow 3: Reveal

**Trigger:** Presenter clicks "View the foundation docs →" from the last annotation card, or clicks "Foundation docs →" in the header
**Typical path:**

1. **Reveal** — Opens with "The Foundational Difference" header. Shows the "Where We Started" / "What Changed" stacked comparison framing the V1/V2 distinction.
2. Below the framing, four foundation cards (ICP, Problem-Solution, Positioning, Messaging) each with a one-line context statement and an expandable toggle to view full V1/V2 foundation docs side-by-side.
3. Presenter selectively expands 1-2 foundation cards to show the actual doc quality difference.
4. "What's Next" CTA callout at the bottom provides the closing narrative.
5. "← Back to examples" returns to the annotation view for the previously selected output.

**Success state:** Prospect understands that the output quality difference traces back to upstream strategic decisions, not downstream execution — and sees a clear next step.

### Flow 4: Mid-Demo Company Switch

**Trigger:** Presenter wants to show pattern recognition across multiple companies
**Typical path:**

1. From any non-landing screen, presenter uses the company dropdown in the header sub-bar to select a different company.
2. Output list refreshes. First output for the new company auto-selects. Annotation cards reload at card 1.
3. Presenter walks through select examples from the new company, then may return to the original company or proceed to Reveal.

**Navigation note:** The Reveal page has its own company selector for foundation docs, independent of the comparison hub's company selection. This allows showing, e.g., Sortly's outputs in comparison but a different company's foundation docs on the Reveal page.

### Flow 5: SSE Live Push (Legacy)

**Trigger:** The `gtm-demo` skill writes new V1/V2/annotations files to the `output/` directory
**Typical path:**

1. Server detects file change via `fs.watch`, sends SSE event to connected clients.
2. Client receives event, fetches `/api/meta`, `/api/v1`, `/api/v2`, `/api/annotations` from the legacy push-based endpoints.
3. If annotations are present, switches to annotation card view. Otherwise, shows full output columns.
4. Company list refreshes.

**Note:** This flow is separate from the browse-based flow. It's used when generating outputs live during a demo. The push-based and browse-based flows share the same rendering logic but use different data sources (local `output/` directory vs. `company-gtm-docs/` directory).

---

## 6. Screen Specifications

### 6.1 Landing Page

**Purpose:** Visual anchor while the presenter sets up the conversation; frames the V1/V2 comparison concept; selects the company for the demo.

**Entry points:**
- Direct URL load (`/`)
- Clicking the wordmark from any screen
- Pressing Escape from any screen

**Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  GTM Foundations                                        │  ← header (wordmark only, no sub-bar)
├─────────────────────────────────────────────────────────┤
│                                                         │
│          Keeping your options open is the most           │  ← H1, Fraunces 34px/700, centered
│       expensive GTM decision you're making.              │
│                                                         │
│              What you focus on matters.                  │  ← Subhead, DM Sans 17px, centered
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  ORIGINAL        │  │  WITH GTM         │            │  ← Split panels, side-by-side
│  │                  │  │  METHODOLOGY      │            │
│  │  Starting from   │  │  Same starting    │            │
│  │  what's publicly │  │  point — with     │            │
│  │  available...    │  │  strategic...     │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│               Company: [Sortly ▼]                       │  ← Company selector dropdown
│                                                         │
│             [ See the difference → ]                    │  ← Primary CTA button
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Data displayed:**
- Company dropdown populated from `GET /api/companies` (companies with demo outputs)
- Auto-selects first company in sorted list if none previously selected

**Interactive elements:**

| Element | Behavior |
|---------|----------|
| Company dropdown | Selects company for the demo. DM Sans 13px/500. |
| "See the difference →" CTA | Loads outputs for selected company, auto-selects first output, transitions to Annotation Cards view. Signal Yellow background, Space Indigo text. |
| Wordmark (header) | No-op on landing (already here). |

**States:**
- **Loading:** Company dropdown shows no options until `GET /api/companies` resolves
- **Empty:** If no companies have demo outputs, dropdown is empty, CTA is inert
- **Default:** First company pre-selected, ready to start

**Voice/tone notes for copy:**
- Headline uses the "Empathetic Challenger" opening pattern — names a pattern the prospect recognizes ("keeping your options open") and reframes it as the problem
- Panel labels use "Original" / "With GTM Methodology" — not "V1/V2," "Before/After," or "Bad/Good"
- Subhead is one sentence, direct, no hedging

**Visual identity notes:**
- Landing is vertically centered within the viewport (min-height: calc(100vh - 60px))
- Split panels use the atmospheric distinction system: V1 panel = Warm Clay bg + muted text; V2 panel = Yellow Tint bg + primary text
- Max width: 820px

---

### 6.2 Annotation Cards (Primary Comparison View)

**Purpose:** Scroll-driven passage-by-passage walkthrough of V1/V2 differences. Each section shows the contrast first — letting the prospect feel the difference — then reveals a simplified impact statement. The scroll-snap model keeps each component visible as part of the same output without overloading the viewer with text.

**Entry points:**
- CTA from Landing page
- "Breakdown" button in the view toggle (from Full Output view)
- "← Back to examples" from Reveal page

**Layout (scroll-snap sequence for a single output):**

```
┌─────────────────────────────────────────────────────────────────┐
│  GTM Foundations    [Cold Outbound] [Competitive Brief] [...]   │  ← header
│─────────────────────────────────────────────────────────────────│
│  [Company ▼]                              [Breakdown|Full]  [→] │  ← sub-bar
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ═══════════════ SNAP SECTION 1: Context Header ═══════════════ │
│                                                                 │
│              Let's take a look at a                             │  ← Context header
│              cold outbound email.                               │     Fraunces 28px/700
│                                                                 │
│  SORTLY                                                         │  ← Company name overline
│                                                                 │
│  ORIGINAL                      WITH GTM METHODOLOGY             │  ← Column headers
│                                                                 │
│  ═══════ SNAP SECTION 2: Section label + Passage pair ═════════ │
│                                                                 │
│  Two different email openings                                   │  ← Section label
│                                                                 │     DM Sans 17px/500
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ V1 passage excerpt  │  │ V2 passage excerpt   │             │  ← Passage pair
│  │ (clay bg, muted     │  │ (yellow-tint bg,     │             │
│  │  left border)       │  │  yellow left border) │             │
│  └─────────────────────┘  └─────────────────────┘              │
│                                                                 │
│  ═══════════ SNAP SECTION 3: Impact statement ═════════════════ │
│                                                                 │
│  Competitive briefs that lead with feature comparisons invite   │  ← Impact statement
│  side-by-side shopping against every named vendor...            │     Fraunces 19px/500
│                                                                 │
│  ═══════ SNAP SECTION 4: Section label + Passage pair ═════════ │
│                                                                 │
│  The competitive framing                                        │  ← Section label
│                                                                 │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ V1 passage          │  │ V2 passage           │             │
│  └─────────────────────┘  └─────────────────────┘              │
│                                                                 │
│  ═══════════ SNAP SECTION 5: Impact statement ═════════════════ │
│                                                                 │
│  {...impact statement...}                                       │
│                                                                 │
│  ═══════ (repeat for remaining annotations) ═══════════════════ │
│                                                                 │
│  ═══════════ SNAP SECTION N: Output transition ════════════════ │
│                                                                 │
│              [ View another output ▼ ]                          │  ← Output selector
│              [ View the foundation docs → ]                     │  ← Reveal CTA
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Scroll-snap behavior:**
- The annotation container uses `scroll-snap-type: y mandatory` with each section as a snap point (`scroll-snap-align: start`)
- Sections are sized to fill the viewport below the sticky header, using `min-height: calc(100vh - header height)`
- Content within each section is vertically centered
- Scrolling between sections feels deliberate — each piece locks into view before the next becomes visible

**Snap section sequence per output:**

| Order | Section Type | Content |
|-------|-------------|---------|
| 1 | Context header | Auto-derived intro + company overline + column headers |
| 2 | Passage pair | Section label + V1/V2 passages (annotation 1) |
| 3 | Impact statement | Impact text for annotation 1 |
| 4 | Passage pair | Section label + V1/V2 passages (annotation 2) |
| 5 | Impact statement | Impact text for annotation 2 |
| ... | ... | Alternating passage pair / impact for remaining annotations |
| N | Output transition | Output selector + Reveal CTA |

**Data displayed:**

| Field | Source | Typography |
|-------|--------|------------|
| Context header | Auto-derived from output name via `shortOutputName()`: "Let's take a look at a {output name}" | Fraunces 28px/700, Space Indigo |
| Company name | Current selected output's company | DM Sans 10px/600 uppercase, Muted text |
| Column headers | Static: "ORIGINAL" / "WITH GTM METHODOLOGY" | DM Sans 10px/600 uppercase |
| Section label | `annotations.md` → `**Section:**` field | DM Sans 17px/500, Secondary text |
| V1 passage | `annotations.md` → `> [!v1-passage]` blockquote | DM Sans 15px/400 italic, rendered markdown |
| V2 passage | `annotations.md` → `> [!v2-passage]` blockquote | DM Sans 15px/400 italic, rendered markdown |
| Impact statement | `annotations.md` → `**Impact:**` field | Fraunces 19px/500, Space Indigo, centered |

**Interactive elements:**

| Element | Behavior |
|---------|----------|
| Output chips (header) | Switch between outputs for the current company. Active chip: Space Indigo bg, white text. Inactive: white bg, clay border, pill shape. Switching resets scroll to top. |
| Company dropdown (sub-bar) | Switch company mid-demo. Reloads output list, auto-selects first output, resets scroll to top. |
| View toggle: Breakdown / Full | Switches between annotation scroll view and full output columns. Active button: Indigo bg, Yellow text. |
| "Foundation docs →" (header) | Opens Reveal page. Only visible during breakdown/full views. Yellow Tint bg, Yellow border. |
| Output transition: output selector | Allows presenter to pick the next output to show. Renders as a compact list or dropdown of remaining outputs for this company. |
| Output transition: "View the foundation docs →" | Transitions to Reveal. Subdued style (secondary text, clay border). |
| Escape | Returns to Landing page. |

**States:**
- **Loading:** Brief opacity fade (120ms) on content during output switch
- **No annotations:** If an output has no `annotations.md` or it doesn't parse, falls through to Full Output view; view toggle is hidden
- **Single annotation:** Sequence is: context header → passage pair → impact → output transition (three snap sections total)

**Animation:**
- Snap sections use CSS `scroll-snap-type: y mandatory` for native scroll-snap behavior
- Content within each section fades in as it snaps into view (opacity 0→1, 0.2s ease) via `IntersectionObserver` or scroll-snap events
- Output switch triggers a brief opacity fade (120ms) before scroll resets to top

**Annotation parsing rules:**
- Annotations are separated by `---` in the markdown
- Each annotation block must contain `> [!v1-passage]` and `**Impact:**` fields to be included
- `**Section:**` field is required — it provides the label displayed above each passage pair
- `**V1:**`, `**V2:**`, `**Decision:**`, and `**Challenge:**` fields may still exist in the annotation file but are not rendered in the display
- The `# Reveal` section is split off and not rendered in annotation cards

**Context header derivation rules:**
- The output name is derived via `shortOutputName()` (same logic as output chips)
- The context header prepends "Let's take a look at" and uses the appropriate article ("a" / "an") based on the output name
- Examples: "Let's take a look at a cold outbound email" · "Let's take a look at a competitive brief" · "Let's take a look at an email sequence"

**Visual identity notes:**
- Passage pair uses atmospheric distinction: V1 = Warm Clay bg, 3px Muted left border; V2 = Yellow Tint bg, 3px Signal Yellow left border
- Impact statement is centered, set in Fraunces (the authority font), with generous vertical padding — it reads as a reveal moment after the raw contrast
- Snap sections use generous whitespace; content is vertically centered within each viewport-height section to keep focus tight
- Max width: 960px (annotation scroll container)

---

### 6.3 Full Output View (Secondary Comparison View)

**Purpose:** Shows complete V1/V2 documents side-by-side. Used at least once per demo for credibility — demonstrates the output gap is systemic, not curated. Secondary to annotation cards.

**Entry points:**
- "Full Output" button in view toggle (from Annotation Cards)
- Auto-selected when an output has no parseable annotations

**Layout:**

```
┌─────────────────────────────────────────────────────────────────┐
│  GTM Foundations    [Cold Outbound] [Competitive Brief] [...]   │
│─────────────────────────────────────────────────────────────────│
│  [Company ▼]                              [Breakdown|Full]  [→] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐    │
│  │  ORIGINAL                │  │  WITH GTM METHODOLOGY    │    │
│  ├──────────────────────────┤  ├──────────────────────────┤    │
│  │                          │  │                          │    │
│  │  Full V1 document        │  │  Full V2 document        │    │
│  │  rendered as markdown    │  │  rendered as markdown     │    │
│  │                          │  │                          │    │
│  │  (ivory bg, secondary    │  │  (white bg, primary      │    │
│  │   text color)            │  │   text color)            │    │
│  │                          │  │                          │    │
│  └──────────────────────────┘  └──────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Data displayed:**
- V1 column: Full markdown document from `GET /api/companies/:company/outputs/:slug/v1`
- V2 column: Full markdown document from `GET /api/companies/:company/outputs/:slug/v2`

**Interactive elements:**
- Same header/sub-bar controls as Annotation Cards (output chips, company dropdown, view toggle, reveal button)
- Columns scroll independently

**Visual identity notes:**
- Column labels: V1 = Warm Clay bg, Muted text; V2 = Space Indigo bg, Lilac text
- Column bodies: V1 = Ivory bg, Secondary text; V2 = White bg, Primary text
- Atmospheric distinction is the same principle as annotation cards — V2 feels slightly crisper and more present
- Grid: `1fr 1fr`, 16px gap
- Markdown typography: Fraunces for h1-h3, DM Sans for body, standard spacing

**States:**
- **Empty:** "Select an output to view" placeholder (italic, muted)
- **Loading:** Opacity fade transition on content switch (120ms)

---

### 6.4 Reveal Page

**Purpose:** Connects the output quality gap to the upstream foundation doc quality. Shows what changed in each of the four foundations and lets the presenter expand to show full V1/V2 foundation docs. Closes with a CTA narrative.

**Entry points:**
- "View the foundation docs →" on the last annotation card
- "Foundation docs →" button in the header (visible during breakdown/full views)

**Layout:**

```
┌─────────────────────────────────────────────────────────────────┐
│  GTM Foundations                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              The Foundational Difference                        │  ← H1, Fraunces 30px/700
│  The ask was identical. The strategic engine underneath         │  ← Subtitle
│  produced two very different results.                           │
│                                                                 │
│  ┌──────────────────────────────────────────────────┐          │
│  │  WHERE WE STARTED                                │          │  ← V1 framing panel
│  │  Pulled directly from the company's website...   │          │     Clay bg
│  └──────────────────────────────────────────────────┘          │
│  ┌──────────────────────────────────────────────────┐          │
│  │  WHAT CHANGED                                     │          │  ← V2 framing panel
│  │  ▸ An informed decision on where to focus...      │          │     Yellow Tint bg
│  │  ▸ Reasoning and context built around that...     │          │
│  │  ▸ Each foundation aligned to reinforce...        │          │
│  │  ▸ Operationalized so the information gets used.. │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│       See what each version was built on.                      │  ← Docs headline
│       Viewing docs for: [Sortly ▼]                             │  ← Company selector
│                                                                 │
│  ┌──────────────────────────────────────────────────┐          │
│  │  ICP                                              │          │  ← Foundation card
│  │  The focused version committed to a specific...   │          │
│  │  [ View the full ICP docs  ▾ ]                    │          │  ← Expand toggle
│  │  ┌──────────────────┐  ┌──────────────────┐      │          │  ← Expanded: V1/V2 docs
│  │  │  ORIGINAL        │  │  WITH GTM...     │      │          │
│  │  │  (doc content)   │  │  (doc content)   │      │          │
│  │  └──────────────────┘  └──────────────────┘      │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│  ┌─── Problem-Solution card ──────────────────────────┐        │
│  ┌─── Positioning card ───────────────────────────────┐        │
│  ┌─── Messaging card ─────────────────────────────────┐        │
│                                                                 │
│  ┌──────────────────────────────────────────────────┐          │
│  │               What's Next                         │          │  ← CTA callout
│  │  Your team knows they need more focus...          │          │     Gradient Indigo bg
│  │                                                   │          │     Lilac headline
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│             [ ← Back to examples ]                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Data displayed:**

| Element | Source | Notes |
|---------|--------|-------|
| Foundation card context text | Hardcoded per foundation in `FOUNDATION_AREAS` constant | Describes what the focused version did differently |
| Foundation V1 doc | `GET /api/companies/:company/docs/v1/:docType` | Rendered markdown, max-height 500px with scroll |
| Foundation V2 doc | `GET /api/companies/:company/docs/v2/:docType` | Rendered markdown, max-height 500px with scroll |
| Company list for docs | `GET /api/companies-with-docs` | Companies with both v1/ and v2/ directories |

**Four foundation cards (in order):**

| Foundation | Doc Type Key | Display Name | Context |
|-----------|-------------|--------------|---------|
| ICP | `icp` | ICP | "The focused version committed to a specific buyer, trigger, and competitive situation — every downstream output reflects that decision." |
| Problem-Solution | `psf` | Problem-Solution | "The focused version went deep on how pain compounds in one buyer's world instead of covering symptoms across all of them." |
| Positioning | `positioning` | Positioning | "The focused version anchors in a point of view on why the status quo fails — not a feature list." |
| Messaging | `messaging` | Messaging | "The focused version gives the team and their tools language specific enough to execute on." |

**Interactive elements:**

| Element | Behavior |
|---------|----------|
| Company dropdown (Reveal-specific) | Changes which company's foundation docs are shown. Independent of the comparison hub's company selection. Triggers full Reveal re-render. |
| Foundation doc toggle buttons | Expand/collapse the V1/V2 doc pair for each foundation. Chevron rotates on expand. Docs are lazy-loaded on first expand. |
| "← Back to examples" | Returns to the previously active comparison view (annotation cards if available, full output otherwise). |

**States:**
- **Loading:** "Loading foundations..." placeholder while fetching company list
- **No docs available:** "No foundation docs available yet" with back button
- **Doc loading:** "Loading..." placeholder inside expanded doc panels until fetch completes
- **Doc unavailable:** "Not available" if a specific foundation doc doesn't exist for the company
- **Fetch error:** "Failed to load" in doc panels; "Could not load foundation docs" for full page errors

**Visual identity notes:**
- Foundation card labels use Violet Mist bg, Deep Violet text, pill-shaped badge — signals the purple family (empathy/distinction)
- "What's Next" callout: gradient Space Indigo → #2E3A5C background, Lilac headline (Fraunces 21px/600), white body text (Fraunces 18px/400) — the most distinctive visual moment, earns its place at the end
- Doc comparison pairs use the same column treatment as Full Output view (V1 = Clay/Muted, V2 = Indigo/Lilac headers)
- Max width: 860px

**Voice/tone notes for copy:**
- "The Foundational Difference" — uses "foundational" once as a branded term, per the style guide's guidance to avoid repeating "foundations"
- "The strategic engine underneath" — uses a sanctioned variation per the language substitutions guide
- "What's Next" heading — not "What I Do" or "How I Help." Frames the next step, not the service.
- CTA text describes the outcome of working together, not the process — per the tone rule to describe what the methodology builds, not "I fix it"

---

## 7. Persistent Header

The header is present on all screens and adapts its contents based on the current view.

**Structure:**

```
┌─────────────────────────────────────────────────────────────────┐
│  [GTM Foundations]  [output chips...]         [Foundation docs →]│  ← header-top
│─────────────────────────────────────────────────────────────────│
│  [Company ▼]                          [Breakdown | Full Output] │  ← sub-bar
└─────────────────────────────────────────────────────────────────┘
```

**State by view:**

| View | Wordmark | Output Chips | Company Dropdown | View Toggle | Reveal Button | Sub-bar |
|------|----------|-------------|-----------------|-------------|---------------|---------|
| Landing | Visible | Hidden | Hidden | Hidden | Hidden | Hidden |
| Breakdown | Visible | Visible | Visible | Visible | Visible | Visible |
| Full | Visible | Visible | Visible | Visible | Visible | Visible |
| Reveal | Visible | Hidden | Hidden | Hidden | Hidden | Hidden |

**Wordmark behavior:** Clicking the wordmark from any screen returns to Landing and clears the selected output.

**Wordmark spec:**
- "GTM" — Fraunces 20px/700, Space Indigo
- "Foundations" — DM Sans 20px/400, Secondary text
- 6px gap between words
- On dark backgrounds (if extended): "GTM" in Signal Yellow, "Foundations" in Lilac

**Header styling:**
- Position: sticky, top: 0, z-index: 100
- Background: white with 1px clay bottom border
- Sub-bar: Ivory background with 1px clay top border

---

## 8. Component Specifications

### 8.1 Output Chips

Horizontal row of buttons for switching between outputs within a company. Each chip shows a shortened output name derived from the prompt.

| Property | Value |
|----------|-------|
| Font | DM Sans 12px/500 |
| Padding | 5px 14px |
| Border radius | 100px (pill shape — exception to the "no fully rounded" rule; these are small enough) |
| Active state | Space Indigo bg, white text, Indigo border, weight 600 |
| Inactive state | White bg, clay border, secondary text |
| Hover (inactive) | Clay bg, clay-hover border |
| Overflow | Horizontal scroll, hidden scrollbar |

**Name derivation rules** (via `shortOutputName()`):
- "cold outbound email" / "cold email" → "Cold Outbound Email"
- "one-pager" / "one pager" → "One-Pager"
- "competitive brief" → "Competitive Brief"
- "landing page" → "Landing Page"
- "blog post" → "Blog Post"
- "discovery call" → "Discovery Call Script"
- "talk track" → "Talk Track"
- "follow-up" / "follow up" → "Follow-Up Email"
- "call prep" → "Call Prep Brief"
- "sequence" → "Email Sequence"
- Fallback: truncate at 37 chars + "..."

### 8.2 Passage Pair (Annotation Card)

Side-by-side comparison of specific text passages from V1 and V2 outputs.

**V1 Passage:**

| Property | Value |
|----------|-------|
| Background | Warm Clay (#F0EDE8) |
| Border-left | 3px solid Muted (#555962) |
| Border radius | 3px |
| Padding | 14px 16px |
| Font | DM Sans 15px/400, italic, line-height 1.65 |
| Text color | Secondary (#4A5568) |

**V2 Passage:**

| Property | Value |
|----------|-------|
| Background | Yellow Tint (#FDF8E6) |
| Border-left | 3px solid Signal Yellow (#F5C518) |
| Border radius | 3px |
| Padding | 14px 16px |
| Font | DM Sans 15px/400, italic, line-height 1.65 |
| Text color | Primary (#202A46) |

### 8.3 Impact Statement

Centered text block that appears as its own snap section after each passage pair. Replaces the former decision trace, challenge pills, and V1/V2 callouts with a single, simplified statement.

| Property | Value |
|----------|-------|
| Font | Fraunces 19px/500, line-height 1.55 |
| Color | Space Indigo (#202A46) |
| Text align | Center |
| Max width | 680px, centered within snap section |
| Padding | var(--space-xl) var(--space-lg) |
| Vertical position | Centered within viewport-height snap section |

### 8.4 Section Label

Descriptive text above each passage pair, naming what part of the output is being compared.

| Property | Value |
|----------|-------|
| Font | DM Sans 17px/500 |
| Color | Secondary (#4A5568) |
| Margin bottom | var(--space-md) |

### 8.5 Context Header

Auto-derived intro section for each output. First snap point in the sequence.

| Property | Value |
|----------|-------|
| Headline font | Fraunces 28px/700, line-height 1.2 |
| Headline color | Space Indigo (#202A46) |
| Company overline | DM Sans 10px/600, uppercase, 1.5px letter-spacing, Muted text |
| Column headers | DM Sans 10px/600, uppercase, 1.5px letter-spacing |
| Text align | Center (headline), left (column headers) |
| Vertical position | Centered within viewport-height snap section |

### 8.6 Navigation Buttons

Used for output transition section and "Back to examples" on Reveal.

**Standard nav button:**

| Property | Value |
|----------|-------|
| Font | DM Sans 14px/500 |
| Background | White |
| Border | 1px solid Warm Clay |
| Border radius | 6px |
| Padding | 8px 16px |
| Hover | Warm Clay bg |

**CTA Reveal variant** (output transition section's "View the foundation docs →"):

| Property | Value |
|----------|-------|
| Background | none |
| Color | Secondary text |
| Border | 1px solid Warm Clay |
| Hover | Warm Clay bg, primary text |

**Header Reveal button** ("Foundation docs →"):

| Property | Value |
|----------|-------|
| Background | Yellow Tint (#FDF8E6) |
| Border | 1px solid Signal Yellow |
| Color | Space Indigo |
| Font | DM Sans 13px/600 |
| Padding | 7px 14px |
| Hover | Signal Yellow bg |
| Arrow | → character, translateX(2px) on hover |

### 8.7 Foundation Doc Toggle

Expandable section within each Reveal foundation card.

| Property | Value |
|----------|-------|
| Button font | DM Sans 13px/600, Space Indigo |
| Button border | 1px solid Warm Clay |
| Button border radius | 6px |
| Button width | 100%, centered text |
| Chevron | ▾ character, rotates 180° on expand |
| Expanded content | V1/V2 doc pair in 1fr 1fr grid, 16px gap |
| Doc max-height | 500px with overflow-y: auto |
| Animation | max-height transition, 0.25s ease |
| Lazy loading | Docs are fetched on first expand only |

### 8.8 "What's Next" CTA Callout

Closing narrative block on the Reveal page.

| Property | Value |
|----------|-------|
| Background | linear-gradient(135deg, #202A46 0%, #2E3A5C 100%) |
| Border | 1px solid rgba(217, 208, 255, 0.08) |
| Border radius | 8px |
| Padding | 64px 40px 40px |
| Text align | Center |
| Headline | "What's Next" — Fraunces 21px/600, Lilac, -0.01em tracking |
| Body | Fraunces 18px/400, line-height 1.7, rgba(255,255,255,0.92) |
| Body max-width | 620px, centered |

---

## 9. Data Architecture

### 9.1 Directory Structure

```
GTM Foundations Showcase/
├── demo-display/
│   ├── index.html          ← SPA (all screens)
│   ├── server.js           ← Node.js HTTP server + SSE
│   └── output/             ← Legacy push-based output directory
│       ├── meta.json       ← {"company", "prompt", "skill", "challenges"}
│       ├── v1.md           ← V1 output (generated by gtm-demo skill)
│       ├── v2.md           ← V2 output
│       └── annotations.md  ← Annotations + reveal text
│
└── company-gtm-docs/
    └── {company-slug}/
        ├── v1/             ← V1 foundation docs
        │   ├── icp.md
        │   ├── psf.md
        │   ├── positioning.md
        │   └── messaging.md
        ├── v2/             ← V2 foundation docs
        │   ├── icp.md
        │   ├── psf.md
        │   ├── positioning.md
        │   └── messaging.md
        └── demo-output/
            └── {output-slug}/
                ├── v1.md
                ├── v2.md
                ├── annotations.md
                └── meta.json
```

### 9.2 Annotation File Format

```markdown
# Annotations: {prompt text}

---

**Section:** {descriptive label for this part of the output, e.g. "Two different email openings"}

> [!v1-passage]
> {quoted V1 text}

> [!v2-passage]
> {quoted V2 text}

**Impact:** {simplified impact statement — displayed after the passage pair}

**Challenge:** {comma-separated challenge names — retained in file, not displayed}

**V1:** {annotation explaining V1 approach — retained in file, not displayed}

**V2:** {annotation explaining V2 approach — retained in file, not displayed}

**Decision:** {optional — retained in file, not displayed}

---

{...more annotation blocks...}

# Reveal

## {Challenge Name}

**ICP:** {reveal text for ICP foundation}

**Problem-solution:** {reveal text for problem-solution foundation}

**Positioning:** {reveal text for positioning foundation}

**Messaging:** {reveal text for messaging foundation}

## {Another Challenge Name}
{...}
```

**Display field summary:** Only `**Section:**`, `> [!v1-passage]`, `> [!v2-passage]`, and `**Impact:**` are rendered in the UI. All other fields are retained in the file for data integrity and potential future use but are not shown to the audience.

### 9.3 Meta.json Format

```json
{
  "company": "sortly",
  "prompt": "Write a competitive brief for a mid-market ICP buyer who is evaluating different tools",
  "skill": "sales-comms",
  "challenges": ["Engagement & Conversion", "Account Value"]
}
```

---

## 10. API Reference

All APIs are served by `server.js` on the configured port (default 3000).

### Browse APIs

| Endpoint | Method | Response | Notes |
|----------|--------|----------|-------|
| `/api/companies` | GET | `string[]` | Company slugs that have at least one valid demo output (v1.md + v2.md). Sorted alphabetically. |
| `/api/challenges` | GET | `{challenge, outputs[]}[]` | All outputs grouped by canonical challenge order. Each output: `{company, slug, prompt}`. Includes "Uncategorized" group for outputs without challenges. |
| `/api/companies-with-docs` | GET | `string[]` | Company slugs that have both v1/ and v2/ foundation doc directories. |
| `/api/companies/:company/outputs` | GET | `{slug, prompt, challenges[]}[]` | All valid demo outputs for a company. Sorted by prompt. |
| `/api/companies/:company/outputs/:slug/v1` | GET | `text/plain` | Raw V1 markdown for a specific output. |
| `/api/companies/:company/outputs/:slug/v2` | GET | `text/plain` | Raw V2 markdown for a specific output. |
| `/api/companies/:company/outputs/:slug/annotations` | GET | `text/plain` | Raw annotations markdown for a specific output. |
| `/api/reveal/:challenge` | GET | `{challenge, foundations[], companies[]}` | Aggregated reveal data for a challenge. Foundations: `{area, text}` ordered by ICP → Problem-solution → Positioning → Messaging. Companies: those with foundation doc sets. |
| `/api/companies/:company/docs/v1\|v2/:docType` | GET | `text/plain` | Raw foundation doc markdown. docType: `icp`, `psf`, `positioning`, `messaging`. |

### Legacy Push APIs

| Endpoint | Method | Response | Notes |
|----------|--------|----------|-------|
| `/api/meta` | GET | `application/json` | Meta.json from the `output/` directory. |
| `/api/v1` | GET | `text/plain` | V1 markdown from `output/` directory. |
| `/api/v2` | GET | `text/plain` | V2 markdown from `output/` directory. |
| `/api/annotations` | GET | `text/plain` | Annotations markdown from `output/` directory. |
| `/events` | GET | `text/event-stream` | SSE endpoint. Sends `data: update\n\n` when files in `output/` change (debounced 300ms). |

### Path Security

All file-serving endpoints use `safePath()` to resolve paths and verify they stay within the expected base directory, preventing path traversal.

---

## 11. Keyboard Shortcuts

| Key | Context | Action |
|-----|---------|--------|
| Escape | Any view | Return to Landing page, clear selected output |

All keyboard shortcuts are disabled when focus is in a SELECT or INPUT element. Annotation navigation is handled by native scroll (scroll-snap); no arrow key overrides.

---

## 12. Transitions & Animation

| Trigger | Animation | Duration |
|---------|-----------|----------|
| Snap section enters viewport | `fadeIn` — opacity 0→1 via IntersectionObserver | 0.2s ease |
| Scroll-snap settling | Native CSS `scroll-snap-type: y mandatory` | Browser-native |
| Reveal page elements | `fadeIn` — opacity 0→1, translateY 8px→0 | 0.25s ease |
| Output content switch | Opacity fade out (add `.fading` class), wait 120ms, swap content, scroll to top, remove `.fading` | 120ms + render |
| Foundation doc expand | max-height transition | 0.25s ease |
| Header reveal button arrow | translateX(2px) on hover | 0.15s ease |
| All interactive hover states | background/color transition | 0.15s ease |

---

## 13. Accessibility

**Color contrast (all AAA or AA compliant):**

| Combination | Ratio | Grade |
|-------------|-------|-------|
| Space Indigo on Ivory | 11.5:1 | AAA |
| Space Indigo on White | 13.2:1 | AAA |
| Signal Yellow on Indigo | 7.8:1 | AAA |
| Lilac on Indigo | 8.4:1 | AAA |
| Secondary on Ivory | 7.5:1 | AAA |
| Muted on White | 5.8:1 | AA |
| Deep Violet on Ivory | 6.5:1 | AA |
| Light text on Indigo | 4.6:1 | AA |

**Focus states:** All interactive elements use `outline: 2px solid Signal Yellow (#F5C518); outline-offset: 2px`.

**No pure black (#000000)** — Space Indigo replaces black throughout.

**Yellow as text:** Signal Yellow (#F5C518) is never used as text on light backgrounds. Dark Yellow (#C09B0A) variant is used instead for accessibility.

---

## 14. Typography Quick Reference

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| H1 (screen title) | Fraunces | 42px (mobile 32px) | 700 | 1.15 | Indigo / Lilac on dark |
| H2 (section header) | Fraunces | 32px (mobile 26px) | 700 | 1.2 | Indigo / Lilac on dark |
| H3 (sub-section) | Fraunces | 22px (mobile 20px) | 600 | 1.3 | Indigo |
| Subhead | DM Sans | 17px | 500 | 1.5 | Secondary |
| Body | DM Sans | 15px | 400 | 1.75 | Indigo |
| Callout body | DM Sans | 14px | 400 | 1.65 | Secondary |
| UI label | DM Sans | 13px | 500-600 | 1.0 | Indigo |
| Caption/meta | DM Sans | 12px | 500 | 1.4 | Muted |
| Overline | DM Sans | 10-11px | 600, uppercase, 1.5px spacing | 1.0 | Yellow or Muted |
| Prompt block | JetBrains Mono | 14px | 400 | 1.7 | Lilac on Indigo bg |

**Fraunces letter spacing:** -0.01em throughout.

---

## 15. CSS Custom Properties Reference

```css
:root {
  /* Primary */
  --color-indigo: #202A46;
  --color-yellow: #F5C518;
  --color-yellow-hover: #D4B016;
  --color-lilac: #D9D0FF;

  /* Secondary */
  --color-violet-muted: #8B7EB8;
  --color-violet-deep: #5C5280;
  --color-yellow-dark: #C09B0A;

  /* Neutrals */
  --color-ivory: #FAF8F3;
  --color-clay: #F0EDE8;
  --color-clay-hover: #E5E2DC;
  --color-white: #FFFFFF;
  --color-yellow-tint: #FDF8E6;
  --color-violet-mist: #EDEAF5;

  /* Text */
  --text-primary: #202A46;
  --text-secondary: #4A5568;
  --text-muted: #555962;
  --text-on-dark: #8B9BB5;
  --text-on-dark-bright: #D9D0FF;

  /* Typography */
  --font-headline: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Spacing (8px grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 8px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.25s ease;
}
```

---

## 16. Open Items

**OPEN: Mobile support.** The implementation includes responsive CSS for `<768px` (stacked layouts, tab toggles for panels), but this is desktop-only for the time being. Mobile breakpoints are defined but not a priority.

**OPEN: Cross-company pattern.** The demo supports switching companies mid-demo, but there's no UI that shows the same annotation pattern across multiple companies for a single challenge. The presenter must switch companies and navigate manually.

**OPEN: Live generation flow.** The SSE push-based flow (from the `gtm-demo` skill writing to `output/`) and the browse-based flow coexist but don't integrate cleanly. When an SSE push arrives, the app loads from `output/` but doesn't update the browse-based state (company list, output chips). These could be unified.

**OPEN: Reveal page content.** The Reveal page currently shows hardcoded framing text and foundation doc toggles. The `/api/reveal/:challenge` endpoint returns challenge-specific reveal text aggregated from annotation files, but the current UI doesn't use it — the reveal content comes from the foundation cards' static context strings. This endpoint data could be surfaced to make the reveal more specific to the challenge discussed.
