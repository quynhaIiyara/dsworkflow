import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, View, Text, type PressableProps, type ViewProps } from 'react-native';
import { colors, typography } from '@rn-ds/tokens';
import { rowStyles } from './Row.styles';

type ColorToken = keyof typeof colors;
type SizeToken = keyof typeof typography.size;

export type RowProps = Omit<ViewProps, 'children'> & {
  /** Optional leading icon element. rn-ds ships no Icon component. */
  icon?: ReactNode;
  children: ReactNode;
  /** When set, the row renders as a `Pressable` with a pressed opacity state. */
  onPress?: PressableProps['onPress'];
  accessibilityLabel?: string;
  /**
   * Font-size token override for the inline `<Text>` wrap Row applies when
   * `children` is a string. Defaults to `md` (14). Composites that need
   * denser rows can pass a smaller size token; for off-scale sizes wrap the
   * child in `<Text style={{ fontSize: 12.5 }}>` and pass that.
   */
  textSize?: SizeToken;
  /** Colour token override for the inline `<Text>` wrap. Defaults to `inkBody`. */
  textColor?: ColorToken;
};

export const Row = forwardRef<View, RowProps>(function Row(
  { icon, children, onPress, accessibilityLabel, style, textSize, textColor, ...rest },
  ref,
) {
  const textOverride =
    textSize !== undefined || textColor !== undefined
      ? {
          ...(textSize !== undefined ? { fontSize: typography.size[textSize] } : null),
          ...(textColor !== undefined ? { color: colors[textColor] } : null),
        }
      : null;

  const content = (
    <>
      {icon ? <View style={rowStyles.icon}>{icon}</View> : null}
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text style={[rowStyles.text, textOverride]}>{children}</Text>
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
