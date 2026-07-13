import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v6.0.0',
    docs: {
      description: {
        component:
          'In-page tabs. Two variants: `segmented` (hairline background, white raised segment for the active tab per the 5-Jul track fix) and `pills` (ink pill for the active). Use segmented for primary in-page splits (Details / Observations), pills for sub-tabs (Photos / Videos).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const DETAILS_ITEMS = [
  { id: 'details', label: 'Details' },
  { id: 'observations', label: 'Observations' },
];

const MEDIA_ITEMS = [
  { id: 'photos', label: 'Photos' },
  { id: 'videos', label: 'Videos' },
  { id: 'reports', label: 'Reports' },
];

export const Segmented: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('details');
      return <Tabs items={DETAILS_ITEMS} value={v} onChange={setV} />;
    }
    return <Wrap />;
  },
};

export const Pills: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('photos');
      return <Tabs items={MEDIA_ITEMS} value={v} onChange={setV} variant="pills" />;
    }
    return <Wrap />;
  },
};

export const SegmentedWithDisabled: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('details');
      return (
        <Tabs
          items={[
            { id: 'details', label: 'Details' },
            { id: 'observations', label: 'Observations' },
            { id: 'lab', label: 'Lab', disabled: true },
          ]}
          value={v}
          onChange={setV}
        />
      );
    }
    return <Wrap />;
  },
};
