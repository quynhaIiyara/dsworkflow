---
name: ds-consumer
description: Use rn-ds components correctly in a downstream React Native app. Query the ds-manifest MCP to discover components + props + tokens BEFORE writing markup, so generated JSX matches what actually exists in the pinned version. Load when the user asks to build UI in an RN app that consumes @rn-ds/components, @rn-ds/tokens, or @rn-ds/icons.
---

# ds-consumer

You are helping build UI in a React Native app that consumes **rn-ds**
(`@rn-ds/components`, `@rn-ds/tokens`). This skill applies in **downstream
apps** — not in the rn-ds repo itself. If you are editing files under
`packages/components/` or `packages/tokens/`, use `ds-authoring` instead.

**No icon package.** The DS does not ship icons or fonts. If the consumer
needs an icon, pull it from a general library (e.g. `lucide-react-native`,
`react-native-vector-icons`) OR bespoke SVGs in the app. Do not fabricate an
`@rn-ds/icons` import — it does not exist.

**Non-goals of this skill:** modifying the DS itself, styling components in
ways that override token values, deep-importing from internal paths.

## The golden path

Given a request like *"add a settings screen with a header, three action
buttons, and a status chip,"* do this in order:

1. **Discover what exists** — call the `ds-manifest` MCP. Never guess prop
   names, variant strings, or token keys. See "Using the MCP" below.
2. **Pick components** by matching intent to the manifest. If nothing fits,
   say so out loud — do not silently roll a new component in the consumer
   app. The consumer app is not where new DS primitives live.
3. **Write markup** using the barrel imports (`@rn-ds/components`,
   `@rn-ds/tokens`, `@rn-ds/icons`). Never deep-import.
4. **Use tokens** for any color/spacing/font in your own layout code — never
   hardcode. Grab them from `@rn-ds/tokens`.
5. **Wire accessibility** — pass `accessibilityLabel` to every interactive
   component. Screen readers depend on it.

## Using the ds-manifest MCP

The `ds-manifest` MCP exposes 4 tools:

| Tool | When to call |
|---|---|
| `list_components` | First call in any new feature. Returns names, descriptions, source paths, prop counts. Cheap. |
| `get_component` | Before writing JSX for a specific component. Returns full prop metadata: types, required flag, defaults, JSDoc. |
| `get_tokens` | Before writing StyleSheet code in the consumer app. Returns the whole token tree — pick from it, never invent. |
| `get_versions` | If the user asks "what version am I on" or when advising an upgrade. |

**Cadence:** call `list_components` once at the start of a feature.
Call `get_component` per component you're about to use. Call `get_tokens`
once when you first touch styles.

**If the MCP is not registered in this app**, help the user register it.
`@rn-ds/components` ships `manifest.json` in its tarball
(`./node_modules/@rn-ds/components/manifest.json`), which is the only data
the server needs.

Registration approaches, in order of preference:

**1. `@rn-ds/manifest-mcp` (once published)** — cleanest, coming soon.
Consumer runs `npm i -D @rn-ds/manifest-mcp` and adds to
`.claude/settings.json`:

```json
{
  "mcpServers": {
    "ds-manifest": {
      "command": "node",
      "args": ["./node_modules/@rn-ds/manifest-mcp/src/index.mjs"],
      "env": {
        "DS_MANIFEST_PATH": "./node_modules/@rn-ds/components/manifest.json"
      }
    }
  }
}
```

**2. Vendored copy (current interim)** — until the MCP package is published,
copy `.claude/mcp/ds-manifest/` from the rn-ds repo into the consumer's
`.claude/mcp/ds-manifest/`. Register:

```json
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

**3. Fallback (no MCP)** — if the consumer refuses to install anything, you
can still read `manifest.json` directly from disk with the Read tool during
your session. Slower and no autocompletion but functional.

## Import rules

Good:

```tsx
import { Button, Status } from '@rn-ds/components';
import { colors, spacing } from '@rn-ds/tokens';
```

Bad (Claude will refuse):

```tsx
// deep imports — internal, not part of the public API
import { Button } from '@rn-ds/components/lib/module/Button';
import { colors } from '@rn-ds/tokens/src/colors';

// rehydrating things that already exist as components
const MyCustomButton = () => <TouchableOpacity>...</TouchableOpacity>;
// ↑ if @rn-ds/components has Button and it doesn't fit, propose extending
//   the DS. Do not silently duplicate primitives in the app.

// bypassing the token system
const styles = StyleSheet.create({ container: { padding: 12 } });
// ↑ 12 is not a token — use spacing.sm (=8) or spacing.md (=16).
```

## Styling in the consumer app

The DS provides tokens; consumers use them for layout + any bespoke UI. The
consumer app's StyleSheets should read like:

```tsx
import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography } from '@rn-ds/tokens';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.neutral.background,
    padding: spacing.lg,
  },
  section: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  heading: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.semibold,
    color: colors.neutral.strong,
  },
});
```

If the design calls for a token that doesn't exist:

1. Do not invent a value in the consumer app.
2. Tell the user which token is missing.
3. Offer to open a PR against the rn-ds repo to add it (`feat(tokens): ...`).

## Version pinning

- Pin `@rn-ds/*` in `package.json` with an exact version, not `^` — DS
  breakage should be intentional, not surprise you on `npm install`.
- When advising an upgrade, run `get_versions` and read the changelogs
  (link in the GitHub Release for the pinned tag).

## Accessibility (RN-specific)

Every interactive DS component accepts `accessibilityLabel`. Pass one on
every consumer instance where the visible label wouldn't be enough:

```tsx
<Button label="✕" accessibilityLabel="Close" onPress={onClose} />
<Icon name="chevron-right" accessibilityLabel="Open details" />
```

If you have a screen with multiple actions of the same type, spell them out:

```tsx
<Button label="Edit" accessibilityLabel="Edit profile" />
<Button label="Edit" accessibilityLabel="Edit password" />
```

## What NOT to do

- Do not re-implement a DS primitive in the consumer app because "it was
  faster." That is exactly how design systems die.
- Do not fork DS component styles by wrapping in a styled container. If the
  DS component doesn't fit, open an issue or PR.
- Do not upgrade `@rn-ds/*` in the same PR as a feature change. Upgrades are
  their own PR so regressions are bisectable.

## Escape hatches

- **Layout composition beyond what DS offers** — that's fine, that's the
  consumer's job. Compose DS primitives with `View`, `ScrollView`, `Pressable`
  freely.
- **Icons** — the DS does not ship them. Use a general RN icon library
  (`lucide-react-native` is the current default) or bespoke SVGs via
  `react-native-svg`. Style with `@rn-ds/tokens` colors.
- **Business logic** — belongs in the consumer app. Do not push behavior
  down into the DS.
