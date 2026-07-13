import { StyleSheet } from 'react-native';
import { colors, spacing, opacity } from '@rn-ds/tokens';

const RADIO = 22; // per FieldForce ledger "leading 22px radio filling green when selected"

export const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.card,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s3,
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
  },
  rowPressed: {
    opacity: opacity.pressed,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.hairline,
    marginLeft: spacing.s4 + RADIO + spacing.s3, // aligned under label, not radio
  },
  radio: {
    width: RADIO,
    height: RADIO,
    borderRadius: RADIO / 2,
    borderWidth: 2,
    borderColor: colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  },
  radioChecked: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  labelWrap: {
    flex: 1,
  },
});
