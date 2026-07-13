import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v6.0.0',
    docs: {
      description: {
        component:
          'Month grid. Day-cell states: today (green ring), selected (green fill), disabled (muted). Optional `markedDates` renders a small green dot under the number — used for "has visit" indicators. This is the Tier 1 primitive; the FieldForce `ScheduleCalendar` (Tier 2) composes on top for the day-and-week schedule surface.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const anchor = new Date(2026, 6, 13); // 13 July 2026 — CANONICAL demo date

export const Default: Story = {
  render: () => {
    function Wrap() {
      const [month, setMonth] = useState(anchor);
      const [selected, setSelected] = useState<Date | null>(anchor);
      return (
        <div style={{ width: 340 }}>
          <Calendar
            month={month}
            onMonthChange={setMonth}
            selectedDate={selected}
            onSelect={setSelected}
          />
        </div>
      );
    }
    return <Wrap />;
  },
};

export const WithMinDate: Story = {
  render: () => {
    function Wrap() {
      const [month, setMonth] = useState(anchor);
      const [selected, setSelected] = useState<Date | null>(null);
      return (
        <div style={{ width: 340 }}>
          <Calendar
            month={month}
            onMonthChange={setMonth}
            selectedDate={selected}
            onSelect={setSelected}
            minDate={anchor}
          />
        </div>
      );
    }
    return <Wrap />;
  },
};

export const WithMarkedDates: Story = {
  render: () => {
    function Wrap() {
      const [month, setMonth] = useState(anchor);
      const [selected, setSelected] = useState<Date | null>(null);
      const marks = [
        new Date(2026, 6, 14),
        new Date(2026, 6, 16),
        new Date(2026, 6, 22),
      ];
      return (
        <div style={{ width: 340 }}>
          <Calendar
            month={month}
            onMonthChange={setMonth}
            selectedDate={selected}
            onSelect={setSelected}
            markedDates={marks}
          />
        </div>
      );
    }
    return <Wrap />;
  },
};

export const StaticMonthNoNav: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <Calendar month={anchor} selectedDate={anchor} onSelect={() => {}} />
    </div>
  ),
};
