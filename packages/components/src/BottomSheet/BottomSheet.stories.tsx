import { useState } from 'react';
import { Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../Button';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Slide-up modal sheet with grip pill and optional title. Uses RN `Modal` under the hood; tap the scrim to close. SafeAreaView is intentionally not included — consumers on notched devices should add safe-area padding to their sheet content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

function BottomSheetDemo({ title }: { title?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button label="Open sheet" onPress={() => setOpen(true)} />
      <BottomSheet open={open} onClose={() => setOpen(false)} title={title}>
        <Text style={{ fontSize: 14, lineHeight: 20, color: '#4B5563' }}>
          Sheet content goes here. Tap the scrim above to dismiss, or use the
          system back gesture on Android.
        </Text>
      </BottomSheet>
    </View>
  );
}

export const Default: Story = {
  render: () => <BottomSheetDemo title="Sheet title" />,
};

export const NoTitle: Story = {
  render: () => <BottomSheetDemo />,
};
