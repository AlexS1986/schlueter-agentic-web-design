#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, "..");
const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));

// Harness-agnostic core (same as the original template)
const FILES = ["AGENTS.md"];
const DIRS = ["agent-docs"];

// Harness-specific glue: [source in package, destination in project]
const HARNESS_FILES = [
  // CLAUDE.md is NOT in this list: it is the per-project context file (templates/CLAUDE.project.md),
  // created once and never overwritten – see main().
  ["commands/discovery.md", ".claude/commands/discovery.md"], // Claude Code: /discovery
  ["commands/brief.md", ".claude/commands/brief.md"], // Claude Code: /brief
];

function printHelp() {
  console.log(`
${pkg.name} — install the Schlueter agentic web design workflow into a project

Usage:
  npx ${pkg.name} [directory] [options]

Options:
  --force, -f       Overwrite existing AGENTS.md, agent-docs/, .claude/commands/ (CLAUDE.md and discovery/brief.md are always kept)
  --no-harness      Only install AGENTS.md + agent-docs/ (skip .claude/commands, Cursor, Copilot glue)
  --help, -h        Show this help message

Examples:
  npx ${pkg.name}
  npx ${pkg.name} ./kunde-website
  npx ${pkg.name} --force
`);
}

function parseArgs(argv) {
  const options = { force: false, help: false, harness: true, target: process.cwd() };

  for (const arg of argv) {
    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--force" || arg === "-f") {
      options.force = true;
    } else if (arg === "--no-harness") {
      options.harness = false;
    } else if (!arg.startsWith("-")) {
      options.target = resolve(arg);
    } else {
      console.error(`Unknown option: ${arg}`);
      printHelp();
      process.exit(1);
    }
  }

  return options;
}

function listConflicts(target, harness) {
  const conflicts = [];

  for (const file of FILES) {
    if (existsSync(join(target, file))) conflicts.push(file);
  }
  for (const dir of DIRS) {
    if (existsSync(join(target, dir))) conflicts.push(`${dir}/`);
  }
  if (harness) {
    for (const [, dest] of HARNESS_FILES) {
      if (existsSync(join(target, dest))) conflicts.push(dest);
    }
  }

  return conflicts;
}

function copyIfAllowed(source, dest, force) {
  if (existsSync(dest) && !force) return false;
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(source, dest, { recursive: true });
  return true;
}

function copyPackageFiles(target, force, harness) {
  mkdirSync(target, { recursive: true });
  const written = [];

  for (const file of FILES) {
    if (copyIfAllowed(join(packageRoot, file), join(target, file), force)) written.push(file);
  }
  for (const dir of DIRS) {
    if (copyIfAllowed(join(packageRoot, dir), join(target, dir), force)) written.push(`${dir}/`);
  }
  if (harness) {
    for (const [src, dest] of HARNESS_FILES) {
      if (copyIfAllowed(join(packageRoot, src), join(target, dest), force)) written.push(dest);
    }
    // Cursor: rule that always applies and points at AGENTS.md
    const cursorRule = join(target, ".cursor", "rules", "agentic-web-design.mdc");
    if (!existsSync(cursorRule) || force) {
      mkdirSync(dirname(cursorRule), { recursive: true });
      writeFileSync(
        cursorRule,
        `---\ndescription: Schlueter Agentic Web Design workflow\nalwaysApply: true\n---\n\nRead CLAUDE.md in the project root first (project context and current status), then AGENTS.md. Load the agent-docs/ file it names for the current workflow step. "Discovery starten" or /discovery runs agent-docs/discovery.md in German.\n`
      );
      written.push(".cursor/rules/agentic-web-design.mdc");
    }
    // GitHub Copilot
    const copilot = join(target, ".github", "copilot-instructions.md");
    if (!existsSync(copilot) || force) {
      mkdirSync(dirname(copilot), { recursive: true });
      writeFileSync(
        copilot,
        `Read CLAUDE.md in the project root first (project context and current status), then AGENTS.md. Load the agent-docs/ file it names for the current workflow step. "Discovery starten" runs agent-docs/discovery.md in German.\n`
      );
      written.push(".github/copilot-instructions.md");
    }
  }

  return written;
}

function countAgentDocs() {
  const docsDir = join(packageRoot, "agent-docs");
  let count = 0;

  for (const entry of readdirSync(docsDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      count += 1;
    } else if (entry.isDirectory()) {
      for (const nested of readdirSync(join(docsDir, entry.name))) {
        if (nested.endsWith(".md")) count += 1;
      }
    }
  }

  return count;
}

function main() {
  const { force, help, harness, target } = parseArgs(process.argv.slice(2));

  if (help) {
    printHelp();
    return;
  }

  const conflicts = listConflicts(target, harness);

  if (conflicts.length > 0 && !force) {
    console.error("Installation blocked — the following already exist:");
    for (const conflict of conflicts) console.error(`  ${conflict}`);
    console.error("\nRe-run with --force to overwrite.");
    process.exit(1);
  }

  const written = copyPackageFiles(target, force, harness);

  const discoveryDir = join(target, "discovery");
  mkdirSync(discoveryDir, { recursive: true });

  // brief.md holds the client's discovery answers, so it is never overwritten,
  // even with --force. --force only refreshes the shipped docs.
  const briefDest = join(discoveryDir, "brief.md");
  const briefExisted = existsSync(briefDest);
  if (!briefExisted) {
    cpSync(join(packageRoot, "templates", "discovery-brief.md"), briefDest);
  }

  // CLAUDE.md is the per-project context file (client, links, status). Like brief.md it is
  // created once from the template and never overwritten, not even with --force.
  const claudeDest = join(target, "CLAUDE.md");
  const claudeExisted = existsSync(claudeDest);
  if (!claudeExisted) {
    cpSync(join(packageRoot, "templates", "CLAUDE.project.md"), claudeDest);
  }

  console.log(`Installed ${pkg.name}@${pkg.version} to ${target}`);
  for (const w of written) {
    console.log(`  ${w}${w === "agent-docs/" ? ` (${countAgentDocs()} reference docs)` : ""}`);
  }
  console.log(`  discovery/brief.md ${briefExisted ? "(kept)" : "(created)"}`);
  console.log(`  CLAUDE.md ${claudeExisted ? "(kept – project context)" : "(created – fill in the project context)"}`);
  console.log("\nYour AI coding tool will pick up CLAUDE.md / AGENTS.md automatically.");
  console.log("Next steps: 1) fill in CLAUDE.md (client, goal, links)  2) say  Discovery starten  (or /discovery in Claude Code)");
}

main();
