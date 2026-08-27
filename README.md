# Schlueter Agentic Web Design

Agentic Web-Design-Workflow für Kundenprojekte – eine 1:1-Adaption von [gearyco-agentic-web-design](https://github.com/kevingeary/gearyco-agentic-web-design), bei der alles Kundenseitige (Discovery-Interview, Brief, Website-Texte) auf Deutsch läuft. Harness-agnostisch über `AGENTS.md`, plus Glue für Claude Code, Cursor und Copilot.

## Stack

- **[Automatic.css](https://automaticcss.com/)** – CSS-Framework und Design-Tokens
- **[Etch](https://etchwp.com/)** – visuelle Entwicklungsumgebung für WordPress

## In ein Projekt installieren

```bash
npx schlueter-agentic-web-design              # ins aktuelle Verzeichnis
npx schlueter-agentic-web-design ./kunde-xy   # in ein Zielverzeichnis
npx schlueter-agentic-web-design --force      # vorhandene Docs überschreiben (brief.md bleibt immer erhalten)
npx schlueter-agentic-web-design --no-harness # nur AGENTS.md + agent-docs/, keine Harness-Dateien
```

Das legt an:

```
AGENTS.md                          # Einstiegspunkt – Workflow, Stack, Doc-Index (Codex, Cursor, Copilot, Gemini CLI, Jules …)
CLAUDE.md                          # Claude Code – verweist auf AGENTS.md
.claude/commands/discovery.md      # Claude Code: /discovery
.claude/commands/brief.md          # Claude Code: /brief (Stand des Briefs)
.cursor/rules/agentic-web-design.mdc
.github/copilot-instructions.md
agent-docs/                        # Referenz-Docs je Workflow-Schritt
  discovery.md                     # Geführtes Discovery-Interview (DEUTSCH)
  copywriting.md · design.md · html.md · css.md · acss.md · acss/* · etch.md · etch-css-reset.md
discovery/brief.md                 # Leerer Discovery-Brief (DEUTSCH) – wird im Interview gefüllt
```

## Projekt starten

Projekt im KI-Tool öffnen und sagen:

```
Discovery starten
```

(oder `/discovery` in Claude Code). Der Agent führt das 7-Phasen-Interview auf Deutsch (Projekt & Ziel, Unternehmen & Angebot, Zielgruppe, Wettbewerber, Seiten, Marke & Stimme, Beweise & Assets), hakt bei vagen Antworten nach und füllt `discovery/brief.md` laufend aus. Der freigegebene Brief ist die Grundlage für Copywriting, Wireframes und Design.

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
