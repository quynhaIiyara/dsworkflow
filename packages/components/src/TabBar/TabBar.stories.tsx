import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Text as RNText } from 'react-native';
import { TabBar } from './TabBar';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v6.0.0',
    docs: {
      description: {
        component:
          'Bottom navigation. Four tabs per `design.md`: Home, Schedules, Requests, History. Active tab in green. Consumer supplies the icon element for each tab (rn-ds ships no Icon primitive).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const glyph = (ch: string, color: string) => (
  <RNText style={{ fontSize: 20, color }}>{ch}</RNText>
);

const ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: glyph('⌂', '#6B7280'),
    activeIcon: glyph('⌂', '#699900'),
  },
  {
    id: 'schedules',
    label: 'Schedules',
    icon: glyph('▤', '#6B7280'),
    activeIcon: glyph('▤', '#699900'),
  },
  {
    id: 'requests',
    label: 'Requests',
    icon: glyph('✉', '#6B7280'),
    activeIcon: glyph('✉', '#699900'),
    badgeCount: 3,
  },
  {
    id: 'history',
    label: 'History',
    icon: glyph('◷', '#6B7280'),
    activeIcon: glyph('◷', '#699900'),
  },
];

export const HomeActive: Story = {
  render: () => {
    function Wrap() {
      const [active, setActive] = useState('home');
      return (
        <div style={{ width: 360 }}>
          <TabBar items={ITEMS} activeId={active} onChange={setActive} />
        </div>
      );
    }
    return <Wrap />;
  },
};

export const RequestsActive: Story = {
  render: () => {
    function Wrap() {
      const [active, setActive] = useState('requests');
      return (
        <div style={{ width: 360 }}>
          <TabBar items={ITEMS} activeId={active} onChange={setActive} />
        </div>
      );
    }
    return <Wrap />;
  },
};
