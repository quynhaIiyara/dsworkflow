import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, opacity } from '@rn-ds/tokens';

// Chip radius per design.md: chips = 6.
export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s1,
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s1,
    borderRadius: radii.chip,
    borderWidth: 1,
    borderColor: colors.hairline,
    backgroundColor: colors.card,
  },
  selected: {
    // green-pale wash + green border per design.md "The accent rule"
    backgroundColor: colors.greenPale,
    borderColor: colors.green,
  },
  pressed: {
    opacity: opacity.pressed,
  },
  removeSlot: {
    marginLeft: spacing.s1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: typography.role.label.fontSize,
    lineHeight: typography.role.label.lineHeight,
    fontWeight: typography.role.body.fontWeight,
    color: colors.inkBody,
  },
  selected: {
    color: colors.greenDark,
    fontWeight: typography.role.subtitle.fontWeight,
  },
});

export const removeGlyphStyles = StyleSheet.create({
  base: {
    fontSize: typography.role.body.fontSize,
    color: colors.inkMuted,
    lineHeight: typography.role.body.lineHeight,
  },
  selected: {
    color: colors.greenDark,
  },
});
