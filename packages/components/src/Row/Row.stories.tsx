import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';
import { Row } from './Row';

const meta: Meta<typeof Row> = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v4.0.0',
    docs: {
      description: {
        component:
          'A single list row. Icon on the left, string or arbitrary content in the body. Pass `onPress` to make the whole row a `Pressable` (pressed opacity applies).',
      },
    },
  },
  args: {
    children: 'Karawang, West Java',
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

const PinIcon = () => <Text style={{ fontSize: 14, color: '#4B5563' }}>📍</Text>;
const CalendarIcon = () => <Text style={{ fontSize: 14, color: '#4B5563' }}>📅</Text>;

export const Basic: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <PinIcon />,
    children: 'Karawang, West Java',
  },
};

export const Pressable: Story = {
  args: {
    icon: <CalendarIcon />,
    children: 'Requested in 3 days',
    onPress: () => console.log('row pressed'),
    accessibilityLabel: 'Open request',
  },
};

export const Stacked: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Row icon={<PinIcon />}>Karawang, West Java</Row>
      <Row icon={<CalendarIcon />}>Requested in 3 days</Row>
    </div>
  ),
};
