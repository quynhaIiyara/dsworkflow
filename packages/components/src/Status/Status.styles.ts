import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography } from '@rn-ds/tokens';

const DOT_SIZE = spacing.s2;

export const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s1,
  },
});

export const dotStyles = StyleSheet.create({
  base: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radii.pill,
  },
  warning: { backgroundColor: colors.amber },
  success: { backgroundColor: colors.green },
  danger: { backgroundColor: colors.red },
  neutral: { backgroundColor: colors.inkMuted },
  info: { backgroundColor: colors.blue },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    letterSpacing: 1,
    lineHeight: typography.size.sm,
  },
  warning: { color: colors.amber },
  success: { color: colors.green },
  danger: { color: colors.red },
  neutral: { color: colors.inkMuted },
  info: { color: colors.blue },
});
