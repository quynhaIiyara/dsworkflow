import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import { styles, labelStyles } from './Badge.styles';

export type BadgeTone = 'neutral' | 'urgent' | 'success';

export type BadgeProps = {
  count?: number;
  label?: string;
  tone?: BadgeTone;
  max?: number;
  accessibilityLabel?: string;
};

export const Badge = forwardRef<View, BadgeProps>(function Badge(
  { count, label, tone = 'urgent', max = 99, accessibilityLabel },
  ref,
) {
  const text =
    label ??
    (typeof count === 'number' ? (count > max ? `${max}+` : String(count)) : '');
  if (!text) return null;

  return (
    <View
      ref={ref}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? text}
      style={[styles.base, styles[`tone_${tone}`]]}
    >
      <Text style={[labelStyles.base, labelStyles[`tone_${tone}`]]}>{text}</Text>
    </View>
  );
});

Badge.displayName = 'Badge';
