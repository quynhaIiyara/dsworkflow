import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.hairline,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  rowStriped: {
    backgroundColor: colors.surface,
  },
});

export const cellStyles = StyleSheet.create({
  base: {
    justifyContent: 'center',
  },
  align_left: { alignItems: 'flex-start' },
  align_center: { alignItems: 'center' },
  align_right: { alignItems: 'flex-end' },
  size_sm: {
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s2,
  },
  size_md: {
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3,
  },
  size_lg: {
    paddingHorizontal: spacing.s4,
    paddingVertical: spacing.s4,
  },
});

export const textStyles = StyleSheet.create({
  body: {
    color: colors.inkBody,
  },
  header: {
    color: colors.ink,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.4,
  },
  size_sm: {
    fontSize: typography.size.sm,
    lineHeight: typography.size.sm * typography.lineHeight.normal,
  },
  size_md: {
    fontSize: typography.size.md,
    lineHeight: typography.size.md * typography.lineHeight.normal,
  },
  size_lg: {
    fontSize: typography.size.lg,
    lineHeight: typography.size.lg * typography.lineHeight.normal,
  },
  align_left: { textAlign: 'left' },
  align_center: { textAlign: 'center' },
  align_right: { textAlign: 'right' },
});
