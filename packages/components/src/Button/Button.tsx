import React, { forwardRef } from 'react';
import { Pressable, Text, View, type PressableProps } from 'react-native';
import { styles, labelStyles } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'complete' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /**
   * Optional accessibility label. Falls back to `label` when omitted.
   */
  accessibilityLabel?: string;
};

export const Button = forwardRef<View, ButtonProps>(function Button(
  {
    label,
    variant = 'primary',
    size = 'md',
    disabled = false,
    accessibilityLabel,
    style,
    ...rest
  },
  ref,
) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      style={(state) => [
        styles.base,
        styles[`size_${size}`],
        styles[`variant_${variant}`],
        state.pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      <Text style={[labelStyles.base, labelStyles[`variant_${variant}`], labelStyles[`size_${size}`]]}>
        {label}
      </Text>
    </Pressable>
  );
});

Button.displayName = 'Button';
