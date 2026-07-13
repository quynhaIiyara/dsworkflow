import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, opacity } from '@rn-ds/tokens';

const HEIGHT = 44; // WCAG 2.5.5 minimum target

export const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: HEIGHT,
    paddingHorizontal: spacing.s3,
    backgroundColor: colors.card,
    borderRadius: radii.btn,
    borderWidth: 1,
    borderColor: colors.hairline,
    gap: spacing.s2,
  },
  focused: {
    borderColor: colors.green,
  },
  errored: {
    borderColor: colors.red,
  },
  disabled: {
    opacity: opacity.disabled,
  },
  input: {
    flex: 1,
    fontSize: typography.role.body.fontSize,
    lineHeight: typography.role.body.lineHeight,
    fontWeight: typography.role.body.fontWeight,
    color: colors.ink,
    padding: 0, // RN adds default vertical padding; frame owns the height
  },
  helper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s1,
    marginTop: spacing.s1,
    paddingHorizontal: spacing.s1,
  },
});
