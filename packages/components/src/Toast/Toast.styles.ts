import { StyleSheet } from 'react-native';
import { colors, radii, spacing, shadow } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  positioner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: spacing.s5,
    alignItems: 'center',
    paddingHorizontal: spacing.s4,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s3,
    maxWidth: 420,
    backgroundColor: colors.toastBg,
    borderRadius: radii.pill,
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
    ...shadow.soft,
  },
  messageWrap: {
    flexShrink: 1,
  },
  actionHit: {
    paddingHorizontal: spacing.s1,
    paddingVertical: spacing.s1,
  },
});
