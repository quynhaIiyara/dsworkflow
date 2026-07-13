# Component ledger — rn-ds (FieldForce Tier 1)

> Mirror of the FieldForce Tier 1 primitives from
> [`yara-atom-field-force/design/Component-Ledger.md`](../../../yara-atom-field-force/design/Component-Ledger.md).
> The FieldForce ledger is upstream truth for the language (component names,
> HTML status, states). This copy is the source of truth for the RN column —
> the FieldForce ledger's RN column is expected to trail rn-ds releases.
>
> **The rule:** rn-ds may only expose Tier 1 primitives that appear on this
> table. Tier 2 FieldForce domain components (ServiceCard, CompletionForm,
> etc.) do not belong here — they live in the downstream app repo. If a
> shipped rn-ds surface is not on this table, it is an off-ledger extra
> (see below) and callers should assume it is unsupported by the FieldForce
> design language.

---

## How to read the status columns

**HTML**: the FieldForce design surface (`components.css` and the rendered
`FieldForce-Design-System.html`). Copied verbatim from upstream. Do not
update here — update upstream.

**RN**: the production component in `@rn-ds/components`.
- `Not started`: named in the ledger, no RN component yet.
- `In progress`: on an open branch or PR.
- `Done`: shipped in a released `@rn-ds/components` version, name matches
  this ledger.

**States**: the states verified for the component (empty, loading, error,
offline, success, and any component-specific ones). Copied from upstream.

When you build or change a component, update its row in the same commit
(`AGENTS.md`, "File layout for a new component"). The git history of this
file is the RN change log.

---

## Tier 1 — Primitives

| Component   | HTML  | RN          | States                                  | Notes                                                                                                    |
|-------------|-------|-------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------|
| Button      | Built | Done        | green / blue / neutral / destructive    | Tone encodes meaning: green = SA acts, blue = system finalises. 8px radius, not pill.                    |
| IconButton  | Built | Done        | default / pressed                       | Call, message, map, 3-dot trigger. Consumer supplies the icon element; 44×44 hit target.                 |
| Text        | Built | Done        | full type scale                         | Consumes `typography.role.*` from `@rn-ds/tokens`. Colour defaults per role, overrideable via colour token. |
| Card        | Built | Done        | default                                 | White surface, no coloured edges. `Card.Row` is an alias for the standalone `Row` primitive.             |
| Row         | Built | Done        | default / pressed                       | Single list row. Optional leading icon slot. Pass `onPress` to render as `Pressable`.                    |
| Badge       | Built | Done        | count / label                           |                                                                                                          |
| Chip        | Built | Done        | selectable / removable                  | Filter chips, brand chips. Selected state = `green-pale` wash + green border.                            |
| Input       | Built | Done        | default / focus / error                 | Kit input is white + hairline + green focus ring. Optional leading icon and trailing slot; field-level error with red helper. |
| Textarea    | Built | Done        | default / limit reached                 | Char limits: observations 1000, advisory 500. Character counter turns red on limit reached.              |
| ChoiceList  | Built | Done        | single-choice                           | Flat hairline rows, leading 22px radio filling green when selected. Options may be individually disabled.|
| Checkbox    | Built | Done        | on / off                                | Consent toggle on login. Green fill when checked; optional string or ReactNode label.                    |
| Stepper     | Built | Done        | default / min / max                     | Quantity in bags. Optional `format` prop for value display.                                              |
| BottomSheet | Built | Done        | open / closed                           | Quick actions, short choices.                                                                            |
| Dialog      | Built | Not started | two-button confirm                      | Accept, reject, start, complete, log out.                                                                |
| Tabs        | Built | Done        | segmented + subtabs                     | Two variants: `segmented` (hairline background + white raised segment for active) and `pills` (ink pill for active). |
| TabBar      | Built | Done        | 4 tabs, active state                    | Home, Schedules, Requests, History. Active tab in green. Consumer supplies icons; optional numeric badge.|
| Calendar    | Built | Done        | disabled / coloured days                | Month grid. Today ring + selected fill + optional `markedDates` dot. Prev/next when `onMonthChange` is set.|
| Banner      | Built | Done        | offline / permission / helper           | Placement encodes severity.                                                                              |
| Toast       | Built | Not started | neutral dark, bottom                    | Never colour-coded.                                                                                      |
| EmptyState  | Built | Not started | default                                 | Icon, one line, optional action. Illustration slot filled by downstream app.                             |
| Skeleton    | Built | Not started | default                                 | Loading placeholder.                                                                                     |
| SearchField | Built | Done        | default / results / clear               | Composes `Input` with a leading search icon slot, a trailing clear affordance, and an optional result count meta line. |
| StatusChip  | Built | Done        | 7 fixed statuses                        | Confirmed, In progress, Rejected, Cancelled, Auto-cancelled, Completed, Partially completed. Colour tone locked per `design.md`: green / blue / red / red / red / neutral / amber. |

## Foundations

| Foundation                | HTML  | RN                                    | Notes                                                                                          |
|---------------------------|-------|---------------------------------------|------------------------------------------------------------------------------------------------|
| Tokens                    | Built | Done                                  | Colour, spacing, radii, one shadow, opacity, typography scale (`@rn-ds/tokens`).                |
| Type scale                | Built | Done                                  | Ten roles (headline / title / section / subtitle / body / label / caption / tab / eyebrow / cta) live at `typography.role.*`. `Text` primitive will consume them. |
| Eyebrow + dot             | Built | Partial (in Card.Eyebrow)             | The category tag. Replaces coloured card edges. Currently only via Card compound.               |
| Status colour vocabulary  | Built | Done                                  | The fixed StatusChip mapping.                                                                  |
| Icon set                  | Built (Lucide) | Not shipped                  | rn-ds ships no Icon component. Consumers pass their own icon elements (any library).           |
| Illustrations             | Built | Not shipped                           | Yara-branded SVGs live in the downstream FieldForce app repo, not in rn-ds.                    |

---

## rn-ds off-ledger extras

Shipped components in `@rn-ds/components` that are **not** on the FieldForce
Tier 1 ledger. FieldForce screens should not compose these. They exist for
non-FieldForce consumers or predate the ledger port.

| Component | Path                          | Status                        | Note                                                                             |
|-----------|-------------------------------|-------------------------------|----------------------------------------------------------------------------------|
| Table     | `src/Table/Table.tsx`         | Kept as extra                 | Not used by FieldForce screens. Retained for other tenants.                      |
| Avatar    | `src/Avatar/Avatar.tsx`       | Kept as extra                 | FieldForce uses avatars inside Tier 2 (`ServiceCard`, `.farmer-card .fc-av`), not as a standalone primitive. Retained for other tenants. |

---

## When a flow adds a component

Follow `AGENTS.md` at the repo root:

1. Cut a `feat/components-<slug>` branch from `origin/main`.
2. Scaffold under `packages/components/src/<Name>/` per the "File layout for
   a new component" section (`<Name>.tsx`, `.styles.ts`, `.stories.tsx`,
   `index.ts`).
3. Import tokens from `@rn-ds/tokens`. Never hardcode colour, spacing, radii,
   or font sizes.
4. Add `export * from './<Name>';` to `packages/components/src/index.ts`.
5. Update this ledger row (RN column → `In progress`, then `Done` when the
   component is released) in the same commit as the component.
6. Commit as `feat(components): add <Name>` (Conventional Commits — the
   `feat` type is what tells `semantic-release` to bump the minor).

If the component is not on the Tier 1 table above, it does not belong in
rn-ds. Domain components live in the downstream app.
