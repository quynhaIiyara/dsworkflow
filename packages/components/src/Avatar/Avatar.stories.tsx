import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Circular initials monogram in the brand pale-green tone. Renders a plain `View` by default; becomes a `Pressable` when `onPress` is provided. `size` drives width, height, and font size.',
      },
    },
  },
  args: {
    initials: 'AB',
    size: 46,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Pressable: Story = {
  args: { initials: 'JS', onPress: () => console.log('avatar pressed') },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar initials="SM" size={30} />
      <Avatar initials="MD" size={46} />
      <Avatar initials="LG" size={60} />
      <Avatar initials="XL" size={80} />
    </div>
  ),
};
