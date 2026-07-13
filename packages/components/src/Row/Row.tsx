import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, View, Text, type PressableProps, type ViewProps } from 'react-native';
import { rowStyles } from './Row.styles';

export type RowProps = Omit<ViewProps, 'children'> & {
  /** Optional leading icon element. rn-ds ships no Icon component. */
  icon?: ReactNode;
  children: ReactNode;
  /** When set, the row renders as a `Pressable` with a pressed opacity state. */
  onPress?: PressableProps['onPress'];
  accessibilityLabel?: string;
};

export const Row = forwardRef<View, RowProps>(function Row(
  { icon, children, onPress, accessibilityLabel, style, ...rest },
  ref,
) {
  const content = (
    <>
      {icon ? <View style={rowStyles.icon}>{icon}</View> : null}
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text style={rowStyles.text}>{children}</Text>
      ) : (
        children
      )}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        style={(state) => [
          rowStyles.row,
          state.pressed && rowStyles.pressed,
          style as ViewProps['style'],
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      ref={ref}
      accessibilityLabel={accessibilityLabel}
      style={[rowStyles.row, style as ViewProps['style']]}
      {...rest}
    >
      {content}
    </View>
  );
});

Row.displayName = 'Row';
