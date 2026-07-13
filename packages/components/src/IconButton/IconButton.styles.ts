import { StyleSheet } from 'react-native';
import { colors, opacity, radii } from '@rn-ds/tokens';

// design.md ships no Icon primitive — the caller passes the icon element.
// This surface is the hit target and the pressed feedback around it.
const HIT_TARGET = 44; // WCAG 2.5.5 target size minimum

export const styles = StyleSheet.create({
  base: {
    width: HIT_TARGET,
    height: HIT_TARGET,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.btn,
  },
  pressed: {
    opacity: opacity.pressed,
    backgroundColor: colors.hairline, // subtle wash to confirm the press landed
  },
  disabled: {
    opacity: opacity.disabled,
  },
});
