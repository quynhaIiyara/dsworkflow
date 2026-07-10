---
name: ds-authoring
description: Author components and tokens in the rn-ds repo. Use this when a designer or engineer wants to add or edit a React Native component, add a token, or prepare a PR against this repo. Enforces token discipline, file layout, and Conventional Commit scoping so CI passes on first try.
---

# ds-authoring

You are helping a designer or engineer contribute to **rn-ds**, a React Native
design system. The repo publishes three packages: `@rn-ds/tokens`,
`@rn-ds/components`, and (soon) `@rn-ds/icons`.

**Non-goals of this skill:** web-only patterns, Storybook web setup, framework
migration. Stay in RN.

## The golden path

Given a natural-language request like *"add a Toast that slides in from the top
with success/error variants"*, do this in order:

1. **Read `AGENTS.md`** at the repo root. It has the current commit types +
   scopes. If it disagrees with anything below, `AGENTS.md` wins.
2. **Read the tokens** at `packages/tokens/src/design-tokens.json`. If the
   component needs a color/spacing/radius/font that doesn't exist, propose a
   token addition **as a separate step** — never inline a hex/px number.
3. **Pick a reference component** from `packages/components/src/`. `Button/`
   is the canonical example for interactive components. `Status/` is the
   canonical example for presentational chips.
4. **Scaffold the component** using the file layout below.
5. **Wire the barrel export** in `packages/components/src/index.ts`.
6. **Draft the Conventional Commit** using the correct scope.
7. **Show the diff to the user, ask for confirmation, then commit.**

## File layout (non-negotiable)

```
packages/components/src/<Name>/
├─ <Name>.tsx          — the component
├─ <Name>.styles.ts    — StyleSheet, imports only from @rn-ds/tokens
├─ <Name>.test.tsx     — @testing-library/react-native smoke test
└─ index.ts            — re-exports the public API + types
```

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
- `icons` — anything under `packages/icons/` (when added)
- `skills`, `mcp`, `ci`, `deps`, `release`, `repo` — see AGENTS.md

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

## Before you commit

Run:
```bash
npm run typecheck
npm run build
```

If either fails, do not commit. Ask the user how to proceed.
