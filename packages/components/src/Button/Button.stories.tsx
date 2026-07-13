import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Pressable button. Variant encodes meaning: `primary` (green) is the SA-owned action, `complete` (blue) is the system-owned finalise. One filled primary per view.',
      },
    },
  },
  args: {
    label: 'Press me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'complete', 'danger'],
      description: "The button's role and accent.",
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
      description: 'Greys out and blocks the press.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: 'Primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Ghost' },
};

export const Complete: Story = {
  args: { variant: 'complete', label: 'Complete' },
};

export const Reject: Story = {
  args: { variant: 'danger', label: 'Reject' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled' },
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Green is a start, blue is a finalise. One primary action per view.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Primary" variant="primary" onPress={() => {}} />
      <Button label="Secondary" variant="secondary" onPress={() => {}} />
      <Button label="Ghost" variant="ghost" onPress={() => {}} />
      <Button label="Complete" variant="complete" onPress={() => {}} />
      <Button label="Reject" variant="danger" onPress={() => {}} />
      <Button label="Disabled" variant="primary" disabled onPress={() => {}} />
    </div>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>
  ),
};
