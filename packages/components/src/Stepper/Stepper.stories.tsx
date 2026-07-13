import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'Plus/minus quantity control. States: default, min, max. Used for quantity in bags on `ProductRecommendationRow`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => {
    function Wrap() {
      const [n, setN] = useState(2);
      return <Stepper value={n} onChange={setN} min={0} max={20} />;
    }
    return <Wrap />;
  },
};

export const WithFormatter: Story = {
  render: () => {
    function Wrap() {
      const [n, setN] = useState(3);
      return (
        <Stepper
          value={n}
          onChange={setN}
          min={1}
          max={10}
          format={(v) => `${v} bags`}
          accessibilityLabel="Bags of YaraMila"
        />
      );
    }
    return <Wrap />;
  },
};

export const AtMin: Story = {
  render: () => <Stepper value={0} onChange={() => {}} min={0} max={10} />,
};

export const AtMax: Story = {
  render: () => <Stepper value={10} onChange={() => {}} min={0} max={10} />,
};

export const Disabled: Story = {
  render: () => <Stepper value={5} onChange={() => {}} min={0} max={10} disabled />,
};
