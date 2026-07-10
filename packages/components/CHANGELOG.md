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
