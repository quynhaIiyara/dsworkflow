import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v7.0.0',
    docs: {
      description: {
        component:
          'Bottom snackbar — a dark ink pill with white text. One style always, per `design.md`: never colour-coded, the copy carries the meaning. Auto-dismisses in 4s by default; pass ~6000 for blocking errors, or `autoHideMs={null}` to require a tap.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

function TriggerToast(props: Omit<React.ComponentProps<typeof Toast>, 'open' | 'onClose'>) {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ height: 220 }}>
      <Button label="Show toast" onPress={() => setOpen(true)} />
      <Toast {...props} open={open} onClose={() => setOpen(false)} />
    </View>
  );
}

export const Neutral: Story = {
  render: () => <TriggerToast message="Saved" />,
};

export const WithRetry: Story = {
  render: () => (
    <TriggerToast
      message="Unable to sign in. Please try again."
      action={{ label: 'Retry', onPress: () => {} }}
    />
  ),
};

export const Blocking: Story = {
  render: () => (
    <TriggerToast
      message="Your account is not authorised. Please contact your administrator."
      autoHideMs={6000}
    />
  ),
};

export const TapToDismiss: Story = {
  render: () => (
    <TriggerToast message="You are offline. Changes will sync when you reconnect." autoHideMs={null} />
  ),
};
