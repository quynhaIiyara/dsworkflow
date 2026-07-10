import { StyleSheet } from 'react-native';
import { colors, typography } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.greenPale,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const labelStyles = StyleSheet.create({
  base: {
    color: colors.greenDark,
    fontWeight: typography.weight.bold,
    letterSpacing: 0.3, // justified: monogram tracking per Figma; not a global token
  },
});
