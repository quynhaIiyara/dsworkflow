import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, Text as RNText, View } from 'react-native';
import { Text } from '../Text';
import { styles } from './Checkbox.styles';

export type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Right-side label. String uses the `body` role; ReactNode is rendered as-is. */
  label?: ReactNode;
  disabled?: boolean;
  /** Optional check glyph override. Falls back to "✓". */
  checkIcon?: ReactNode;
  accessibilityLabel?: string;
};

export const Checkbox = forwardRef<View, CheckboxProps>(function Checkbox(
  { checked, onChange, label, disabled = false, checkIcon, accessibilityLabel },
  ref,
) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={
        accessibilityLabel ?? (typeof label === 'string' ? label : undefined)
      }
      onPress={() => onChange(!checked)}
      disabled={disabled}
      style={styles.row}
    >
      {(state) => (
        <>
          <View
            style={[
              styles.box,
              checked && styles.boxChecked,
              state.pressed && !disabled && styles.boxPressed,
              disabled && styles.boxDisabled,
            ]}
          >
            {checked ? (checkIcon ?? <RNText style={styles.glyph}>✓</RNText>) : null}
          </View>
          {label ? (
            <View style={styles.labelWrap}>
              {typeof label === 'string' ? <Text role="body">{label}</Text> : label}
            </View>
          ) : null}
        </>
      )}
    </Pressable>
  );
});

Checkbox.displayName = 'Checkbox';
