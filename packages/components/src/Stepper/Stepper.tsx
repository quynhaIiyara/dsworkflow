import React, { forwardRef } from 'react';
import { Pressable, Text as RNText, View } from 'react-native';
import { Text } from '../Text';
import { styles } from './Stepper.styles';

export type StepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
  /** Value formatter — e.g. `(n) => \`${n} bags\``. Defaults to raw number. */
  format?: (value: number) => string;
};

export const Stepper = forwardRef<View, StepperProps>(function Stepper(
  {
    value,
    onChange,
    min = 0,
    max = Number.POSITIVE_INFINITY,
    step = 1,
    disabled = false,
    accessibilityLabel,
    format,
  },
  ref,
) {
  const atMin = value <= min || disabled;
  const atMax = value >= max || disabled;

  return (
    <View
      ref={ref}
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel ?? 'Quantity'}
      accessibilityValue={{
        min,
        max: Number.isFinite(max) ? max : undefined,
        now: value,
      }}
      style={styles.frame}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Decrease"
        disabled={atMin}
        onPress={() => onChange(Math.max(min, value - step))}
        style={(state) => [
          styles.button,
          state.pressed && !atMin && styles.buttonPressed,
          atMin && styles.buttonDisabled,
        ]}
      >
        <RNText style={styles.glyph}>−</RNText>
      </Pressable>
      <View style={styles.valueWrap}>
        <Text role="subtitle" color="ink">
          {format ? format(value) : String(value)}
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Increase"
        disabled={atMax}
        onPress={() => onChange(Math.min(max, value + step))}
        style={(state) => [
          styles.button,
          state.pressed && !atMax && styles.buttonPressed,
          atMax && styles.buttonDisabled,
        ]}
      >
        <RNText style={styles.glyph}>+</RNText>
      </Pressable>
    </View>
  );
});

Stepper.displayName = 'Stepper';
