import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Numeric or short-label pill for notification counters and metadata chips. `urgent` for red-alert counters, `success` for confirmed states, `neutral` for metadata. Auto-formats `count > max` as `"N+"`.',
      },
    },
  },
  args: {
    count: 3,
    tone: 'urgent',
    max: 99,
  },
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'urgent', 'success'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Urgent: Story = {};

export const Neutral: Story = {
  args: { tone: 'neutral', count: 12 },
};

export const Success: Story = {
  args: { tone: 'success', count: 1 },
};

export const OverMax: Story = {
  args: { count: 150, max: 99 },
};

export const WithLabel: Story = {
  args: { count: undefined, label: 'NEW', tone: 'success' },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badge tone="neutral" count={7} />
      <Badge tone="urgent" count={3} />
      <Badge tone="success" count={1} />
      <Badge tone="urgent" count={150} max={99} />
    </div>
  ),
};
