import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import { Badge } from '../Badge';
import { Text } from '../Text';
import { styles } from './TabBar.styles';

export type TabBarItem = {
  id: string;
  label: string;
  /** Rendered when the tab is inactive. */
  icon: ReactNode;
  /** Rendered when the tab is active. Falls back to `icon` if omitted. */
  activeIcon?: ReactNode;
  /** Numeric badge (unread count). */
  badgeCount?: number;
};

export type TabBarProps = {
  items: TabBarItem[];
  activeId: string;
  onChange: (id: string) => void;
  accessibilityLabel?: string;
};

export const TabBar = forwardRef<View, TabBarProps>(function TabBar(
  { items, activeId, onChange, accessibilityLabel },
  ref,
) {
  return (
    <View
      ref={ref}
      accessibilityRole="tablist"
      accessibilityLabel={accessibilityLabel ?? 'Bottom navigation'}
      style={styles.frame}
    >
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <Pressable
            key={item.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={item.label}
            onPress={() => onChange(item.id)}
            style={(state) => [styles.tab, state.pressed && styles.tabPressed]}
          >
            <View style={styles.iconWrap}>
              {active ? (item.activeIcon ?? item.icon) : item.icon}
              {typeof item.badgeCount === 'number' && item.badgeCount > 0 ? (
                <View style={styles.badgeAnchor}>
                  <Badge count={item.badgeCount} tone="urgent" />
                </View>
              ) : null}
            </View>
            <Text role="tab" color={active ? 'green' : 'inkMuted'}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
});

TabBar.displayName = 'TabBar';
