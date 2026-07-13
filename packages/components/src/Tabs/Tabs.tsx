import React, { forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../Text';
import { pillsStyles, segmentedStyles } from './Tabs.styles';

export type TabItem = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type TabsVariant = 'segmented' | 'pills';

export type TabsProps = {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  variant?: TabsVariant;
  accessibilityLabel?: string;
};

export const Tabs = forwardRef<View, TabsProps>(function Tabs(
  { items, value, onChange, variant = 'segmented', accessibilityLabel },
  ref,
) {
  const isSegmented = variant === 'segmented';
  const styles = isSegmented ? segmentedStyles : pillsStyles;

  return (
    <View
      ref={ref}
      accessibilityRole="tablist"
      accessibilityLabel={accessibilityLabel}
      style={styles.frame}
    >
      {items.map((item) => {
        const active = item.id === value;
        return (
          <Pressable
            key={item.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: active, disabled: item.disabled }}
            accessibilityLabel={item.label}
            disabled={item.disabled}
            onPress={() => onChange(item.id)}
            style={(state) =>
              isSegmented
                ? [
                    segmentedStyles.segment,
                    active && segmentedStyles.segmentActive,
                    state.pressed && !item.disabled && segmentedStyles.segmentPressed,
                    item.disabled && segmentedStyles.segmentDisabled,
                  ]
                : [
                    pillsStyles.pill,
                    active && pillsStyles.pillActive,
                    state.pressed && !item.disabled && pillsStyles.pillPressed,
                    item.disabled && pillsStyles.pillDisabled,
                  ]
            }
          >
            <Text
              role={isSegmented ? 'subtitle' : 'tab'}
              color={
                active
                  ? isSegmented
                    ? 'ink'
                    : 'white'
                  : 'inkMuted'
              }
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
});

Tabs.displayName = 'Tabs';
