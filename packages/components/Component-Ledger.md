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
| IconButton  | Built | Not started | default / pressed                       | Call, message, map, 3-dot trigger.                                                                       |
| Text        | Built | Not started | full type scale                         | Consumes `typography.role.*` from `@rn-ds/tokens`.                                                       |
| Card        | Built | Done        | default                                 | White surface, no coloured edges. Currently exposes `Card.Row` as a compound; standalone `Row` pending.  |
| Row         | Built | Not started | default / pressed                       | Single list row. Blocked on promoting `Card.Row` to a top-level primitive.                               |
| Badge       | Built | Done        | count / label                           |                                                                                                          |
| Chip        | Built | Not started | selectable / removable                  | Filter chips, brand chips.                                                                               |
| Input       | Built | Not started | default / focus / error                 | Kit input is white + hairline + green focus ring.                                                        |
| Textarea    | Built | Not started | default / limit reached                 | Char limits: observations 1000, advisory 500.                                                            |
| ChoiceList  | Built | Not started | single-choice                           | Flat hairline rows, leading 22px radio filling green when selected.                                      |
| Checkbox    | Built | Not started | on / off                                | Consent toggle on login.                                                                                 |
| Stepper     | Built | Not started | default / min / max                     | Quantity in bags.                                                                                        |
| BottomSheet | Built | Done        | open / closed                           | Quick actions, short choices.                                                                            |
| Dialog      | Built | Not started | two-button confirm                      | Accept, reject, start, complete, log out.                                                                |
| Tabs        | Built | Not started | segmented + subtabs                     | Details/Observations (segmented, history-only); Photos/Videos (ink-pill subtabs).                        |
| TabBar      | Built | Not started | 4 tabs, active state                    | Home, Schedules, Requests, History.                                                                      |
| Calendar    | Built | Not started | disabled / coloured days                |                                                                                                          |
| Banner      | Built | Done        | offline / permission / helper           | Placement encodes severity.                                                                              |
| Toast       | Built | Not started | neutral dark, bottom                    | Never colour-coded.                                                                                      |
| EmptyState  | Built | Not started | default                                 | Icon, one line, optional action. Illustration slot filled by downstream app.                             |
| Skeleton    | Built | Not started | default                                 | Loading placeholder.                                                                                     |
| SearchField | Built | Not started | default / results / clear               | Result count + clear control.                                                                            |
| StatusChip  | Built | Done (as Status, rename pending) | 7 fixed statuses      | Confirmed, In progress, Rejected, Cancelled, Auto-cancelled, Completed, Partially completed. Currently exported as `Status`; breaking rename to `StatusChip` planned. |

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
