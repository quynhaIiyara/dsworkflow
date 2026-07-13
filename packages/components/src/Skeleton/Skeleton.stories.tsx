import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Skeleton, SkeletonText } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v7.0.0',
    docs: {
      description: {
        component:
          'Loading placeholder. Muted hairline block with a subtle opacity pulse. Compose several to sketch the shape of the content that will fill the screen. Pass `animate={false}` for reduced-motion contexts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Line: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <Skeleton height={12} />
    </View>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <SkeletonText lines={4} />
    </View>
  ),
};

export const CardShape: Story = {
  render: () => (
    <View style={{ width: 320, gap: 12 }}>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Skeleton width={44} height={44} borderRadius={999} />
        <View style={{ flex: 1, gap: 8 }}>
          <Skeleton height={16} width="60%" />
          <Skeleton height={12} width="40%" />
        </View>
      </View>
      <Skeleton height={80} borderRadius={16} />
      <SkeletonText lines={2} lastLineWidth="80%" />
    </View>
  ),
};

export const NoAnimation: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <SkeletonText lines={3} />
      <View style={{ height: 8 }} />
      <Skeleton height={80} borderRadius={16} animate={false} />
    </View>
  ),
};
