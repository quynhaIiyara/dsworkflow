import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import { styles, labelStyles, dotStyles } from './StatusChip.styles';

/**
 * The seven fixed FieldForce booking statuses (Component-Ledger.md).
 * `design.md` locks the colour model: green = confirmed, blue = in-progress,
 * neutral = completed, red = rejected / cancelled / auto-cancelled,
 * amber = partially-completed.
 */
export type StatusChipVariant =
  | 'confirmed'
  | 'in-progress'
  | 'rejected'
  | 'cancelled'
  | 'auto-cancelled'
  | 'completed'
  | 'partially-completed';

type Tone = 'success' | 'info' | 'danger' | 'neutral' | 'warning';

const variantToTone: Record<StatusChipVariant, Tone> = {
  confirmed: 'success',
  'in-progress': 'info',
  rejected: 'danger',
  cancelled: 'danger',
  'auto-cancelled': 'danger',
  completed: 'neutral',
  'partially-completed': 'warning',
};

export type StatusChipProps = {
  variant: StatusChipVariant;
  label: string;
  accessibilityLabel?: string;
};

export const StatusChip = forwardRef<View, StatusChipProps>(function StatusChip(
  { variant, label, accessibilityLabel },
  ref,
) {
  const tone = variantToTone[variant];
  return (
    <View
      ref={ref}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? `${variant}: ${label}`}
      style={styles.chip}
    >
      <View style={[dotStyles.base, dotStyles[tone]]} />
      <Text style={[labelStyles.base, labelStyles[tone]]}>{label.toUpperCase()}</Text>
    </View>
  );
});

StatusChip.displayName = 'StatusChip';
