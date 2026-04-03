# GTM Foundations Showcase: Accessibility Audit, Design Critique, and Style Guide Updates

**Date:** April 3, 2026
**Reviewer:** Claude (design review for Kaitlin Bell)
**Scope:** Full site codebase — globals.css, all CSS modules, all TSX components, UX/UI spec (demo-display/UX-UI-SPEC.md)
**Standard:** WCAG 2.1 AA

---

## Part 1: Accessibility Audit (WCAG 2.1 AA)

### Executive Summary

The site has a solid foundation — focus-visible styles are globally defined, the color palette mostly passes AA, and semantic HTML is used in places. But there are three categories of real issues: contrast failures in specific pairings that are actively used, zero ARIA markup anywhere in the codebase, and interactive patterns (scroll-snap, accordions, custom dropdowns) that have no keyboard or screen reader affordances beyond what the browser gives for free.

For a presenter-driven demo tool, the practical impact of some of these is lower than it would be for a public-facing product. But the contrast failures affect the presenter too, and the style guide should codify the correct pairings so future work doesn't inherit the same problems.

---

### 1.1 Color Contrast — Verified Ratios

I computed actual contrast ratios for every color pairing used in the site. The UX/UI spec's Section 13 claims specific ratios — some are accurate, some are overstated, and several actively-used pairings are missing from the spec entirely.

**Passing (AA or better):**

| Pairing | Actual Ratio | Grade | Where Used |
|---------|-------------|-------|------------|
| Space Indigo (#202A46) on White | 14.2:1 | AAA | Body text on white backgrounds |
| Space Indigo on Ivory (#FAF8F3) | 13.4:1 | AAA | Body text on page background |
| Signal Yellow (#F5C518) on Indigo | 8.7:1 | AAA | Active toggle text, CTA on dark |
| Lilac (#D9D0FF) on Indigo | 9.7:1 | AAA | V2 column headers, Reveal text |
| Secondary (#4A5568) on Ivory | 7.1:1 | AAA | Subheads, secondary text |
| Secondary on White | 7.5:1 | AAA | V1 passage text |
| Muted (#555962) on White | 7.0:1 | AAA | Labels on white |
| Deep Violet (#5C5280) on Violet Mist (#EDEAF5) | 5.9:1 | AA | Foundation badges |
| text-on-dark (#8B9BB5) on Indigo | 5.0:1 | AA | Dark section labels |

**Failing — actively used in the UI:**

| Pairing | Actual Ratio | Required | Where Used | Severity |
|---------|-------------|----------|------------|----------|
| **Dark Yellow (#C09B0A) on Yellow Tint (#FDF8E6)** | **2.5:1** | 4.5:1 | V2 panel labels on Landing, V2 column labels in AnnotationCards | **Critical** |
| **Dark Yellow (#C09B0A) on Ivory (#FAF8F3)** | **2.5:1** | 4.5:1 | Any V2-labeled element on page background | **Critical** |
| **Dark Yellow (#C09B0A) on White (#FFFFFF)** | **2.6:1** | 4.5:1 | Would fail if used on white | **Critical** |
| **Lilac (#D9D0FF) on Violet Mist (#EDEAF5)** | **1.2:1** | 4.5:1 | Not actively used but both are in the palette | **Latent** |

The Dark Yellow failures are the most important finding. The `.panelV2 .panelLabel` on Landing, the `.colLabelV2` in AnnotationCards (the "WITH GTM METHODOLOGY" label on the V2 side), and the Reveal `.sideLabel` on Yellow Tint backgrounds all use Dark Yellow text that falls well below AA. At 2.5:1, this is barely readable — especially on a projector or screen-shared video call, which is this tool's primary use context.

**Spec discrepancy:** The UX/UI spec claims "Muted on White" is 5.8:1 (AA). Actual is 7.0:1 (AAA). It also claims "text-on-dark on Indigo" is 4.6:1. Actual is 5.0:1. The spec's numbers appear to have been estimated rather than computed. The spec does not include Dark Yellow pairings at all — which is where the failures are.

---

### 1.2 Semantic HTML and ARIA

**Finding: Zero ARIA attributes in the entire codebase.**

A `grep` for `aria-` and `role=` across all TSX files returned no results. Specific issues:

| Component | Issue | WCAG Criterion |
|-----------|-------|----------------|
| **FoundationCard toggle** | `<button>` expands/collapses content but has no `aria-expanded`, `aria-controls`, or connection to the panel it controls | 4.1.2 Name, Role, Value |
| **ViewToggle** | Functions as a tablist/segmented control but is just two `<button>` elements with no `role="tablist"`, `role="tab"`, or `aria-selected` | 4.1.2 |
| **Output chips (Header)** | Same pattern — acts as a tab selector but has no ARIA roles | 4.1.2 |
| **CompanyDropdown** | Uses native `<select>`, which is fine — but the wrapping `<label>` element doesn't use `htmlFor` to associate with the select, and sometimes no label is rendered at all | 1.3.1 Info and Relationships |
| **AnnotationCards container** | Scroll-snap container has no `role="region"`, `aria-label`, or section landmarks | 1.3.1 |
| **SnapSection** | Individual snap sections have no `aria-label` or landmark roles; screen readers see undifferentiated div soup | 1.3.1 |
| **Landing page panels** | V1/V2 comparison panels are purely visual `<div>` elements with no semantic grouping | 1.3.1 |
| **DemoApp `<main>`** | Uses a `<main>` element — good. But conditional rendering means screen readers get no announcement when view changes | 4.1.3 Status Messages |

---

### 1.3 Keyboard Navigation

| Issue | Detail | WCAG Criterion |
|-------|--------|----------------|
| **Scroll-snap not keyboard-navigable** | The annotation cards use scroll-snap with IntersectionObserver for visibility, but there are no keyboard controls to advance between snap sections. Tab only moves between interactive elements within a section. | 2.1.1 Keyboard |
| **No skip-to-content link** | The sticky header with multiple controls means keyboard users must tab through all header elements on every view change | 2.4.1 Bypass Blocks |
| **Focus management on view change** | When switching from Landing to AnnotationCards, or between outputs, focus stays wherever it was. Should move to the new content region. | 2.4.3 Focus Order |
| **Escape key binding** | Implemented globally via `useKeyboard` hook and correctly disabled in SELECT/INPUT. This is good. But it's undiscoverable — no UI indicator. | n/a (minor) |
| **Foundation card expand** | The toggle button is keyboard-accessible (native button), but expanded panel content is not announced. Focus doesn't move into the expanded panel. | 2.4.3 |

---

### 1.4 Motion and Animation

| Issue | Detail | WCAG Criterion |
|-------|--------|----------------|
| **No `prefers-reduced-motion` support** | The site uses fadeIn animations, scroll-snap, bouncing chevrons, and opacity transitions — none of which are gated behind `@media (prefers-reduced-motion: no-preference)` | 2.3.3 Animation from Interactions |
| **Chevron bounce is infinite** | The `.scrollChevron` animation runs continuously. Users who are sensitive to motion have no way to stop it. | 2.3.3 |

---

### 1.5 Content and Structure

| Issue | Detail | WCAG Criterion |
|-------|--------|----------------|
| **No page title updates** | The `<title>` is static "GTM Foundations" regardless of which view/screen is active | 2.4.2 Page Titled |
| **Heading hierarchy** | Landing uses H1 correctly. AnnotationCards uses H2 for context header — acceptable. But FullOutput has no headings at all; the V1/V2 column headers are just `<span>` elements. Reveal uses H1 and H2 correctly. | 1.3.1 |
| **Images/icons** | The scroll chevron is CSS-only (pseudo-elements), so no alt text needed. The arrow characters (`→`, `←`) in buttons are inline text — acceptable. No images are used. | 1.1.1 (pass) |
| **Language attribute** | `<html lang="en">` is set correctly in layout.tsx | 3.1.1 (pass) |

---

### 1.6 Accessibility Priority Matrix

| Priority | Issue | Fix Effort |
|----------|-------|------------|
| **P0 — Fix immediately** | Dark Yellow contrast failures on V2 labels | Low — swap to a darker value |
| **P1 — Fix soon** | Add `aria-expanded`/`aria-controls` to FoundationCard toggle | Low |
| **P1** | Add `prefers-reduced-motion` media query | Low |
| **P1** | Add `role`/`aria-` attributes to ViewToggle and output chips | Low |
| **P2** | Focus management on view transitions | Medium |
| **P2** | Associate labels with CompanyDropdown selects | Low |
| **P2** | Add skip-to-content link | Low |
| **P3** | Heading hierarchy in FullOutput | Low |
| **P3** | Dynamic page titles per view | Low |
| **P3** | Landmark roles for scroll-snap sections | Medium |

---

## Part 2: Design Critique

### Executive Summary

The design is well-executed for its purpose — a presenter-driven comparison tool that needs to look polished on a screen share. The type pairing (Fraunces + DM Sans) is distinctive without being distracting. The atmospheric distinction system (Clay/muted for V1, Yellow Tint/bright for V2) does real work — it creates an immediate visual hierarchy that reinforces the narrative before any text is read.

What works well and what doesn't, organized by the three criteria you asked about.

---

### 2.1 Visual Hierarchy — What Works

**The V1/V2 atmospheric system is the strongest design decision in the site.** V1 content consistently feels recessive (clay backgrounds, muted text, muted left borders) while V2 content feels present and alive (warm tint backgrounds, primary text, yellow accents). This isn't just decorative — it does narrative work. The audience instinctively reads V2 as "better" before processing the words, which is exactly what the demo needs.

**Impact statements as their own snap section.** Giving the impact text its own full viewport creates a deliberate pause. Using Fraunces (the headline font) at a generous size signals "this is the takeaway" without any label saying so. The 0.4s delayed fade-in is well-calibrated — it lands after the viewer has processed the passage pair.

**The header's contextual density.** Landing shows only the wordmark. Breakdown/Full shows the full control surface. Reveal strips back to the wordmark. The header communicates "where you are" through what it shows, not through breadcrumbs or labels.

---

### 2.2 Visual Hierarchy — What Doesn't Work

**The Dark Yellow label problem is both an accessibility failure and a hierarchy failure.** The "WITH GTM METHODOLOGY" labels on V2 panels are the one element that should be unambiguously legible — they're doing the heaviest labeling work in the comparison. But Dark Yellow (#C09B0A) at 10-11px uppercase on Yellow Tint is functionally invisible on a compressed video call. The label that marks the "better" version is the hardest thing to read on the page. This undermines the atmospheric distinction system rather than supporting it.

**The context header on AnnotationCards is undersized relative to its job.** The spec calls for 38px; the implementation uses 38px. But on a screen share at typical resolution, the "Let's take a look at a cold outbound email" headline competes with the snap section's generous whitespace rather than anchoring it. The company overline above it (12px uppercase) reads as metadata, not as orientation. For a presenter-driven tool where the audience is watching a reduced-resolution screen share, the context header needs to be the loudest thing on the page.

**The output transition section (last snap section) is visually flat.** It uses the same background treatment as other sections, with small transition chips and a subdued "View the foundation docs →" CTA. For the moment where the presenter needs to make a navigation decision live, the controls are too quiet. The Reveal CTA especially — styled as a secondary ghost button — doesn't signal "this is the next narrative beat."

---

### 2.3 Usability — What Works

**Scroll-snap for annotation walkthrough is the right interaction model.** It turns a potentially overwhelming wall of text into a controlled, one-thing-at-a-time experience. The presenter scrolls, each section locks into place, the audience processes one contrast at a time. This is well-matched to the presenter-driven delivery model.

**Lazy-loading foundation docs in FoundationCard.** The presenter only loads what they expand, which keeps the Reveal page responsive and lets them selectively reveal 1-2 foundations without paying the cost of loading all eight documents.

**The Escape key to return to Landing.** Simple, fast, discoverable through use. Good for the "something went wrong, reset" moment during a live demo.

---

### 2.4 Usability — What Doesn't Work

**The loading state (opacity fade to 0.3) is too aggressive for a live demo.** When switching outputs, the entire content area drops to 30% opacity for the duration of the fetch. On a slow connection during a screen share, this creates an awkward visual where the audience sees a ghosted-out version of the previous content. A skeleton/shimmer state or an instant swap with a subtle fade-in on the new content would be smoother for the presenter.

**The FoundationCard accordion uses `max-height: 1200px` for the expand transition.** This is a well-known CSS hack, but the transition speed is tied to the full 1200px max-height, not the actual content height. If the content is 400px tall, the expand still animates as if it's going to 1200px — meaning the first 2/3 of the transition duration shows the content fully visible while the max-height continues to animate invisibly. The collapse direction is worse: the panel appears to freeze for a moment before collapsing. For a live demo, this creates a perceptible lag.

**No visual indicator of scroll progress in AnnotationCards.** The presenter has no way to know how many snap sections remain. On a live call, glancing at a progress indicator ("3 of 7") would help the presenter pace the walkthrough. The bouncing chevron indicates "there's more below" but gives no sense of magnitude.

**The Full Output view's independent column scrolling is unsynchronized.** Both columns scroll independently, which means a presenter comparing the same section in V1 and V2 has to manually scroll both columns to the same point. For the "credibility" view, the content should either scroll in sync or have some mechanism to navigate to corresponding sections.

---

### 2.5 Consistency — What Works

**The design token system is rigorous.** Every value traces back to a CSS custom property. Font declarations, spacing, colors, radii, and transitions are all tokenized. No magic numbers. This is unusually well-structured for a custom CSS Modules codebase.

**The V1/V2 atmospheric treatment is consistent across all four views.** Landing panels, annotation passages, full output columns, and foundation doc columns all use the same pattern: Clay/muted for V1, Yellow Tint/primary for V2, Indigo/Lilac for V2 headers on dark. No exceptions or one-offs.

---

### 2.6 Consistency — What Doesn't Work

**The passage pair padding in AnnotationCards doesn't match the spec.** The UX/UI spec (Section 8.2) calls for `14px 16px` padding on passages. The CSS implementation uses `20px 24px`. This isn't just a spec drift issue — the extra padding changes the visual weight of the passage blocks relative to the impact statement that follows.

**Font sizes diverge between AnnotationCards implementation and spec.** The spec (Section 8.3) defines impact statement as Fraunces 19px. The implementation uses 26px. The spec defines context headline as 28px; the implementation uses 38px. The spec defines section label as 17px; implementation uses 20px. These are all larger than spec. The implementation may feel better at screen-share resolution, but the spec and code are significantly out of sync. One of them needs to be the source of truth.

**The spacing scale jumps from 40px (xl) to 64px (2xl) to 96px (3xl).** The 4→8→16→24→40 progression is clean (roughly doubling). But 40→64 is a 1.6x jump and 64→96 is a 1.5x jump, while the earlier steps are 2x. Several components use hardcoded pixel values (e.g., WhatsNext padding: `64px 40px 40px`, passage pair padding: `20px 24px`) that don't align to the spacing scale at all.

**Two different implementations of the "column label" pattern.** FullOutput defines `.colLabel` and `.colLabelV2` as separate classes with duplicated properties. AnnotationCards uses `.colLabel` with a `.colLabelV2` modifier. Both achieve the same visual but with different CSS structures. The FoundationCard has yet a third implementation (`.docColLabel` / `.docColLabelV2`). These should be a shared component.

---

## Part 3: Style Guide Update Proposals

There is no standalone style guide document in the repo. The UX/UI spec (Section 13-15) serves as a partial style guide with color, typography, and token references. The proposals below are framed as additions/changes to the existing token system in `globals.css` and the spec.

---

### 3.1 P0: Fix the Dark Yellow Contrast Failure

**Current:** `--color-yellow-dark: #C09B0A` is used for V2 labels on Yellow Tint and Clay backgrounds.
**Problem:** 2.5:1 contrast ratio — fails WCAG AA by a wide margin.

**Proposal — two options side by side:**

| Option A: Darken the yellow | Option B: Use a different accent family |
|---|---|
| Replace `#C09B0A` with `#7A6200` | Replace V2 labels with Deep Violet `#5C5280` |
| Ratio on Yellow Tint: ~5.7:1 (AA) | Ratio on Yellow Tint: ~6.3:1 (AA) |
| Maintains the yellow family for V2 labels | Uses the purple "empathy" family for labels, reserves yellow for backgrounds/accents |
| Feels warmer, more "branded" | Creates stronger contrast with the yellow background; label reads as "authoritative" rather than "warm" |

**My recommendation:** Option A. The V2 label's job is to identify the V2 column, and keeping it in the yellow family maintains the atmospheric color coding (yellow = V2). Option B would introduce a moment of visual confusion — purple label on a yellow background doesn't reinforce "this is the V2 side."

**Implementation:** Single token change in globals.css, then verify all uses.

```css
/* Before */
--color-yellow-dark: #C09B0A;

/* After — Option A */
--color-yellow-dark: #7A6200;
```

---

### 3.2 Add a `prefers-reduced-motion` Rule

**Proposal:** Add a global motion gate to globals.css.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a single addition that covers all animations and transitions site-wide. The scroll-snap still works (it's a layout property, not an animation), but the bouncing chevron, fade-ins, and expand transitions all become instant.

---

### 3.3 Codify the Contrast-Safe Pairing Table

The spec's Section 13 includes a contrast table, but it's incomplete and some values are inaccurate. Replace it with verified pairings and mark forbidden combinations.

**Proposed addition to the style guide:**

**Safe text-on-background pairings (verified AA+):**

| Text Token | Background Token | Ratio | Use For |
|-----------|-----------------|-------|---------|
| `--text-primary` | `--color-white` | 14.2:1 | Body text, headings |
| `--text-primary` | `--color-ivory` | 13.4:1 | Body text on page bg |
| `--text-primary` | `--color-yellow-tint` | 13.0:1 | V2 passage text |
| `--text-secondary` | `--color-ivory` | 7.1:1 | Subheads, descriptions |
| `--text-secondary` | `--color-clay` | 6.4:1 | V1 panel text |
| `--text-muted` | `--color-white` | 7.0:1 | Labels, overlines |
| `--color-yellow` | `--color-indigo` | 8.7:1 | CTAs on dark bg |
| `--color-lilac` | `--color-indigo` | 9.7:1 | Text on dark sections |
| `--color-violet-deep` | `--color-violet-mist` | 5.9:1 | Foundation badges |

**Forbidden pairings (fail AA):**

| Text | Background | Ratio | Why |
|------|-----------|-------|-----|
| `--color-yellow-dark` (current) | `--color-yellow-tint` | 2.5:1 | Unreadable at label sizes |
| `--color-yellow-dark` (current) | `--color-ivory` | 2.5:1 | Same |
| `--color-lilac` | `--color-violet-mist` | 1.2:1 | Near-identical lightness |
| `--color-yellow` | `--color-white` | — | Yellow as text on light = always fails |

---

### 3.4 Reconcile Spec vs. Implementation Typography

The spec and implementation disagree on several key sizes. This needs an explicit decision about which is authoritative.

| Element | Spec Says | Code Says | Delta |
|---------|----------|----------|-------|
| Context headline | 28px | 38px | +10px |
| Impact statement | 19px | 26px | +7px |
| Section label | 17px | 20px | +3px |
| Passage padding | 14px 16px | 20px 24px | +6/+8px |

**My recommendation:** The implementation sizes are likely better for the actual use context (screen share at reduced resolution). Update the spec to match the implementation, and add a note explaining the rationale: "Sizes are calibrated for screen-share legibility at 720p-1080p, not direct browser viewing."

---

### 3.5 Normalize the Spacing Scale

**Current scale:** 4 → 8 → 16 → 24 → 40 → 64 → 96

The jump from 24→40 breaks the doubling pattern, and 40→64→96 are inconsistent multipliers. Several components use hardcoded values outside the scale (20px, 14px padding on passages; 64px 40px 40px on WhatsNext).

**Proposal — two options:**

| Option A: Keep current scale, enforce it | Option B: Shift to a strict geometric scale |
|---|---|
| Keep all seven tokens as-is | 4 → 8 → 16 → 24 → 32 → 48 → 64 → 96 |
| Add a lint rule or code review convention: no hardcoded px values in CSS modules | Adds `--space-lg-plus: 32px` and `--space-xl-sm: 48px` |
| Fixes the hardcoded values by snapping them to the nearest token | More granular, but more tokens to remember |

**My recommendation:** Option A. The current scale works. The issue isn't the scale — it's the hardcoded values that drift from it. Snap WhatsNext to `var(--space-2xl) var(--space-xl) var(--space-xl)` and passage padding to `var(--space-lg)`. Adding more tokens increases cognitive load without adding clarity.

---

### 3.6 Extract a Shared "Column Label" Component

Three separate CSS implementations exist for the V1/V2 column label pattern:

1. `FullOutput.module.css` → `.colLabel` / `.colLabelV2`
2. `AnnotationCards.module.css` → `.colLabel` / `.colLabelV2`
3. `FoundationCard.module.css` → `.docColLabel` / `.docColLabelV2`

All three use: DM Sans, 10-11px, weight 600, uppercase, 1.5px letter-spacing. The only variation is the background color on the V2 variant.

**Proposal:** Extract to a shared CSS module (`shared/ColumnLabel.module.css`) or define the base pattern in globals.css as a utility class. The component would accept a `variant` prop (`v1` | `v2`) and render consistently everywhere.

---

### 3.7 Add ARIA Conventions to the Style Guide

The style guide should codify ARIA patterns for the interactive components used in this site, so any future development follows the same conventions.

**Proposed conventions:**

| Pattern | Required ARIA |
|---------|--------------|
| Accordion (FoundationCard) | `aria-expanded="true|false"` on trigger, `aria-controls="panel-id"` pointing to panel, `id` on panel |
| Segmented control (ViewToggle) | `role="tablist"` on container, `role="tab"` + `aria-selected` on each button, `role="tabpanel"` on the content area |
| Navigation chips (Output chips) | `role="tablist"` + `role="tab"` + `aria-selected`, or `aria-current="true"` on active chip |
| View transitions | Move focus to the primary content region (`<main>` or first heading) when view changes |

---

### Summary: What to Do First

1. **Fix Dark Yellow** — swap `--color-yellow-dark` to `#7A6200`. Biggest impact, smallest effort.
2. **Add `prefers-reduced-motion`** — single CSS block in globals.css.
3. **Add `aria-expanded` to FoundationCard** — three lines of JSX.
4. **Update the UX/UI spec's contrast table** with verified ratios and forbidden pairings.
5. **Reconcile spec vs. implementation font sizes** — update the spec to match code, with rationale.

Everything else is important but can sequence after these five.
