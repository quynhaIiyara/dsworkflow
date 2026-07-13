import type { Meta, StoryObj } from '@storybook/react';
import { Text as RNText } from 'react-native';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v4.0.0',
    docs: {
      description: {
        component:
          'A single icon action (call, message, map, 3-dot overflow). rn-ds ships no Icon component — pass any icon element via the `icon` prop. Hit target is 44×44 per WCAG 2.5.5. `accessibilityLabel` is required.',
      },
    },
  },
  args: {
    accessibilityLabel: 'Call farmer',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const PhoneGlyph = () => (
  <RNText style={{ fontSize: 20, color: '#4B5563' }}>☎</RNText>
);
const OverflowGlyph = () => (
  <RNText style={{ fontSize: 20, color: '#4B5563' }}>⋮</RNText>
);

export const Default: Story = {
  args: {
    icon: <PhoneGlyph />,
    onPress: () => console.log('call'),
  },
};

export const Overflow: Story = {
  args: {
    icon: <OverflowGlyph />,
    accessibilityLabel: 'More actions',
    onPress: () => console.log('overflow'),
  },
};

export const Disabled: Story = {
  args: {
    icon: <PhoneGlyph />,
    onPress: () => {},
    disabled: true,
  },
};
