import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v7.0.0',
    docs: {
      description: {
        component:
          'Blocking two-button confirm. Used for Accept, reject, start, complete, and log out. Green primary by default; set `destructive` for a red primary (log out, reject, cancel booking). Pass `cancelLabel={null}` for a single-button acknowledgement.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

function DialogTriggerExample(props: {
  title: string;
  description?: string;
  confirmLabel: string;
  destructive?: boolean;
  cancelLabel?: string | null;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button label="Open dialog" onPress={() => setOpen(true)} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        {...props}
      />
    </View>
  );
}

export const StartService: Story = {
  render: () => (
    <DialogTriggerExample
      title="Start this service?"
      description="You cannot start a second service while this one is running."
      confirmLabel="Start service"
    />
  ),
};

export const LogOut: Story = {
  render: () => (
    <DialogTriggerExample
      title="Log out of FieldForce?"
      description="You will need to sign in again to access your schedule."
      confirmLabel="Log out"
      destructive
    />
  ),
};

export const SingleButton: Story = {
  render: () => (
    <DialogTriggerExample
      title="Sample sent to the lab"
      description="Results will show up here when the lab uploads them. Usually 2–3 days."
      confirmLabel="Got it"
      cancelLabel={null}
    />
  ),
};
