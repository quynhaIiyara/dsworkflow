# rn-ds

React Native design system with an ahua-style release pipeline, a
Claude-native authoring surface, and a downstream MCP so consumer apps can
discover components + tokens by name.

**Scope:** React Native only. Presentational + interactive primitives, slot
compositions, and design tokens.

**Non-scope:** Web components, framework-agnostic wrappers, a11y automation
in CI (soft-enforced in review — see [AGENTS.md](./AGENTS.md)), icon or font
asset pipeline (deferred pending a coherent asset strategy).

## Packages

| Name                    | Purpose                                                             | Ships                                        |
|-------------------------|---------------------------------------------------------------------|----------------------------------------------|
| `@rn-ds/tokens`         | SSOT design tokens → typed ESM exports (colors, spacing, radii, …)  | `dist/` (ESM) + `src/design-tokens.json`     |
| `@rn-ds/components`     | Button, Status via react-native-builder-bob                         | `lib/` (cjs+esm+types) + `manifest.json`     |

Each versions independently via `semantic-release` (per-package `commitPaths`
+ `tagFormat`).

## Apps

| Name                    | Purpose                                                              |
|-------------------------|----------------------------------------------------------------------|
| `@rn-ds/docs`           | Storybook 8 + Vite + `react-native-web` — browser preview of every component |

## Agent surface

| Location                                      | Purpose                                                                     |
|-----------------------------------------------|-----------------------------------------------------------------------------|
| `.claude/skills/ds-authoring/`                | Rules for adding/editing components in **this** repo. Token discipline, file layout, Conventional Commit scopes, porting recipe for legacy HTML/CSS DS. |
| `.claude/skills/ds-consumer/`                 | Rules for downstream RN apps consuming `@rn-ds/*`. MCP query cadence, import rules, token-only styling. |
| `.claude/mcp/ds-manifest/`                    | MCP server exposing `list_components`, `get_component`, `get_tokens`, `get_versions`. Auto-registered in this repo via `.claude/settings.json`. |

## Quick start

```bash
npm install                     # workspaces install (packages + apps + mcp)

# Everyday
npm run typecheck               # tokens build then tsc across workspaces
npm run build                   # tokens → components (bob)
npm run test                    # placeholder (no jest yet)
npm run check                   # typecheck + build + test
npm run manifest                # gen dist/manifest.json + packages/components/manifest.json
npm run storybook               # dev server on http://localhost:6006
npm run storybook:build         # static site → apps/storybook/storybook-static/

# Snapshot release for WIP consumers
npm run release:snapshot        # writes 0.0.0-<sha> tarballs to repo root
```

## Adding a component (the golden path)

```
1. Open Claude Code in this repo — ds-authoring skill auto-activates.
2. Describe the component in plain language.
3. Claude scaffolds:
     packages/components/src/<Name>/
       ├─ <Name>.tsx          — forwardRef + variants
       ├─ <Name>.styles.ts    — StyleSheet, tokens only
       ├─ <Name>.stories.tsx  — Storybook CSF
       └─ index.ts
   Then wires the barrel + drafts feat(components): ... commit.
4. npm run check   →   npm run storybook   →   PR.
5. Merge to main   →   semantic-release publishes on merge.
```

### Porting from the legacy HTML/CSS DS

If you have a Web Components DS at `../designworkflow/`, the ds-authoring
skill has a specific porting recipe. Just ask Claude:

```
port the Button component from ../designworkflow/components/Button/
```

The skill translates HTML slots → RN props/subcomponents, CSS `:host([variant])`
→ discriminated string unions, `var(--ds-color-*)` → `@rn-ds/tokens` keys,
and proposes any missing token as its own `feat(tokens):` commit.

Reference example: `packages/components/src/Status/Status.tsx` was ported
end-to-end from `../designworkflow/components/Status/`.

## Release model (ahua-style)

```
merge feature PR to main
        │
        ▼
CI: typecheck + build + test
        │
        ▼
semantic-release per package (tools/release.sh walks each package)
  ├─ commit-analyzer reads Conventional Commits since last tag
  ├─ if this package's commitPaths were touched with feat/fix/perf/BREAKING:
  │     ├─ writes CHANGELOG.md
  │     ├─ bumps package.json
  │     ├─ pushes tag @rn-ds/<pkg>-vX.Y.Z
  │     ├─ creates GitHub Release with tarball asset
  │     └─ commits back to main with [skip ci]
  └─ else: silent no-op
```

Commit-type table + scope whitelist: see [AGENTS.md](./AGENTS.md).

## Downstream consumption

For an RN app that consumes this DS:

```json
// consumer-app/package.json
{
  "dependencies": {
    "@rn-ds/components": "1.4.0",
    "@rn-ds/tokens": "1.2.0"
  }
}
```

Install source (until we wire up an npm registry):

```bash
npm install https://github.com/<owner>/rn-ds/releases/download/@rn-ds/components-v1.4.0/components-1.4.0.tgz
```

### Wiring the MCP in the consumer app

Copy the `ds-manifest` MCP into the consumer's `.claude/mcp/` and register:

```json
// consumer-app/.claude/settings.json
{
  "mcpServers": {
    "ds-manifest": {
      "command": "node",
      "args": [".claude/mcp/ds-manifest/src/index.mjs"],
      "env": {
        "DS_MANIFEST_PATH": "./node_modules/@rn-ds/components/manifest.json"
      }
    }
  }
}
```

Then load the `ds-consumer` skill (also copied from this repo) and Claude
will query the MCP for available components + tokens before writing markup.

(A published `@rn-ds/manifest-mcp` package will replace the copy step later.)

## Docs deployment (Vercel)

`vercel.json` at the repo root wires the Storybook static build to Vercel.
Connect the repo in the Vercel dashboard:

1. **New Project** → pick the GitHub repo.
2. **Root Directory**: leave as `/` (repo root — `vercel.json` handles the rest).
3. **Framework Preset**: `Other` (Vercel autodetects from `vercel.json`).
4. **Node Version**: 20.x (set via `.nvmrc` + `engines`).
5. Save. First deploy fires.

### What versioning looks like

Once wired, Vercel gives you three URL flavors — this is the "versioning" the
docs get for free:

| URL flavor           | When it's created                                     | Example                                        |
|----------------------|-------------------------------------------------------|------------------------------------------------|
| **Production**       | Every push to `main`                                  | `rn-ds.vercel.app`                             |
| **Preview per branch** | Every push to any non-main branch                   | `rn-ds-git-<branch>-<owner>.vercel.app`        |
| **Preview per commit** | Every commit (immutable snapshot)                    | `rn-ds-<sha>-<owner>.vercel.app`               |
| **Preview per PR**     | PR opens/updates; Vercel bot comments the URL       | Same as commit URL, linked from PR             |

**Design review flow:** open a PR → Vercel bot posts the preview URL → the
designer clicks it and sees the new component live in the browser without
pulling code. This is the closest thing to "designer contributes without
touching code" that the ergonomics allow.

### Per-release tagged aliases (optional follow-up)

If you want a permanent URL per release tag (e.g.
`v1-0-0-rn-ds.vercel.app`), add a GitHub Action that runs on tag push and
calls `vercel --prod --alias <tag>-rn-ds.vercel.app`. Requires:

- `VERCEL_TOKEN` secret (from Vercel account settings)
- `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets (from `.vercel/project.json`
  after first CLI deploy)
- A hostname in the alias that you control (Vercel wildcard domains cost $)

Skip this until you actually want to compare v1.0.0 docs side-by-side with
v1.1.0. Commit-preview URLs cover most needs.

## Distribution

- **Now:** tarballs attached to each GitHub Release
  (`@rn-ds/components-v1.4.0` etc). Consumers install via
  `npm install <tarball URL>`.
- **Later:** flip on `@semantic-release/npm` in each `release.config.js` +
  add `NPM_TOKEN` to CI secrets. No structural changes.

## Repo layout

```
rn-ds/
├─ .claude/
│  ├─ mcp/ds-manifest/         MCP server (private workspace)
│  ├─ settings.json            registers the MCP for local dev
│  └─ skills/
│     ├─ ds-authoring/         for editing this repo
│     └─ ds-consumer/          for downstream app repos (copy over)
├─ .github/workflows/
│  ├─ ci.yaml                  PR checks: commitlint + typecheck + build + test
│  └─ release.yaml             semrel on push:main + snapshot dispatch
├─ apps/
│  └─ storybook/               @rn-ds/docs — storybook web
├─ packages/
│  ├─ components/              @rn-ds/components
│  └─ tokens/                  @rn-ds/tokens
├─ tools/
│  ├─ gen-manifest.mjs         react-docgen-typescript → dist + packages/components
│  └─ release.sh               per-package semrel walker + snapshot mode
├─ AGENTS.md                   commit-type/scope table
├─ LICENSE, README.md
├─ .nvmrc, .prettierrc.json, .prettierignore
├─ commitlint.config.js
├─ package.json                workspaces: packages/*, apps/*, .claude/mcp/*
└─ tsconfig.base.json
```

## The skill you'll actually use most

Open Claude Code in this repo. Say:

- *"add a Toast component with success/error variants"* → ds-authoring
  scaffolds it.
- *"port Card from ../designworkflow"* → ds-authoring reads the HTML/CSS
  source and drafts an RN version.
- *"add a `warning` color scale"* → ds-authoring edits
  `packages/tokens/src/design-tokens.json`, regenerates the typed exports,
  drafts a `feat(tokens):` commit.
- *"what does Button take?"* → ds-manifest MCP answers via `get_component`.
