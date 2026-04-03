---
name: gtm-demo
description: >
  Run a side-by-side GTM demo that shows V1 vs V2 output quality. Takes a company name
  (with existing V1 and V2 doc sets) and a prompt — then automatically routes to the right
  skill and spawns two agents in parallel: one generating from V1 foundations, one from V2.
  Use this skill whenever
  the user wants to: demo the GTM foundations methodology, show V1 vs V2 contrast on a
  live prompt, run a side-by-side comparison of weak vs. strong foundations, or generate
  any GTM deliverable against both doc sets simultaneously. Also trigger when the user
  mentions demo, side-by-side, V1 vs V2, contrast, showcase, or "run this against both."
---

# GTM Demo Skill

This skill runs live side-by-side demos of the GTM Foundations methodology. It takes an existing company's V1 and V2 doc sets and a user-provided prompt — then automatically routes to the right skill (marcomm or sales-comms) and spawns two parallel agents to generate outputs from each foundation set. The contrast between V1 (broad, unfocused foundations) and V2 (focused, niche-driven foundations) is where the methodology's value becomes visceral.

## Why this exists

The four foundation documents (ICP, PSF, Positioning, Messaging) are strategy artifacts. Most prospects understand strategy matters in the abstract. What they don't see — until you show them — is how foundation quality shows up in the actual deliverables their team produces every day: the emails, the landing pages, the call prep, the competitive briefs. This skill makes that invisible connection visible by generating the same deliverable from weak and strong foundations simultaneously.

## What this skill needs from the user

Two things, every time:

1. **Company name** — used to locate the V1 and V2 doc sets in `company-gtm-docs/{company}/`
2. **Prompt** — what to generate (e.g., "Write a cold outbound email to a VP of Engineering at a Series B company" or "Draft a competitive brief against Datadog")

If the user provides both, proceed immediately. If either is missing, ask for it specifically.

### Automatic skill routing

The demo automatically determines which skill to use based on the prompt. The user never needs to specify a skill name — the prompt content drives routing.

**Route to `marcomm` (→ marcomm-v1 + marcomm-v2) when the prompt asks for:**
- Landing pages / LPs
- One-pagers
- Blog posts
- Any other marketing content (web copy, product pages, feature pages, campaign content, collateral)

**Route to `sales-comms` (→ sales-comms-v1 + sales-comms-v2) when the prompt asks for:**
- Cold emails / outbound emails / email sequences / follow-up emails
- Call prep / meeting prep briefs
- Competitive briefs / battle cards
- Discovery call scripts / talk tracks
- Any other seller-facing communications

**How routing works internally:**

| Detected content type | Agent A (V1) reads       | Agent B (V2) reads       |
|-----------------------|--------------------------|--------------------------|
| Marketing content     | marcomm-v1/SKILL.md      | marcomm-v2/SKILL.md      |
| Sales communications  | sales-comms-v1/SKILL.md  | sales-comms-v2/SKILL.md  |

If the prompt is ambiguous and could go either way, default to `sales-comms`. If the user explicitly names a skill, respect that override.

## Interaction flow

### Step 1: Collect inputs

Confirm you have company name and prompt. If the user provides them in one message (e.g., "Run the SignalStack demo — cold outbound email"), parse and proceed. If anything is missing, ask for it specifically. Determine the skill routing automatically from the prompt content (see "Automatic skill routing" above).

Verify the doc sets exist:
- `company-gtm-docs/{company}/v1/` should contain: `icp.md`, `psf.md`, `positioning.md`, `messaging.md`, `context.md`
- `company-gtm-docs/{company}/v2/` should contain the same files

If docs are missing, tell the user which files are missing and stop. Don't proceed with incomplete foundations — the contrast won't land.

### Step 2: Spawn two agents in parallel

Launch both agents in the same turn. Each agent receives:

**Agent A (V1 foundations):**
- Read the V1 variant of the skill (e.g., `sales-comms-v1/SKILL.md` or `marcomm-v1/SKILL.md`)
- Read all V1 docs: `company-gtm-docs/{company}/v1/icp.md`, `psf.md`, `positioning.md`, `messaging.md`, `context.md`
- Execute the user's prompt using the V1 skill's methodology, grounded entirely in the V1 documents
- Save the output to `company-gtm-docs/{company}/demo-output/{slug}/v1.md`

**Agent B (V2 foundations):**
- Read the V2 variant of the skill (e.g., `sales-comms-v2/SKILL.md` or `marcomm-v2/SKILL.md`)
- Read all V2 docs: `company-gtm-docs/{company}/v2/icp.md`, `psf.md`, `positioning.md`, `messaging.md`, `context.md`
- Execute the user's prompt using the V2 skill's methodology, grounded entirely in the V2 documents
- Save the output to `company-gtm-docs/{company}/demo-output/{slug}/v2.md`

**Generating the slug:** Convert the user's prompt to a URL-friendly slug: lowercase, replace spaces with hyphens, strip punctuation, truncate to 50 characters. Examples: "Write a cold outbound email" → `write-a-cold-outbound-email`, "Write a 300 word blog post" → `write-a-300-word-blog-post`.

**Create the slug directory** (`company-gtm-docs/{company}/demo-output/{slug}/`) before saving outputs. If the directory already exists, the new outputs will overwrite the previous ones for that same prompt.

**Critical instruction for both agents:** Generate only the deliverable the prompt asks for. No meta-commentary, no "here's what I did" preamble, no annotations about V1 vs V2 quality. The output should read as if a real team member produced it from their available foundations. The quality difference should be self-evident.

**Resolving file paths:**

Based on the automatic routing, each agent reads its version-specific skill:
- Agent A (V1): `skills/marcomm-v1/SKILL.md` or `skills/sales-comms-v1/SKILL.md`
- Agent B (V2): `skills/marcomm-v2/SKILL.md` or `skills/sales-comms-v2/SKILL.md`

Company doc sets live in the workspace folder under `company-gtm-docs/`. Use the full absolute path when passing to agents.

**Agent prompt template:**

Use the template below for both agents. Each agent reads its own version-specific skill, which already contains the correct behavioral patterns (V1 skills contain weak-pattern instructions; V2 skills contain strong-pattern instructions):

```
You are generating a GTM deliverable grounded in the {version} foundation documents.

Read the following skill for methodology and format:
{absolute path to version-specific skill SKILL.md}

Read these foundation documents as your context — they define the ICP, problems, positioning, and messaging you must work from:
- {absolute path to icp.md}
- {absolute path to psf.md}
- {absolute path to positioning.md}
- {absolute path to messaging.md}
- {absolute path to context.md}

Now execute this prompt using the skill's methodology, grounded entirely in the foundation documents above:
"{user's prompt}"

Save your output to: {absolute output path}

Important: Generate only the deliverable. No preamble, no meta-commentary, no version labels, no extra headings. Follow only the output format structure defined in the skill. Write as if you are the team member producing this work from the foundations available to you.
```

### Step 3: Publish and present

Once both agents complete:

1. Write a `meta.json` file to the slug directory (`company-gtm-docs/{company}/demo-output/{slug}/meta.json`) with: `{"prompt": "{prompt}", "skill": "{skill}"}`.

2. **Auto-push to the display page:** Copy the outputs to the display directory (`demo-display/output/v1.md`, `demo-display/output/v2.md`) and write a `demo-display/output/meta.json` with `{"company": "{company}", "prompt": "{prompt}", "skill": "{skill}"}`. This happens automatically every time — no confirmation needed. The outputs are immediately browsable from the display page's company/output dropdown.

3. Confirm to the user: "Both outputs are ready and pushed to display. V1 and V2 saved to `company-gtm-docs/{company}/demo-output/{slug}/`."

4. Ask: **"Want to open the display in browser?"**

- If yes: run `open http://localhost:3000` (start the server first if not running — check with `lsof -ti:3000`).
- If no: skip.

Then ask: **"Another prompt, or done?"**

If the user gives another prompt, determine the skill routing from the new prompt and repeat from Step 2. If they want to switch companies, go back to Step 1.

## File locations

```
company-gtm-docs/{company}/
├── v1/
│   ├── icp.md
│   ├── psf.md
│   ├── positioning.md
│   ├── messaging.md
│   └── context.md
├── v2/
│   └── (same structure)
└── demo-output/
    └── {slug}/                ← one subfolder per prompt
        ├── v1.md
        ├── v2.md
        └── meta.json          ← {"prompt": "...", "skill": "..."}

demo-display/output/           ← legacy push target (for SSE live updates)
├── v1.md
├── v2.md
└── meta.json
```

## Notes on live demo usage

This skill is designed for a live 1:1 demo where the user is screen-sharing. The user controls the pace through the confirmation gates. Between steps, the user is talking their prospect through the methodology — the generation time is a feature, not a bug, because it gives the user space to narrate.

For fastest demo flow: use pre-generated company doc sets (run `gtm-orchestrator` beforehand) and only run prompts live. The prompt generation is the "aha moment" — the doc generation is setup.

Each prompt gets its own subfolder under demo-output/, so multiple prompts accumulate naturally. Re-running the same prompt overwrites that prompt's outputs, but different prompts coexist. The display page's company/output selectors let you browse all generated outputs without needing to push.
