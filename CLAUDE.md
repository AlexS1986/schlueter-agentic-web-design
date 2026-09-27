# Project instructions (Claude Code)

Read and follow `AGENTS.md` in this directory — it is the single source of truth for the workflow, stack, and which `agent-docs/` file to load at each step.

Quick reference:

- `/discovery` or "Discovery starten" → load `agent-docs/discovery.md`, run the 7-phase interview in German (address the client with "Sie"), fill `discovery/brief.md`. If `discovery/workbook*` exists (Offer-Messaging-Workbook), use workbook mode: pre-fill, then ask only about gaps and weak answers.
- Copywriting → `agent-docs/copywriting.md` (output in German, form of address as decided in brief section 6).
- Wireframes / UI → `agent-docs/design.md`.
- Development → `agent-docs/html.md`, `css.md`, `acss.md`, `acss/*`, `etch.md`, `etch-css-reset.md`.

Never start copywriting or design before `discovery/brief.md` is complete and approved.
