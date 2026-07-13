import { StyleSheet } from 'react-native';
import { colors, radii, spacing, opacity } from '@rn-ds/tokens';

export const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s3,
    gap: spacing.s2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s2,
  },
  navButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.btn,
  },
  navButtonPressed: {
    opacity: opacity.pressed,
  },
  weekdayRow: {
    flexDirection: 'row',
  },
  weekdayCell: {
    flex: 1,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  week: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  cellInner: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.pill,
  },
  cellPressed: {
    opacity: opacity.pressed,
  },
  today: {
    borderWidth: 1.5,
    borderColor: colors.green,
  },
  selected: {
    backgroundColor: colors.green,
  },
  cellDisabled: {
    opacity: opacity.disabled,
  },
  marker: {
    position: 'absolute',
    bottom: 4,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.green,
  },
  markerSelected: {
    backgroundColor: colors.white,
  },
});
