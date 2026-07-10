import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import { styles, labelStyles, dotStyles } from './Status.styles';

/**
 * Semantic states supported by the Status chip. Order-agnostic pairs (e.g.
 * `service-incomplete` maps to the same visual bucket as `pending`) map to a
 * shared visual "tone."
 */
export type StatusVariant =
  | 'pending'
  | 'service-incomplete'
  | 'confirmed'
  | 'rejected'
  | 'overdue'
  | 'cancelled'
  | 'completed'
  | 'in-progress';

type Tone = 'warning' | 'success' | 'danger' | 'neutral' | 'info';

const variantToTone: Record<StatusVariant, Tone> = {
  pending: 'warning',
  'service-incomplete': 'warning',
  confirmed: 'success',
  rejected: 'danger',
  overdue: 'danger',
  cancelled: 'danger',
  completed: 'neutral',
  'in-progress': 'info',
};

export type StatusProps = {
  variant: StatusVariant;
  label: string;
  accessibilityLabel?: string;
};

export const Status = forwardRef<View, StatusProps>(function Status(
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

Status.displayName = 'Status';
