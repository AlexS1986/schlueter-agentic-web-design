# Projekt: [Kunde] – Website & Google-Unternehmensprofil

> **Für jeden Agenten (Claude Code, Claude Cowork, Cursor, Copilot, …):** Diese Datei bringt dich auf den aktuellen Stand des Projekts. Lies sie zuerst, dann `AGENTS.md` (Workflow, Stack, welches `agent-docs/`-Dokument du wann lädst). Sie wird vom Menschen gepflegt – an jedem Prozess-Gate wird die Status-Tabelle aktualisiert. Bei Widersprüchen zwischen dieser Datei und älteren Chat-Verläufen gilt diese Datei.

## Kontext

- **Kunde:** [Name, Firma] · [Branche] · [Ort]
- **Ansprechpartner / Freigeber:** [Name, Rolle] – Anrede im Kontakt: Sie
- **Ziel der Website (Brief, Abschnitt 1):** [ein Satz – oder „noch offen, siehe discovery/brief.md“]
- **Anrede auf der Website (Brief, Abschnitt 6):** [Sie / du / noch offen]
- **Angebot / Umfang:** [Seitenzahl und -typen laut Angebot, optionale Leistungen]
- **Besonderheiten:** [regulierter Beruf, Sprache, Barrierefreiheit, Saison, …]

## Wo was liegt

| Was | Wo |
|---|---|
| Prozess & Fortschritt (Obsidian) | Vault `GTD` → `02 Projects/Webdesign/Project - [Kunde]` (ein Dokument: Steckbrief oben, darunter alle Prozessschritte mit Feldern und Anleitung) |
| Prozess-Beschreibung | Vault `GTD` → `05 Reference/Prozesse/Prozess Webdesign` |
| Kundenordner (Drive) | [URL] – Angebot, Freigaben, Inhalte, Fotos, Reports |
| Dieser Projektordner (Kundenordner) | `Webdesign/Projekte/[Kunde]/` – enthält diese Datei, `AGENTS.md`, `agent-docs/`, `discovery/` und die Unterordner 00–08 |
| Code (WordPress/Etch-Exports, Theme, Assets) | `05_Entwicklung/` – ab Phase 10 |
| Discovery-Brief | `discovery/brief.md` – Status: [nicht begonnen / in Arbeit / abgeschlossen / freigegeben am …] |
| Kickoff-Fragebogen | Google Doc im Austausch-Ordner (aus Vorlage `Webdesign/Templates/Projekt/Austausch_Kunde/Kickoff-Fragebogen (Vorlage)`) – [Link] · im Call geteilt, Blöcke A–J |
| Offer-Messaging-Workbook | Google Doc im Austausch-Ordner – [Link] · im Call geteilt; oder `discovery/workbook-*.md` [vorhanden / nicht vorhanden] |
| Sitemap & Seitenzweck-Matrix | [Drive-Link oder Pfad] |
| Paper Design (Wireframes, UI) | [URL / Dateiname] – ab Phase 8 |
| Staging | [URL] – Zugang über Passwort-Manager (nie hier eintragen) – ab Phase 10 |
| Live-Site | [URL] – ab Phase 11 |
| Tracking | GA4 [Property-ID] · Search Console [Property] · GTM [Container-ID] |

## Google-Unternehmensprofil *(nur bei GBP-Mandat)*

- **Mandat:** [Setup / Setup + Betreuung / keins] · Projektdokument in Obsidian: `Project - [Kunde] GBP`
- **Profil:** [Google-Maps-Link] – Zugang: Verwalter per Einladung (kein Passwort)
- **Ausgangswerte:** `08_GBP/Baseline/` – bestätigt am [Datum]
- **UTM-Konvention:** [utm_source=google&utm_medium=organic&utm_campaign=gbp-…] – identisch für Website und Profil
- **Bewertungslink / QR:** [Link] · Antwortvorlagen: Obsidian `GBP-DE-07`
- **Monatszyklus:** fester Termin [x. Werktag], Report in `08_GBP/Reports/JJJJ-MM/`
- **Regeln:** Nichts am Profil ändern ohne Anweisung; regulierte Berufe: Schweigepflicht in Bewertungsantworten; keine Bewertungsanreize

## Stack & Tools

- **Plattform:** WordPress + Etch + Automatic.css auf Hostinger (Kunden-Account)
- **Design:** Paper Design – [Datei/Projekt-Link]; MCP `paper-desktop` (Design ↔ Code) – [eingerichtet am … / noch nicht]
- **Entwicklung:** Etch – [Zugang/Setup, MCP oder CLI, eingerichtet am … / noch nicht]; lokale Umgebung: [LocalWP / Etch Studio / keine]
- **Referenz-Docs:** `agent-docs/` (copywriting, design, html, css, acss, etch) – Ladereihenfolge laut `AGENTS.md`

## Status *(an jedem Gate aktualisieren)*

| Datum | Prozess-Phase | Freigegeben (schriftlich) | Nächster Schritt |
|---|---|---|---|
| [JJJJ-MM-TT] | 4 Onboarding | – | Discovery starten (`/discovery`) |

**Aktuell in Arbeit:** [Phase, Schritt-Nummer aus dem Projektdokument, Kurzbeschreibung]

## Regeln für Agenten in diesem Projekt

1. Reihenfolge und Gates: `AGENTS.md`. Kein Copywriting, kein Design, bevor `discovery/brief.md` vollständig und freigegeben ist.
2. Alles Kundenseitige auf Deutsch; Anrede auf der Website exakt wie im Brief (Abschnitt 6) festgelegt.
3. Freigegebene Stände (Brief, Sitemap, Wireframes/Texte, Design) nicht stillschweigend ändern – Änderungen als Änderungswunsch kennzeichnen und dem Menschen vorlegen.
4. Nichts veröffentlichen, nichts am Live-System oder am Google-Unternehmensprofil ändern ohne ausdrückliche Anweisung des Menschen. Staging ist der Arbeitsort.
5. Keine Passwörter, Tokens oder Kundendaten in diese Datei, in Commits oder in Chat-Ausgaben.
6. Rechtliche Grenzen aus dem Brief (Abschnitt 7) gelten für jeden Text: [z. B. keine Heilversprechen]
7. Wenn etwas hier fehlt oder veraltet wirkt: nachfragen, nicht raten – und den Menschen bitten, diese Datei zu aktualisieren.

## Entscheidungen & Learnings

- [JJJJ-MM-TT] – Projekt angelegt. [erste Entscheidung]
