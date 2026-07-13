import { StyleSheet } from 'react-native';
import { colors, spacing, radii, shadow, typography, opacity } from '@rn-ds/tokens';

const PADDING_H = spacing.s4;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    paddingVertical: spacing.s4,
    paddingHorizontal: PADDING_H,
    ...shadow.soft,
  },
  pressed: {
    opacity: opacity.pressed,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.s2,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.hairline,
    // justified: negative horizontal margin lets the rule span wall-to-wall
    // inside the card's padded body.
    marginHorizontal: -PADDING_H,
    marginVertical: spacing.s3,
  },
});

export const eyebrowStyles = StyleSheet.create({
  text: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    color: colors.inkMuted,
    letterSpacing: 1,
    lineHeight: typography.size.sm,
  },
});

export const titleStyles = StyleSheet.create({
  text: {
    fontSize: typography.size.lg,
    lineHeight: typography.size.lg * typography.lineHeight.normal,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    letterSpacing: -0.18, // justified: tighter headline tracking per Figma spec
    marginBottom: spacing.s1,
  },
});

