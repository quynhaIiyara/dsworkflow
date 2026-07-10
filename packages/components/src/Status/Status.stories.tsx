import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Compact chip: coloured dot + uppercase label. Represents order and service states in lists and detail headers.',
      },
    },
  },
  args: {
    variant: 'pending',
    label: 'Pending',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'pending',
        'service-incomplete',
        'confirmed',
        'rejected',
        'overdue',
        'cancelled',
        'completed',
        'in-progress',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Pending: Story = {};

export const Confirmed: Story = {
  args: { variant: 'confirmed', label: 'Confirmed' },
};

export const InProgress: Story = {
  args: { variant: 'in-progress', label: 'In progress' },
};

export const Rejected: Story = {
  args: { variant: 'rejected', label: 'Rejected' },
};

export const Completed: Story = {
  args: { variant: 'completed', label: 'Completed' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Status variant="pending" label="Pending" />
      <Status variant="service-incomplete" label="Service incomplete" />
      <Status variant="confirmed" label="Confirmed" />
      <Status variant="in-progress" label="In progress" />
      <Status variant="completed" label="Completed" />
      <Status variant="rejected" label="Rejected" />
      <Status variant="overdue" label="Overdue" />
      <Status variant="cancelled" label="Cancelled" />
    </div>
  ),
};
