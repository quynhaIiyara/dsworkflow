import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Inline alert bar with tone-driven colours. `ok`/`no`/`warn`/`info` are informational; `offline` defaults to dismissible with a text `×`. Consumers pass their own leading `icon` element — rn-ds ships no Icon component.',
      },
    },
  },
  args: {
    tone: 'info',
    message: 'Heads up — you have unsaved changes.',
  },
  argTypes: {
    tone: { control: 'select', options: ['ok', 'no', 'warn', 'info', 'offline'] },
    dismissible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {};

export const Ok: Story = {
  args: { tone: 'ok', message: 'Changes saved.' },
};

export const No: Story = {
  args: { tone: 'no', message: 'Could not save changes.' },
};

export const Warn: Story = {
  args: { tone: 'warn', message: 'Session expires in 5 minutes.' },
};

export const Offline: Story = {
  args: { tone: 'offline', message: 'You are offline. Some actions are disabled.' },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Banner tone="ok" message="Changes saved." />
      <Banner tone="no" message="Could not save changes." />
      <Banner tone="warn" message="Session expires in 5 minutes." />
      <Banner tone="info" message="Heads up — you have unsaved changes." />
      <Banner tone="offline" message="You are offline." onDismiss={() => {}} />
    </div>
  ),
};
