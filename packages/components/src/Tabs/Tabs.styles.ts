import { StyleSheet } from 'react-native';
import { colors, radii, spacing, shadow, opacity } from '@rn-ds/tokens';

// Segmented: hairline container, white raised segment for the active item
// (per Component-Ledger's note on the 5-Jul track fix).
export const segmentedStyles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radii.btn,
    padding: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.hairline,
    gap: 4,
    alignSelf: 'stretch',
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s3,
    borderRadius: radii.chip,
  },
  segmentActive: {
    backgroundColor: colors.card,
    ...shadow.soft,
  },
  segmentPressed: {
    opacity: opacity.pressed,
  },
  segmentDisabled: {
    opacity: opacity.disabled,
  },
});

// Pills: inline row, ink pill for the active item.
export const pillsStyles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    gap: spacing.s2,
    alignSelf: 'flex-start',
  },
  pill: {
    paddingVertical: spacing.s1,
    paddingHorizontal: spacing.s3,
    borderRadius: radii.pill,
  },
  pillActive: {
    backgroundColor: colors.ink,
  },
  pillPressed: {
    opacity: opacity.pressed,
  },
  pillDisabled: {
    opacity: opacity.disabled,
  },
});
