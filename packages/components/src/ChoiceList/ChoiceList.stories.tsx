import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ChoiceList } from './ChoiceList';

const meta: Meta<typeof ChoiceList> = {
  title: 'Components/ChoiceList',
  component: ChoiceList,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'Single-choice list: flat hairline rows, leading 22px radio filling green when selected. Used for language, country, reject reason, slot picker, and other single-choice sheets.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChoiceList>;

const REASONS = [
  { id: 'busy', label: 'Farmer is not available' },
  { id: 'weather', label: 'Weather is not suitable' },
  { id: 'route', label: 'Cannot reach the farm today' },
  { id: 'other', label: 'Other reason' },
];

export const Default: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState<string | null>(null);
      return <ChoiceList options={REASONS} value={v} onChange={setV} accessibilityLabel="Reject reason" />;
    }
    return <Wrap />;
  },
};

export const Preselected: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState<string | null>('weather');
      return <ChoiceList options={REASONS} value={v} onChange={setV} />;
    }
    return <Wrap />;
  },
};

export const WithDisabled: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState<string | null>(null);
      return (
        <ChoiceList
          options={[
            { id: 'morning', label: 'Morning (7–11)' },
            { id: 'afternoon', label: 'Afternoon (11–3)' },
            { id: 'evening', label: 'Evening (3–6)', disabled: true },
          ]}
          value={v}
          onChange={setV}
        />
      );
    }
    return <Wrap />;
  },
};
