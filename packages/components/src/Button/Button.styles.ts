import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography, opacity } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: radii.btn,
  },
  size_sm: { paddingVertical: spacing.s1, paddingHorizontal: spacing.s2, minHeight: 32 },
  size_md: { paddingVertical: spacing.s2, paddingHorizontal: spacing.s4, minHeight: 40 },
  size_lg: { paddingVertical: spacing.s4, paddingHorizontal: spacing.s6, minHeight: 48 },
  variant_primary: { backgroundColor: colors.green },
  variant_secondary: { backgroundColor: colors.hairline },
  variant_ghost: { backgroundColor: 'transparent' },
  variant_complete: { backgroundColor: colors.blue },
  variant_danger: { backgroundColor: colors.red },
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
  variant_primary: { color: colors.white },
  variant_secondary: { color: colors.ink },
  variant_ghost: { color: colors.green },
  variant_complete: { color: colors.white },
  variant_danger: { color: colors.white },
});
