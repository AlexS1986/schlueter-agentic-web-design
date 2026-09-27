# Schlueter Agentic Web Design

Agent instructions for Schlueter web projects. Load the referenced docs in `agent-docs/` at the workflow steps listed below.

## Overview

Schlueter Agentic Web Design is the standard operating system for building WordPress sites with Etch and Automatic.css. One source of truth, any harness.

**Read `CLAUDE.md` in the project root first.** It is the per-project context file (client, goal, where things live, tools such as Paper Design and Etch, current process status, project rules) and is maintained by the human at every process gate. This file (`AGENTS.md`) describes the *method*; `CLAUDE.md` describes *this project*. If `CLAUDE.md` still contains placeholders, ask the user to fill them in before starting.

## Language

- **Everything client-facing is German.** The discovery interview (`agent-docs/discovery.md`), the discovery brief (`discovery/brief.md`), and all website copy produced from the brief are written in German.
- **Address the client with "Sie" throughout the interview.** Switch to "du" only when the user explicitly instructs it. The form of address used *on the website* is a separate brand decision, captured in discovery phase 6 (`Anrede auf der Website`) and binding for all copy.
- The remaining reference docs (copywriting, design, ACSS, Etch, HTML, CSS) are in English and describe method and conventions only; apply them to produce German output.

## Workflow

1. Business/Brand Discovery
2. Copywriting Discovery
3. Home Page Wireframing & Copy
4. Home Page UI Design
5. Remaining Wireframes
6. Remaining UI Screens
7. Development
8. SEO Optimization
9. Performance Optimization
10. Deployment

## Getting started: Discovery

Every project begins with a guided discovery interview. When the user says `Discovery starten`, `start discovery`, `/discovery`, "Discovery beginnen", or asks to kick off a new project, load and follow [agent-docs/discovery.md](agent-docs/discovery.md) and run the interview to completion — in German.

Do not skip ahead to copywriting, wireframing, or design until the discovery brief at `discovery/brief.md` is complete and the user has approved it. If a brief already exists, resume it rather than starting over.

**Optional input: Offer-Messaging-Workbook.** If the agency has already run the Offer Messaging workshop with the client, the filled workbook is placed under `discovery/` (`workbook*.md|txt|pdf|docx`, one per offer). The interview then runs in *workbook mode* (see `agent-docs/discovery.md`, section "Optionaler Input"): pre-fill the brief from the workbook, mark entries `(Workbook)`, and ask follow-up questions only where the workbook is missing, vague or contradictory. Phases the workbook does not cover (1, 5, 6, parts of 4 and 7) are run in full. The workbook supplements the interview; it never replaces the user's approval of the brief.

## Project Environment & Stack

- **Paper or Figma** - Wireframing & Design
- **WordPress or Etch Studio** - Platform
- **Etch (https://docs.etchwp.com)** - Development Tool
- **Automatic.css (https://docs.automaticcss.com)** - Design system & CSS framework

## Discovery Conventions

Load and follow [agent-docs/discovery.md](agent-docs/discovery.md) during workflow step 1 (Business/Brand Discovery) to run the guided interview and produce the project brief that drives every later step.

## Copy Conventions

Load and follow [agent-docs/copywriting.md](agent-docs/copywriting.md) during copywriting and any page copy review before wireframing. All copy is written in German.

## Design Conventions

Load and follow [agent-docs/design.md](agent-docs/design.md) for wireframing, UI design, and any visual review pass.

## Code Conventions

Load and follow [agent-docs/html.md](agent-docs/html.md), [agent-docs/css.md](agent-docs/css.md), [agent-docs/acss.md](agent-docs/acss.md), the relevant files in [agent-docs/acss/](agent-docs/acss/), [agent-docs/etch.md](agent-docs/etch.md), and [agent-docs/etch-css-reset.md](agent-docs/etch-css-reset.md) during development and any markup or stylesheet review.
