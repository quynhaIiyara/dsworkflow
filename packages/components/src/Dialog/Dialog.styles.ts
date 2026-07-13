import { StyleSheet } from 'react-native';
import { colors, radii, spacing, shadow } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.scrim,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s5,
  },
  dialog: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: colors.card,
    borderRadius: radii.sheet,
    padding: spacing.s5,
    gap: spacing.s3,
    ...shadow.soft,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.s2,
    marginTop: spacing.s2,
  },
});
