import { StyleSheet } from 'react-native';
import { colors, spacing, opacity } from '@rn-ds/tokens';

const BOX = 20;

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s2,
    paddingVertical: spacing.s1,
  },
  box: {
    width: BOX,
    height: BOX,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.hairline,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  boxPressed: {
    opacity: opacity.pressed,
  },
  boxDisabled: {
    opacity: opacity.disabled,
  },
  labelWrap: {
    flex: 1,
  },
  glyph: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
  },
});
