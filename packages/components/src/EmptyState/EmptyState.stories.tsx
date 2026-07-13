import type { Meta, StoryObj } from '@storybook/react';
import { Text as RNText, View } from 'react-native';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v7.0.0',
    docs: {
      description: {
        component:
          'Empty-state pairing per `design.md`: illustration placeholder → title → one or two muted lines → one action. Consumer supplies the ruled illustration asset (illustrations live in the downstream app repo). When no illustration is passed, renders the dashed placeholder block.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const DummyIllo = () => (
  <View
    accessibilityElementsHidden
    style={{
      width: 200,
      height: 160,
      borderRadius: 16,
      backgroundColor: '#EEF4D8',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RNText style={{ fontSize: 48 }}>🌾</RNText>
  </View>
);

export const NoIllustration: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <EmptyState
        title="No requests today"
        description="New requests will show up here as farmers book you."
        action={{ label: 'Refresh', onPress: () => {} }}
      />
    </div>
  ),
};

export const WithIllustration: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <EmptyState
        illustration={<DummyIllo />}
        title="No requests today"
        description="New requests will show up here as farmers book you."
        action={{ label: 'Refresh', onPress: () => {} }}
      />
    </div>
  ),
};

export const NoAction: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <EmptyState
        title="You are all caught up"
        description="Enjoy the rest of your day."
      />
    </div>
  ),
};
