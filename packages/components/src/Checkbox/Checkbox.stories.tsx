import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'On/off toggle in a list. 20×20 square, hairline border unchecked, green fill when on. Used for consent toggles and inline choices.',
      },
    },
  },
  args: {
    label: 'I agree to the terms',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  render: (args) => {
    function Wrap() {
      const [c, setC] = useState(false);
      return <Checkbox {...args} checked={c} onChange={setC} />;
    }
    return <Wrap />;
  },
};

export const Checked: Story = {
  render: (args) => {
    function Wrap() {
      const [c, setC] = useState(true);
      return <Checkbox {...args} checked={c} onChange={setC} />;
    }
    return <Wrap />;
  },
};

export const NoLabel: Story = {
  render: () => {
    function Wrap() {
      const [c, setC] = useState(false);
      return <Checkbox checked={c} onChange={setC} accessibilityLabel="Select row" />;
    }
    return <Wrap />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Checkbox checked={false} onChange={() => {}} disabled label="Locked off" />
      <Checkbox checked onChange={() => {}} disabled label="Locked on" />
    </div>
  ),
};
