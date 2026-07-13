import React, { forwardRef, type ReactNode } from 'react';
import {
  Pressable,
  View,
  Text as RNText,
  type PressableProps,
} from 'react-native';
import { labelStyles, removeGlyphStyles, styles } from './Chip.styles';

export type ChipProps = {
  label: string;
  /** Selected state — filled with `green-pale`, green border, `greenDark` label. */
  selected?: boolean;
  /** Toggle the whole chip. Omit to make the chip non-interactive. */
  onPress?: PressableProps['onPress'];
  /** When set, renders the chip in "removable" mode with a trailing close affordance. */
  onRemove?: () => void;
  /** Optional custom remove icon. Falls back to a "×" glyph (U+00D7). */
  removeIcon?: ReactNode;
  accessibilityLabel?: string;
};

export const Chip = forwardRef<View, ChipProps>(function Chip(
  { label, selected = false, onPress, onRemove, removeIcon, accessibilityLabel },
  ref,
) {
  const content = (
    <>
      <RNText style={[labelStyles.base, selected && labelStyles.selected]}>{label}</RNText>
      {onRemove ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Remove ${label}`}
          onPress={onRemove}
          style={styles.removeSlot}
          hitSlop={8}
        >
          {removeIcon ?? (
            <RNText style={[removeGlyphStyles.base, selected && removeGlyphStyles.selected]}>
              ×
            </RNText>
          )}
        </Pressable>
      ) : null}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        ref={ref}
        accessibilityRole="button"
        accessibilityState={{ selected }}
        accessibilityLabel={accessibilityLabel ?? label}
        onPress={onPress}
        style={(state) => [
          styles.base,
          selected && styles.selected,
          state.pressed && styles.pressed,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      ref={ref}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? label}
      style={[styles.base, selected && styles.selected]}
    >
      {content}
    </View>
  );
});

Chip.displayName = 'Chip';
