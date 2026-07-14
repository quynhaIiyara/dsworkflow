import React from 'react';
import { View, Text } from 'react-native';
import { colors, radii, shadow, spacing, typography } from '@rn-ds/tokens';
import { iconList } from './icons/pack';

export const Default = () => (
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.s2,
      maxWidth: 720,
    }}
  >
    {iconList.map(({ slug, component: Icon }) => (
      <View
        key={slug}
        style={{
          width: 96,
          alignItems: 'center',
          gap: spacing.s2,
          backgroundColor: colors.card,
          borderRadius: radii.btn,
          paddingVertical: spacing.s3,
          paddingHorizontal: spacing.s2,
          ...shadow.soft,
        }}
      >
        <Icon size={24} color={colors.ink} />
        <Text
          style={{
            fontSize: 10,
            color: colors.inkMuted,
            fontFamily: 'ui-monospace, Menlo, monospace',
            textAlign: 'center',
          }}
        >
          {slug}
        </Text>
      </View>
    ))}
  </View>
);

export const Sizes = () => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: spacing.s4 }}>
    {[12, 14, 18, 22, 32, 48].map((size) => {
      const Leaf = iconList.find((i) => i.slug === 'i-leaf')!.component;
      return (
        <View key={size} style={{ alignItems: 'center', gap: spacing.s1 }}>
          <Leaf size={size} color={colors.greenDark} />
          <Text style={{ fontSize: 11, color: colors.inkMuted }}>{`${size}px`}</Text>
        </View>
      );
    })}
  </View>
);

export const Colours = () => {
  const Leaf = iconList.find((i) => i.slug === 'i-leaf')!.component;
  const rows: { name: string; token: keyof typeof colors }[] = [
    { name: 'ink', token: 'ink' },
    { name: 'inkBody', token: 'inkBody' },
    { name: 'inkMuted', token: 'inkMuted' },
    { name: 'green', token: 'green' },
    { name: 'greenDark', token: 'greenDark' },
    { name: 'blue', token: 'blue' },
    { name: 'red', token: 'red' },
    { name: 'amber', token: 'amber' },
  ];
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.s4 }}>
      {rows.map((r) => (
        <View key={r.name} style={{ alignItems: 'center', gap: spacing.s1 }}>
          <Leaf size={28} color={colors[r.token]} />
          <Text style={{ fontSize: 11, color: colors.inkMuted }}>{r.name}</Text>
        </View>
      ))}
    </View>
  );
};
