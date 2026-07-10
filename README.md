# rn-ds

React Native design system with an ahua-style release pipeline and a
Claude-Code-native authoring surface.

**Scope:** React Native only. Presentational + interactive primitives. Slot
compositions. Not a component-with-behavior-behind-a-headless-lib factory.

**Non-scope:** Web components, framework-agnostic wrappers, Storybook web,
a11y automation in CI (soft-enforced in review — see AGENTS.md).

## Packages

| Package               | What it ships                                          |
|-----------------------|--------------------------------------------------------|
| `@rn-ds/tokens`       | design-tokens.json → typed exports (colors, spacing, radii, typography) |
| `@rn-ds/components`   | Button, Status, … built with react-native-builder-bob  |
| `@rn-ds/icons`        | *(deferred)* SVGs → generated `react-native-svg` components |

Each package versions independently via `semantic-release` with per-package
`commitPaths` and `tagFormat`.

## Quick start

```bash
npm install                     # install workspaces
npm run typecheck               # tsc across packages
npm run build                   # bob build components, tsc emit tokens
```

## Adding a component (the golden path)

1. Open Claude Code in this repo — the `ds-authoring` skill activates
   automatically from `.claude/skills/`.
2. Describe the component in natural language.
3. Claude scaffolds `packages/components/src/<Name>/` and drafts a
   Conventional Commit (`feat(components): …`).
4. `npm run check` — typecheck + build.
5. Open the PR. Merge when reviewed.
6. Semantic-release publishes on merge to `main`. No release PR, no ceremony.

See [AGENTS.md](./AGENTS.md) for the commit convention and file-layout rules.

## Release model

```
merge to main
    │
    ▼
CI: lint + typecheck + build + test
    │
    ▼
semantic-release per package
  ├─ commit-analyzer reads Conventional Commits since last tag
  ├─ if this package's commitPaths were touched with feat/fix/perf/BREAKING:
  │     ├─ writes packages/<pkg>/CHANGELOG.md
  │     ├─ bumps packages/<pkg>/package.json
  │     ├─ pushes tag @rn-ds/<pkg>-vX.Y.Z
  │     ├─ creates GitHub Release with tarball asset
  │     └─ commits back to main with [skip ci]
  └─ else: silent no-op
```

Snapshot releases (WIP consumption): `gh workflow run release.yaml -f publish_snapshot=true`.

## Distribution

For now: GitHub Release tarball asset. Consumers install via
`npm install https://github.com/<owner>/<repo>/releases/download/<tag>/<pkg>.tgz`.

Swap to public npm / private registry / GitHub Packages later by wiring in
`@semantic-release/npm` in each package's `release.config.js` and adding
`NPM_TOKEN` to CI secrets. Structure unchanged.
