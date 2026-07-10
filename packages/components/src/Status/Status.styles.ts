import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography } from '@rn-ds/tokens';

const DOT_SIZE = spacing.sm;

export const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
});

export const dotStyles = StyleSheet.create({
  base: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radii.pill,
  },
  warning: { backgroundColor: colors.warning.solid },
  success: { backgroundColor: colors.success.solid },
  danger: { backgroundColor: colors.danger.solid },
  neutral: { backgroundColor: colors.neutral.muted },
  info: { backgroundColor: colors.info.solid },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    letterSpacing: 1,
    lineHeight: typography.size.sm,
  },
  warning: { color: colors.warning.solid },
  success: { color: colors.success.solid },
  danger: { color: colors.danger.solid },
  neutral: { color: colors.neutral.muted },
  info: { color: colors.info.solid },
});
