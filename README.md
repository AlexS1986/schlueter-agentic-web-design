# Schlueter Agentic Web Design

Agentic Web-Design-Workflow für Kundenprojekte – eine Adaption von [gearyco-agentic-web-design](https://github.com/kevingeary/gearyco-agentic-web-design), bei der alles Kundenseitige (Discovery-Interview, Brief, Website-Texte) auf Deutsch läuft. Das Interview siezt den Kunden; die Anrede auf der Website wird pro Projekt im Brief festgelegt. Harness-agnostisch über `AGENTS.md`, plus Glue für Claude Code, Cursor und Copilot.

## Stack

- **[Automatic.css](https://automaticcss.com/)** – CSS-Framework und Design-Tokens
- **[Etch](https://etchwp.com/)** – visuelle Entwicklungsumgebung für WordPress

## In ein Projekt installieren

```bash
npx schlueter-agentic-web-design              # ins aktuelle Verzeichnis
npx schlueter-agentic-web-design ./kunde-xy   # in ein Zielverzeichnis – empfohlen: der Kundenordner (Projekte/<Kunde>/), nicht ein Code-Unterordner
npx schlueter-agentic-web-design --force      # vorhandene Docs überschreiben (brief.md bleibt immer erhalten)
npx schlueter-agentic-web-design --no-harness # nur AGENTS.md + agent-docs/, keine Harness-Dateien
```

Das legt an:

```
AGENTS.md                          # Einstiegspunkt – Workflow, Stack, Doc-Index (Codex, Cursor, Copilot, Gemini CLI, Jules …)
CLAUDE.md                          # PROJEKT-KONTEXT: Kunde, Ziel, Links (Obsidian, Drive, Paper, Staging), Status, Regeln – wird nie überschrieben
.claude/commands/discovery.md      # Claude Code: /discovery
.claude/commands/brief.md          # Claude Code: /brief (Stand des Briefs)
.cursor/rules/agentic-web-design.mdc
.github/copilot-instructions.md
agent-docs/                        # Referenz-Docs je Workflow-Schritt
  discovery.md                     # Geführtes Discovery-Interview (DEUTSCH)
  copywriting.md · design.md · html.md · css.md · acss.md · acss/* · etch.md · etch-css-reset.md
discovery/brief.md                 # Leerer Discovery-Brief (DEUTSCH) – wird im Interview gefüllt
discovery/workbook-*.md            # optional: ausgefüllte Offer-Messaging-Workbooks (Input für /discovery)
```

## Projekt starten

1. Im **Kundenordner** installieren (`Projekte/<Kunde>/`), damit Agenten Angebot, Brief, Fotos und GBP-Unterlagen sehen; Code kommt später nach `05_Entwicklung/`. Dann `CLAUDE.md` ausfüllen – Kunde, Ziel, Ansprechpartner, Links zu Obsidian-Tracker, GBP-Abschnitt falls Mandat. Diese Datei ist das Briefing für **jeden** Agenten (Claude Code, Claude Cowork, Cursor, Copilot) und wird an jedem Prozess-Gate aktualisiert (Status-Tabelle). Paper-Design- und Etch-Angaben kommen dazu, sobald diese Phasen beginnen.
2. Ein Claude-Projekt (Cowork) **pro Kunde** anlegen („[Kunde]“), den Kundenordner verbinden, Projekt-Anweisung: *„Lies zuerst CLAUDE.md, dann AGENTS.md.“*
3. Projekt im KI-Tool öffnen und sagen:

```
Discovery starten
```

(oder `/discovery` in Claude Code). Der Agent führt das 7-Phasen-Interview auf Deutsch (Projekt & Ziel, Unternehmen & Angebot, Zielgruppe, Wettbewerber, Seiten, Marke & Stimme, Beweise & Assets), hakt bei vagen Antworten nach und füllt `discovery/brief.md` laufend aus. Der freigegebene Brief ist die Grundlage für Copywriting, Wireframes und Design.

### Optional: Offer-Messaging-Workbook als Input

Wurde das Offer-Messaging-Workbook bereits im Workshop mit dem Kunden ausgefüllt, legst du es vor dem Start unter `discovery/` ab – eine Datei pro Angebot:

```
discovery/workbook-yogakurse.md      # oder .txt / .pdf / .docx
```

`/discovery` läuft dann im **Workbook-Modus**: Der Brief wird aus dem Workbook vorbefüllt (Einträge mit `(Workbook)` markiert), schwache oder fehlende Antworten bekommen `⚠ nachhaken`, und das Interview fragt nur diese Punkte sowie die Phasen ab, die das Workbook nicht abdeckt (Projekt & Ziel, Seiten & Struktur, Marke & Stimme, Wettbewerber-Namen, Assets, Rechtliches, Keywords). Zuordnung Workbook → Brief: siehe `agent-docs/discovery.md`, Abschnitt „Optionaler Input“.

## Lokal ohne npm nutzen

```bash
# direkt aus dem Ordner
node /pfad/zu/schlueter-agentic-web-design/bin/cli.js ./kunde-xy

# oder global verlinken, dann überall:
cd /pfad/zu/schlueter-agentic-web-design && npm link
schlueter-agentic-web-design ./kunde-xy

# oder direkt von GitHub, ohne npm-Publish:
npx github:AlexS1986/schlueter-agentic-web-design ./kunde-xy
```

## Veröffentlichen (npm)

Der Workflow `.github/workflows/publish.yml` veröffentlicht bei jedem Push auf `main`, sofern die Version in `package.json` noch nicht auf npm liegt.

Einmalig: npm-Account anlegen → Access Token (Automation) erzeugen → im GitHub-Repo unter Settings → Secrets → Actions als `NPM_TOKEN` hinterlegen.

Release:

```bash
npm version patch      # oder minor / major
git push --follow-tags
```

Manuell: `npm publish --access public`

## Lizenz

MIT. Basiert auf gearyco-agentic-web-design (MIT, Kevin Geary / Digital Gravy).
