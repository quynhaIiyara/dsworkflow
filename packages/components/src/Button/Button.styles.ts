import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography, opacity } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: radii.md,
  },
  size_sm: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm, minHeight: 32 },
  size_md: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md, minHeight: 40 },
  size_lg: { paddingVertical: spacing.md, paddingHorizontal: spacing.lg, minHeight: 48 },
  variant_primary: { backgroundColor: colors.brand.solid },
  variant_secondary: { backgroundColor: colors.neutral.subtle },
  variant_ghost: { backgroundColor: 'transparent' },
  variant_danger: { backgroundColor: colors.danger.solid },
  pressed: { opacity: opacity.pressed },
  disabled: { opacity: opacity.disabled },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontWeight: typography.weight.semibold,
    lineHeight: typography.size.md * typography.lineHeight.normal,
  },
  size_sm: { fontSize: typography.size.sm },
  size_md: { fontSize: typography.size.md },
  size_lg: { fontSize: typography.size.lg },
  variant_primary: { color: colors.brand.onSolid },
  variant_secondary: { color: colors.neutral.strong },
  variant_ghost: { color: colors.brand.solid },
  variant_danger: { color: colors.danger.onSolid },
});
