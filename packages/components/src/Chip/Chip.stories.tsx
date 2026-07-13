import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v4.0.0',
    docs: {
      description: {
        component:
          'Filter or choice pill. Two states: selectable (pass `onPress` + `selected`) and removable (pass `onRemove`). Selected state uses `green-pale` wash + green border per `design.md`.',
      },
    },
  },
  args: {
    label: 'Corn',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Selected: Story = {
  args: { label: 'Corn', selected: true, onPress: () => {} },
};

export const Selectable: Story = {
  render: () => {
    function SelectableChip() {
      const [on, setOn] = useState(false);
      return <Chip label="Rice" selected={on} onPress={() => setOn((v) => !v)} />;
    }
    return <SelectableChip />;
  },
};

export const Removable: Story = {
  args: {
    label: 'Confirmed',
    onRemove: () => console.log('remove'),
  },
};

export const FilterRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="All" selected onPress={() => {}} />
      <Chip label="Confirmed" onPress={() => {}} />
      <Chip label="In progress" onPress={() => {}} />
      <Chip label="Rejected" onPress={() => {}} />
    </div>
  ),
};
