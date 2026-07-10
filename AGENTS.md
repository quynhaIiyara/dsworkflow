# Agent contract

This file tells humans and AI agents (Claude Code, Cursor, whatever) how to
contribute to this repo. Read this before writing a commit.

## Commit convention

We use **Conventional Commits**. Commit messages drive semver via
`semantic-release` — nothing else does. There is no changeset file, no manual
version bump, no release PR.

Format:

```
<type>(<scope>): <subject>
```

### Types

| Type       | Bumps version? | Use for                                     |
|------------|----------------|---------------------------------------------|
| `feat`     | **minor**      | New component, new prop, new exported API   |
| `fix`      | **patch**      | Bug fix in shipped surface                  |
| `perf`     | **patch**      | Performance improvement in shipped surface  |
| `refactor` | none           | Internal restructuring, no behavior change  |
| `docs`     | none           | README, JSDoc, this file                    |
| `test`     | none           | Adding/updating tests                       |
| `chore`    | none           | Tooling, deps, config                       |
| `ci`       | none           | CI/CD workflows                             |
| `build`    | none           | Build system, tsup/bob config               |
| `revert`   | reverts prior  | Use `git revert` — semrel handles it        |

Add `BREAKING CHANGE:` in the commit body/footer to bump **major**. Include a
`## Migration` section explaining how consumers upgrade.

### Scopes (enforced by commitlint)

| Scope        | Owns                                             |
|--------------|--------------------------------------------------|
| `components` | Anything in `packages/components/`               |
| `tokens`     | Anything in `packages/tokens/`                   |
| `skills`     | `.claude/skills/*`                               |
| `mcp`        | `.claude/mcp/*`                                  |
| `ci`         | `.github/workflows/*`                            |
| `docs`       | `apps/storybook/*`, `README.md`, other docs      |
| `deps`       | Dependency bumps at root or shared               |
| `release`    | Reserved for semrel bot: `chore(release): ...`   |
| `repo`       | Root-level config, gitignore, tsconfig.base      |

### Examples

```
feat(components): add Toast with variants + auto-dismiss
fix(tokens): correct danger.solid to #E24C4B per Figma
refactor(components): extract useAnimatedValue hook
chore(deps): bump react-native to 0.76.3
ci(release): switch to fetch-depth: 0 for tags
```

## File layout for a new component

```
packages/components/src/<Name>/
├─ <Name>.tsx          — the component (forwardRef + displayName required)
├─ <Name>.styles.ts    — StyleSheet, imports tokens
├─ <Name>.test.tsx     — @testing-library/react-native smoke test
└─ index.ts            — re-exports the public API
```

Then add `export * from './<Name>';` to `packages/components/src/index.ts`.

## Token discipline

- Never hardcode colors, spacing, radii, or font sizes in a component. Import
  from `@rn-ds/tokens`.
- If a token is missing: add it to `packages/tokens/src/design-tokens.json`
  first, get the addition reviewed, then use it. Never add it in the same PR
  as a component that depends on it — token additions are a separate `feat(tokens)` commit.

## Accessibility (soft rule)

RN a11y automation is skipped in CI. But every interactive component MUST
accept and forward `accessibilityLabel` (and `accessibilityHint` where
useful). This is a code-review checklist item, not a CI rule.

## Two skills, one MCP

- **`ds-authoring`** (`.claude/skills/ds-authoring/`) — activate when
  editing this repo. Enforces the rules above at scaffolding time.
- **`ds-consumer`** (`.claude/skills/ds-consumer/`) — copy into a downstream
  RN app's `.claude/skills/`. Teaches Claude to query the manifest MCP
  before writing markup that consumes `@rn-ds/*`.
- **`ds-manifest` MCP** (`.claude/mcp/ds-manifest/`) — auto-registered here
  via `.claude/settings.json`. Exposes `list_components`, `get_component`,
  `get_tokens`, `get_versions`. Reads `dist/manifest.json` (dev) or
  `./node_modules/@rn-ds/components/manifest.json` (downstream).

## Release mechanics

- **Merge to `main`** → semantic-release runs per package.
- Only packages whose files changed (per `commitPaths`) release.
- Only `feat` / `fix` / `perf` / `BREAKING CHANGE:` bump. Everything else is
  silent no-op.
- Release bot commits back to `main` with `[skip ci]` — the `chore(release):`
  scope is reserved for this.
- Snapshot release: `gh workflow run release.yaml -f publish_snapshot=true`
  publishes `0.0.0-<sha>` tarballs for WIP consumption.
