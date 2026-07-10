import { StyleSheet } from 'react-native';
import { colors, radii, typography } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  base: {
    minWidth: 17, // justified: fixed pill height/min-width for numeric counters
    height: 17,
    paddingHorizontal: 5, // justified: tighter than spacing.s1 to center 2-digit counts
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tone_neutral: { backgroundColor: colors.hairline },
  tone_urgent: { backgroundColor: colors.red },
  tone_success: { backgroundColor: colors.green },
});

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.bold,
  },
  tone_neutral: { color: colors.inkBody },
  tone_urgent: { color: colors.white },
  tone_success: { color: colors.white },
});
