import { StyleSheet } from 'react-native';
import { colors, spacing, radii, typography } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: colors.scrim,
  },
  sheet: {
    backgroundColor: colors.card,
    borderTopLeftRadius: radii.sheet,
    borderTopRightRadius: radii.sheet,
  },
  body: {
    padding: spacing.s5,
    // justified: extra bottom inset compensates for the dropped SafeAreaView.
    // Consumers on notched devices should wrap their content or add safe-area padding.
    paddingBottom: spacing.s7,
  },
  grip: {
    width: 36, // justified: Figma grip pill spec (36 x 4)
    height: 4,
    borderRadius: radii.pill,
    backgroundColor: colors.hairline,
    alignSelf: 'center',
    marginBottom: spacing.s4,
  },
  header: {
    marginBottom: spacing.s5,
  },
});

export const headingStyles = StyleSheet.create({
  title: {
    fontSize: typography.size.lg,
    lineHeight: typography.size.lg * typography.lineHeight.normal,
    fontWeight: typography.weight.bold,
    color: colors.ink,
    letterSpacing: -0.18, // justified: tighter headline tracking per Figma spec
  },
});
