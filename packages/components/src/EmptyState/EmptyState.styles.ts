import { StyleSheet } from 'react-native';
import { colors, radii, spacing } from '@rn-ds/tokens';

// design.md: rounded rectangle, radius 16, surface fill, 1px dashed hairline
// border. Centred, top third, 160–200px tall (shrink toward 160 when the
// body is dense).
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: spacing.s5,
    gap: spacing.s4,
  },
  placeholder: {
    width: '100%',
    maxWidth: 280,
    height: 160,
    borderRadius: radii.card,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.hairline,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    alignItems: 'center',
    gap: spacing.s2,
  },
});
