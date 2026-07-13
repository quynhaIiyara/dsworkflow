import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, opacity } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  frame: {
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3,
    backgroundColor: colors.card,
    borderRadius: radii.btn,
    borderWidth: 1,
    borderColor: colors.hairline,
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
    fontSize: typography.role.body.fontSize,
    lineHeight: typography.role.body.lineHeight,
    fontWeight: typography.role.body.fontWeight,
    color: colors.ink,
    padding: 0,
    textAlignVertical: 'top',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.s1,
    paddingHorizontal: spacing.s1,
    gap: spacing.s2,
  },
  helperInline: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s1,
  },
});
