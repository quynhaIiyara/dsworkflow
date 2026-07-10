---
name: ds-authoring
description: Author components and tokens in the rn-ds repo. Use this when a designer or engineer wants to add or edit a React Native component, add a token, or prepare a PR against this repo. Enforces token discipline, file layout, and Conventional Commit scoping so CI passes on first try.
---

# ds-authoring

You are helping a designer or engineer contribute to **rn-ds**, a React Native
design system. The repo publishes two packages: `@rn-ds/tokens` and
`@rn-ds/components`. An asset pipeline (icons, fonts) is deliberately
deferred — do not scaffold one without asking.

**Non-goals of this skill:** web-only patterns, Storybook web setup, framework
migration. Stay in RN.

## The golden path

Given a natural-language request like *"add a Toast that slides in from the top
with success/error variants"*, do this in order:

1. **Check the branch.** Run `git branch --show-current`. If the current
   branch's scope doesn't match the work (e.g., you're on
   `chore/drop-icons` but asked to rewrite tokens), STOP and propose a new
   branch off `origin/main` before writing any code. See "Branch hygiene"
   below.
2. **Read `AGENTS.md`** at the repo root. It has the current commit types +
   scopes. If it disagrees with anything below, `AGENTS.md` wins.
3. **Read the tokens** at `packages/tokens/src/design-tokens.json`. If the
   component needs a color/spacing/radius/font that doesn't exist, propose a
   token addition **as a separate step** — never inline a hex/px number.
4. **Pick a reference component** from `packages/components/src/`. `Button/`
   is the canonical example for interactive components. `Status/` is the
   canonical example for presentational chips. `Table/` is the canonical
   example for compound components with subcomponents.
5. **Scaffold the component** using the file layout below. This includes a
   `.stories.tsx` file — every shipped component has one; do not skip it.
6. **Wire the barrel export** in `packages/components/src/index.ts`.
7. **Draft the Conventional Commit** using the correct scope.
8. **Show the diff to the user, ask for confirmation, then commit.**

## Branch hygiene (do this before you touch files)

Every unit of work lands on a branch whose name matches its scope. Do not
stack unrelated work on top of an in-flight branch — reviewers and
`semantic-release` (which infers per-package releases from commit paths on
merge to `main`) both assume clean, single-purpose branches.

Before staging any change:

```bash
git branch --show-current
git status
```

If the current branch is `main` OR its name's scope prefix (`feat/foo`,
`chore/bar`) does not match the scope of the requested change, cut a new
branch **from `origin/main`**:

```bash
git fetch origin main
git stash push -u -m "wip" 2>/dev/null   # only if the tree is dirty
git checkout main && git merge --ff-only origin/main
git checkout -b <type>/<short-slug>       # e.g. feat/tokens-flat-palette
git stash pop 2>/dev/null                 # if you stashed above
```

Branch name = commit type + slug describing the work (`feat/tokens-flat-palette`,
`fix/button-focus-ring`, `docs/color-swatches`). One branch = one PR = one
merged surface area.

If in doubt, ASK the user before continuing. Don't guess and commit onto the
wrong branch — reverting a merge is much more expensive than a 20-second
question.

## File layout (non-negotiable)

```
packages/components/src/<Name>/
├─ <Name>.tsx          — the component
├─ <Name>.styles.ts    — StyleSheet, imports only from @rn-ds/tokens
├─ <Name>.stories.tsx  — @storybook/react stories (see pattern below)
└─ index.ts            — re-exports the public API + types
```

Tests are aspirational — there is no jest config in this repo yet, and the
`test` script is a no-op. **Do not add `<Name>.test.tsx` files** until test
infra lands. When tests do arrive, they'll go alongside the stories file.

### Stories file pattern

Every component ships a `.stories.tsx` that follows the shape used by
`Button.stories.tsx`, `Status.stories.tsx`, `Table.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Foo } from './Foo';

const meta: Meta<typeof Foo> = {
  title: 'Components/Foo',
  component: Foo,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: { description: { component: 'One-sentence what-and-when.' } },
  },
  args: { /* default args */ },
  argTypes: {
    variant: { control: 'select', options: ['a', 'b'] },
  },
};

export default meta;
type Story = StoryObj<typeof Foo>;

export const Default: Story = {};
export const OtherVariant: Story = { args: { variant: 'b' } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Foo variant="a" />
      <Foo variant="b" />
    </div>
  ),
};
```

Notes on the stories file:
- Storybook runs on the web (`@storybook/react`, not `@storybook/react-native`).
  Layout wrappers in `render` use `<div>`, not `<View>`. The components
  themselves are RN and render through the web adapter.
- Include at least: a `Default` story, one story per variant/tone, and an
  `AllVariants` (or `AllTones`, `AllSizes`) gallery render.
- For stateful demos (Modal, BottomSheet, controlled inputs), define a small
  local `FooDemo` component inside the stories file that owns the state, and
  use it as the story's `render`.

## Component authoring rules

1. **`forwardRef` + `displayName`** on every component. No exceptions, even for
   presentational-only. Consumers rely on refs for animation and focus.

   ```tsx
   export const Foo = forwardRef<View, FooProps>(function Foo(props, ref) { ... });
   Foo.displayName = 'Foo';
   ```

2. **Props type is exported** — `export type FooProps = { ... }`. Also export
   any variant / size string-literal unions (`export type FooVariant = ...`).

3. **Variants are string-literal unions**, not booleans. `variant: 'primary' |
   'ghost'` beats `primary?: boolean; ghost?: boolean`.

4. **`accessibilityRole` is always set** on the outermost interactive element.
   `accessibilityLabel` is always accepted as a prop and forwarded. If the
   consumer doesn't pass one, fall back to `label` or a sensible default.

5. **Never hardcode** hex colors, px numbers, or font sizes. Import from
   `@rn-ds/tokens`. If a token is missing, propose adding it and pause.

6. **Compound composition uses subcomponents**, not deeply-nested props:

   ```tsx
   <Card>
     <Card.Header title="Foo" />
     <Card.Body>...</Card.Body>
   </Card>
   ```

   Attach subcomponents with `Card.Header = CardHeader` etc.

7. **No inline styles.** Everything goes through `StyleSheet.create` in
   `<Name>.styles.ts`. Two exports if needed: `styles` for the container,
   `labelStyles` for the label. Follow Button.styles.ts pattern.

## Token authoring rules

1. Every top-level group (`colors`, `spacing`, `radii`, `typography`,
   `opacity`) is auto-emitted as a typed TS constant by `scripts/build.mjs`.
   Don't hand-edit `packages/tokens/src/*.ts` — they are generated.

2. Colors are **semantic**, not raw. `colors.brand.solid` and
   `colors.brand.onSolid` (foreground on solid). Not `colors.purple500`.

3. Adding a token = `feat(tokens): add colors.foo.bar` as its own commit. Do
   not bundle token additions with component additions — they release
   independently and consumers may want to pin them separately.

## Conventional Commit format

```
<type>(<scope>): <subject>
```

**Scopes** (enforced by commitlint):
- `components` — anything under `packages/components/`
- `tokens` — anything under `packages/tokens/`
- `skills`, `mcp`, `ci`, `deps`, `release`, `repo`, `docs` — see AGENTS.md

**Types that cut releases:** `feat` (minor), `fix` (patch), `perf` (patch).
Add `BREAKING CHANGE:` in the body to bump major.

Good:
```
feat(components): add Toast with variants + auto-dismiss
fix(tokens): correct danger.solid to #E24C4B per Figma
feat(components): add Card.Header subcomponent

BREAKING CHANGE: Card no longer accepts `title` prop directly.
Migrate to `<Card.Header title="..." />`.
```

Bad (Claude will refuse):
```
add toast              (no type, no scope)
feat: toast            (missing scope)
feat(button): ...      (scope not in enum — use `components`)
update stuff           (freeform — commitlint will reject)
```

## When the user is a designer (not an engineer)

- Explain what you're doing in plain language before you write code.
- Show them the token you're picking and why. Ask if it matches Figma.
- If you added a token, tell them and explain semver impact (minor bump).
- When done, draft the PR title/body in plain English AND the Conventional
  Commit line. Let them copy-paste either.

## Porting from the legacy HTML/CSS design system

If the user asks to port a component from the sibling repo
`../designworkflow/` (Web Components: `index.html` + `style.css` + `README.md`
per component), follow this path:

1. **Read the source** — `../designworkflow/components/<Name>/index.html`,
   `style.css`, and `README.md` (if present). The HTML gives you the DOM
   structure and slot names. The CSS gives you variant selectors (usually
   `:host([variant="foo"])`) and token references (`var(--ds-color-...)`).

2. **Map CSS custom properties → tokens.** Legacy tokens are
   `--ds-color-*`, `--ds-space-*`, `--ds-radius-*`, `--ds-font-*`.
   Cross-reference against `packages/tokens/src/design-tokens.json` to find
   the equivalent. If nothing matches, propose a token addition FIRST as a
   separate `feat(tokens):` commit — do not inline a hex.

3. **Translate HTML slots → RN patterns.** `<slot>` becomes `children` or a
   named prop. `<slot name="foo">` becomes a named prop (`foo: ReactNode`) OR
   a compound subcomponent (`Card.Header`). Prefer subcomponents when the
   consumer would nest more than a single child.

4. **Translate CSS variants → discriminated string unions.**
   `:host([variant="danger"])` in CSS becomes `variant: 'danger' | ...` in
   the TS prop union, then a `variant_danger` key in `<Name>.styles.ts`.

5. **Drop web-only concerns.** `letter-spacing` on RN Text is fine.
   `text-transform: uppercase` isn't a style prop in RN — call
   `label.toUpperCase()` in the JSX instead (see `Status.tsx` for the
   pattern). `line-height` is a number in RN (usually `fontSize * ratio`).
   Ignore `:hover`, `:focus-visible`, `cursor:` — those don't exist in RN.
   Use `Pressable`'s `pressed`/`hovered` state instead.

6. **Draft the commit** as `feat(components): port <Name> from legacy DS`.
   In the body, note which legacy variants map to which RN variants, and any
   simplifications made.

Reference example: `Status.tsx` in this repo was ported from
`../designworkflow/components/Status/`. Compare the two files to see the
patterns above applied end-to-end (8 legacy variants collapsed into 5 RN
tones via a `variantToTone` map).

## Escape hatches

- **Behavior that RN's built-in components can't express** (focus trap, gesture
  choreography beyond `Pressable`): pull in a headless lib. Preferred:
  `@react-native-community/*` or Radix-primitives-equivalent when it exists.
  If you introduce a runtime dep, flag it: it counts as a `feat` and needs
  review of bundle-size impact.

- **A one-off style that doesn't warrant a token** (e.g. a specific animated
  spring config): keep the constant inline in the `<Name>.styles.ts` file
  with a `// justified: ...` comment explaining why it isn't a token.

- **Icon-shaped slots** (leading glyph on a banner/row/button): rn-ds ships
  no Icon component and no asset pipeline. Accept an optional
  `icon?: ReactNode` prop so the consumer supplies their own element from
  whatever icon library they use downstream. Do not hardcode a specific
  icon dep. For unavoidable glyphs (dismiss ×), use a Unicode character in
  `<Text>` and treat it as a temporary shim.

- **Safe-area handling**: do NOT reach for `react-native-safe-area-context`
  inside a component — it would force a new peer dep on every consumer.
  Instead, use a fixed bottom padding (e.g. `spacing.s7`) and document
  that consumers on notched devices should wrap their own content with
  safe-area padding.

## Before you commit

Run:
```bash
npm run typecheck
npm run build
```

If either fails, do not commit. Ask the user how to proceed.
