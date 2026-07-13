import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { styles } from './IconButton.styles';

export type IconButtonProps = Omit<PressableProps, 'children' | 'onPress' | 'style'> & {
  /** Icon element. Consumer supplies (rn-ds ships no Icon primitive). Draw with `stroke="currentColor"` and colour the parent via a token. */
  icon: ReactNode;
  onPress: PressableProps['onPress'];
  /** Required — describes the action, not the glyph. */
  accessibilityLabel: string;
  disabled?: boolean;
};

export const IconButton = forwardRef<View, IconButtonProps>(function IconButton(
  { icon, onPress, accessibilityLabel, disabled = false, ...rest },
  ref,
) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={(state) => [
        styles.base,
        state.pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...rest}
    >
      {icon}
    </Pressable>
  );
});

IconButton.displayName = 'IconButton';
