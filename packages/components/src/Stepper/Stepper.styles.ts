import { StyleSheet } from 'react-native';
import { colors, radii, spacing, opacity } from '@rn-ds/tokens';

const BUTTON = 32;

export const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.s2,
    padding: spacing.s1,
    backgroundColor: colors.card,
    borderRadius: radii.btn,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  button: {
    width: BUTTON,
    height: BUTTON,
    borderRadius: radii.chip,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  buttonPressed: {
    opacity: opacity.pressed,
  },
  buttonDisabled: {
    opacity: opacity.disabled,
  },
  valueWrap: {
    minWidth: 32,
    alignItems: 'center',
  },
  glyph: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '700',
  },
});
