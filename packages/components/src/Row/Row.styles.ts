import { StyleSheet } from 'react-native';
import { colors, spacing, typography, opacity } from '@rn-ds/tokens';

export const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s2,
    paddingVertical: spacing.s1,
  },
  pressed: {
    opacity: opacity.pressed,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: typography.size.md,
    lineHeight: typography.size.md * typography.lineHeight.normal,
    color: colors.inkBody,
    flex: 1,
  },
});
