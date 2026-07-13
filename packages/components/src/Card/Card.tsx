import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, View, Text, type PressableProps, type ViewProps } from 'react-native';
import {
  styles,
  eyebrowStyles,
  titleStyles,
} from './Card.styles';
import { Row, type RowProps } from '../Row';

export type CardProps = Omit<PressableProps, 'children'> & {
  children: ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export type CardHeaderProps = ViewProps & {
  children: ReactNode;
};

export type CardEyebrowProps = {
  children: string;
};

export type CardTitleProps = {
  children: ReactNode;
};

/** @deprecated Prefer `RowProps` from `@rn-ds/components`. `Card.Row` is an alias for `Row`. */
export type CardRowProps = RowProps;

export type CardDividerProps = ViewProps;

const CardRoot = forwardRef<View, CardProps>(function Card(
  { children, onPress, accessibilityLabel, style, ...rest },
  ref,
) {
  if (onPress) {
    return (
      <Pressable
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        style={(state) => [
          styles.container,
          state.pressed && styles.pressed,
          typeof style === 'function' ? style(state) : style,
        ]}
        {...rest}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View
      ref={ref}
      accessibilityRole="none"
      accessibilityLabel={accessibilityLabel}
      style={[styles.container, style as ViewProps['style']]}
    >
      {children}
    </View>
  );
});
CardRoot.displayName = 'Card';

export const CardHeader = forwardRef<View, CardHeaderProps>(function CardHeader(
  { children, style, ...rest },
  ref,
) {
  return (
    <View ref={ref} style={[styles.header, style]} {...rest}>
      {children}
    </View>
  );
});
CardHeader.displayName = 'Card.Header';

export const CardEyebrow = forwardRef<Text, CardEyebrowProps>(function CardEyebrow(
  { children },
  ref,
) {
  return (
    <Text ref={ref} style={eyebrowStyles.text}>
      {children.toUpperCase()}
    </Text>
  );
});
CardEyebrow.displayName = 'Card.Eyebrow';

export const CardTitle = forwardRef<Text, CardTitleProps>(function CardTitle(
  { children },
  ref,
) {
  return (
    <Text ref={ref} style={titleStyles.text} accessibilityRole="header">
      {children}
    </Text>
  );
});
CardTitle.displayName = 'Card.Title';

export const CardDivider = forwardRef<View, CardDividerProps>(function CardDivider(
  { style, ...rest },
  ref,
) {
  return <View ref={ref} accessibilityRole="none" style={[styles.divider, style]} {...rest} />;
});
CardDivider.displayName = 'Card.Divider';

type CardComponent = typeof CardRoot & {
  Header: typeof CardHeader;
  Eyebrow: typeof CardEyebrow;
  Title: typeof CardTitle;
  Row: typeof Row;
  Divider: typeof CardDivider;
};

export const Card = CardRoot as CardComponent;
Card.Header = CardHeader;
Card.Eyebrow = CardEyebrow;
Card.Title = CardTitle;
Card.Row = Row;
Card.Divider = CardDivider;
