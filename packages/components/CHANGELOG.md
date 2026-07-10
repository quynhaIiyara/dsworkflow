## [2.3.1](https://github.com/quynhaIiyara/dsworkflow/compare/@rn-ds/components-v2.3.0...@rn-ds/components-v2.3.1) (2026-07-10)

### Bug Fixes

* **docs:** enable remark-gfm so MDX pipe tables render as tables ([6162e54](https://github.com/quynhaIiyara/dsworkflow/commit/6162e548f71d7be88d6d4ed93540472cdfbee570))

## [2.3.0](https://github.com/quynhaIiyara/dsworkflow/compare/@rn-ds/components-v2.2.0...@rn-ds/components-v2.3.0) (2026-07-10)

### Features

* **components:** add Card compound primitive ([00959ec](https://github.com/quynhaIiyara/dsworkflow/commit/00959ec488baa489b026a68b7655cfa3fa855505))

## [2.2.0](https://github.com/quynhaIiyara/dsworkflow/compare/@rn-ds/components-v2.1.0...@rn-ds/components-v2.2.0) (2026-07-10)

### Features

* **components:** add Avatar, Badge, Banner, BottomSheet ([9c753f5](https://github.com/quynhaIiyara/dsworkflow/commit/9c753f5b8c3b7cedaa7304800256efac2de301c8))

## [2.1.0](https://github.com/quynhaIiyara/dsworkflow/compare/@rn-ds/components-v2.0.0...@rn-ds/components-v2.1.0) (2026-07-10)

### Features

* **components:** add compound Table with striped/size variants ([787f94f](https://github.com/quynhaIiyara/dsworkflow/commit/787f94f2db2c8f18ea2a32547f1f1edad7b898f5))
* **docs:** render live CHANGELOG.md on docs, untrack storybook-static ([e449c7a](https://github.com/quynhaIiyara/dsworkflow/commit/e449c7ab887432c45c920f64f7b77b33653470e5))

### Bug Fixes

* **ci:** unblock release commits + fail loud on semrel errors ([c6cb4c0](https://github.com/quynhaIiyara/dsworkflow/commit/c6cb4c0e405a6f4e8e2d519c736625d35a113380))
* **components:** use green for Button primary + ghost variants ([83d2f04](https://github.com/quynhaIiyara/dsworkflow/commit/83d2f04accb6e3e9da7ebf10f4e9be4c9b5bafa6))

## [2.0.0](https://github.com/quynhaIiyara/dsworkflow/compare/@rn-ds/components-v1.0.0...@rn-ds/components-v2.0.0) (2026-07-10)

### ⚠ BREAKING CHANGES

* **components:** Button and Status now consume the flat token palette
(feat(tokens)! in the same release). Behavior is otherwise unchanged, but
colors shift visibly:
* **tokens:** every top-level token key is renamed.

## Migration

- colors.brand.solid       -> colors.blue
- colors.brand.onSolid     -> colors.white
- colors.neutral.subtle    -> colors.hairline
- colors.neutral.strong    -> colors.ink
- colors.neutral.muted     -> colors.inkMuted
- colors.danger.solid      -> colors.red
- colors.success.solid     -> colors.green
- colors.warning.solid     -> colors.amber
- colors.info.solid        -> colors.blue
- spacing.xs/sm/md/lg/xl   -> spacing.s1/s2/s4/s6/s7
- radii.sm/md/lg           -> radii.chip/btn/card

shadow.soft is a React Native shadow object (shadowColor/Offset/Opacity/
Radius + elevation); the source CSS had two layers so only the outer one is
represented.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>

### Features

* **components:** retarget Button/Status styles to new tokens ([e4354e7](https://github.com/quynhaIiyara/dsworkflow/commit/e4354e72c30ccfde166debc002a528d774304ac6)), closes [#5B4CFF](https://github.com/quynhaIiyara/dsworkflow/issues/5B4CFF) [#0056B8](https://github.com/quynhaIiyara/dsworkflow/issues/0056B8)
* **tokens:** rewrite palette to flat colors + s1..s8 spacing + shadow ([86001c9](https://github.com/quynhaIiyara/dsworkflow/commit/86001c962bdaf94eabf11b7cc7d9f79f82e4c8e1))

## 1.0.0 (2026-07-10)

### Features

* **skills:** add ds-consumer skill + wire ds-manifest MCP ([b889f66](https://github.com/quynhaIiyara/dsworkflow/commit/b889f668738e568be9d6688f0e73e808b5aa0c29))

### Bug Fixes

* **ci:** disable declaration emit for storybook app to unblock CI typecheck ([e2bdc1f](https://github.com/quynhaIiyara/dsworkflow/commit/e2bdc1ff4d3f31916d3d60439aa4cdb7f4585730))
