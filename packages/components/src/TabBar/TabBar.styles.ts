import { StyleSheet } from 'react-native';
import { colors, spacing, opacity } from '@rn-ds/tokens';

const HEIGHT = 64;

export const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    height: HEIGHT,
    backgroundColor: colors.card,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.hairline,
    alignItems: 'stretch',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.s2,
    gap: 4,
  },
  tabPressed: {
    opacity: opacity.pressed,
  },
  iconWrap: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badgeAnchor: {
    position: 'absolute',
    top: -4,
    right: -10,
  },
});
