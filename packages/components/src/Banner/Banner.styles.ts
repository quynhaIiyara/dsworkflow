import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s2,
    borderRadius: radii.btn,
    paddingHorizontal: spacing.s3,
    paddingVertical: 9, // justified: sits between spacing.s2 (8) and s3 (12) per Figma
  },
  tone_ok: { backgroundColor: colors.greenPale },
  tone_no: { backgroundColor: colors.redPale },
  tone_warn: { backgroundColor: colors.amberPale },
  tone_info: { backgroundColor: colors.bluePale },
  tone_offline: { backgroundColor: colors.redPale },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.size.sm * typography.lineHeight.normal,
  },
  message: { flex: 1 },
  tone_ok: { color: colors.greenDark },
  tone_no: { color: colors.redText },
  tone_warn: { color: colors.amberText },
  tone_info: { color: colors.blueDark },
  tone_offline: { color: colors.redText },
});

export const dismissStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    fontSize: typography.size.md,
    lineHeight: typography.size.md,
  },
});
