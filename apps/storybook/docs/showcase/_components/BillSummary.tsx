import React from 'react';
import { View } from 'react-native';
import { colors, radii, spacing } from '@rn-ds/tokens';
import { Card, Text } from '@rn-ds/components';
import { TicketIcon } from './icons/pack';

const Line = ({
  label,
  value,
  strong,
  tone,
}: {
  label: string;
  value: string;
  strong?: boolean;
  tone?: 'discount' | 'total';
}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: spacing.s3,
    }}
  >
    <Text role={strong ? 'subtitle' : 'body'} color={strong ? 'ink' : 'inkMuted'}>
      {label}
    </Text>
    <Text
      role={strong ? 'title' : 'subtitle'}
      color={tone === 'discount' || tone === 'total' ? 'greenDark' : 'ink'}
    >
      {value}
    </Text>
  </View>
);

export const Default = () => (
  <View style={{ maxWidth: 420 }}>
    <Card>
      <Card.Header>
        <Card.Eyebrow>Bill amount</Card.Eyebrow>
      </Card.Header>

      <Line label="Subtotal" value="Rp 75.000" />
      <Card.Divider />
      <Line label="Discount applied" value="− Rp 20.000" tone="discount" />
      <Card.Divider />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.s2,
          backgroundColor: colors.greenPale,
          paddingHorizontal: spacing.s3,
          paddingVertical: spacing.s2,
          borderRadius: radii.chip,
          alignSelf: 'flex-start',
          marginVertical: spacing.s3,
        }}
      >
        <TicketIcon size={16} color={colors.greenDark} />
        <Text role="label" color="greenDark">
          HARVEST10 applied
        </Text>
      </View>

      <Card.Divider />
      <Line label="Total payable" value="Rp 55.000" strong tone="total" />
    </Card>
  </View>
);
