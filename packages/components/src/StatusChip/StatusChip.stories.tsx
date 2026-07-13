import type { Meta, StoryObj } from '@storybook/react';
import { StatusChip } from './StatusChip';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v3.0.0',
    docs: {
      description: {
        component:
          'Compact chip: coloured dot + uppercase label. Represents the seven fixed FieldForce booking statuses. Colour is locked by design.md — do not add variants.',
      },
    },
  },
  args: {
    variant: 'confirmed',
    label: 'Confirmed',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'confirmed',
        'in-progress',
        'rejected',
        'cancelled',
        'auto-cancelled',
        'completed',
        'partially-completed',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Confirmed: Story = {};

export const InProgress: Story = {
  args: { variant: 'in-progress', label: 'In progress' },
};

export const Rejected: Story = {
  args: { variant: 'rejected', label: 'Rejected' },
};

export const Cancelled: Story = {
  args: { variant: 'cancelled', label: 'Cancelled' },
};

export const AutoCancelled: Story = {
  args: { variant: 'auto-cancelled', label: 'Auto-cancelled' },
};

export const Completed: Story = {
  args: { variant: 'completed', label: 'Completed' },
};

export const PartiallyCompleted: Story = {
  args: { variant: 'partially-completed', label: 'Partially completed' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <StatusChip variant="confirmed" label="Confirmed" />
      <StatusChip variant="in-progress" label="In progress" />
      <StatusChip variant="rejected" label="Rejected" />
      <StatusChip variant="cancelled" label="Cancelled" />
      <StatusChip variant="auto-cancelled" label="Auto-cancelled" />
      <StatusChip variant="completed" label="Completed" />
      <StatusChip variant="partially-completed" label="Partially completed" />
    </div>
  ),
};
