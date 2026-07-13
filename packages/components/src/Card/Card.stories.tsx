import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { Card } from './Card';
import { StatusChip } from '../StatusChip';
import { Banner } from '../Banner';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Generic content card compound: `Card` + `Card.Header`, `Card.Eyebrow`, `Card.Title`, `Card.Row`, `Card.Divider`. Composes with `StatusChip`, `Banner`, and consumer-supplied icons — the DS does not own domain-specific card shapes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <Card.Title>Suhandi Wijaya</Card.Title>
        <Card.Row>Karawang, West Java</Card.Row>
        <Card.Row>Requested in 3 days</Card.Row>
      </Card>
    </div>
  ),
};

export const Pressable: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Card onPress={() => console.log('card pressed')} accessibilityLabel="Open request">
        <Card.Title>Tap me</Card.Title>
        <Card.Row>The whole card is a Pressable when onPress is set.</Card.Row>
      </Card>
    </div>
  ),
};

export const WithHeaderAndStatus: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <Card.Header>
          <Card.Eyebrow>Order SO-24815</Card.Eyebrow>
          <StatusChip variant="confirmed" label="Confirmed" />
        </Card.Header>
        <Card.Title>Suhandi Wijaya</Card.Title>
        <Card.Row>Soil health test</Card.Row>
      </Card>
    </div>
  ),
};

export const WithDividerAndBanner: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <Card.Header>
          <Card.Eyebrow>Order SO-24815</Card.Eyebrow>
          <StatusChip variant="confirmed" label="Confirmed" />
        </Card.Header>
        <Card.Title>Suhandi Wijaya</Card.Title>
        <Card.Row>Soil health test</Card.Row>
        <Card.Divider />
        <Card.Row>Karawang, West Java</Card.Row>
        <Card.Row>Requested in 3 days</Card.Row>
        <View style={{ marginTop: 8 }}>
          <Banner tone="ok" message="Slots available on this date" />
        </View>
      </Card>
    </div>
  ),
};

/**
 * Consumer composition example — the domain-specific "RequestCard" belongs
 * in the app, not the DS. This story demonstrates how the primitives combine.
 */
export const RequestCardComposition: Story = {
  render: () => {
    const DummyIcon = ({ label }: { label: string }) => (
      <Text style={{ fontSize: 14, color: '#4B5563' }}>{label}</Text>
    );
    return (
      <div style={{ width: 340 }}>
        <Card onPress={() => console.log('open request')} accessibilityLabel="Open request SO-24815">
          <Card.Header>
            <Card.Eyebrow>Order SO-24815</Card.Eyebrow>
            <StatusChip variant="confirmed" label="Confirmed" />
          </Card.Header>
          <Card.Title>Suhandi Wijaya</Card.Title>
          <Card.Row icon={<DummyIcon label="🧪" />}>Soil health test</Card.Row>
          <Card.Divider />
          <Card.Row icon={<DummyIcon label="📍" />}>Karawang, West Java</Card.Row>
          <Card.Row icon={<DummyIcon label="📅" />}>Requested in 3 days</Card.Row>
          <View style={{ marginTop: 8 }}>
            <Banner
              tone="ok"
              icon={<DummyIcon label="✓" />}
              message="Slots available on this date"
            />
          </View>
        </Card>
      </div>
    );
  },
};
