import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'Multi-line text input. Same visual language as `Input`. Optional `maxLength` renders a counter in the footer that turns red when the limit is hit. Char limits: observations 1000, advisory 500 (per FieldForce ledger).',
      },
    },
  },
  args: {
    placeholder: 'What did you observe?',
    minRows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => {
    function Wrap() {
      const [v, setV] = useState('');
      return <Textarea {...args} value={v} onChangeText={setV} />;
    }
    return <Wrap />;
  },
};

export const WithLimit: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('Wilting on the lower leaves. Applied YaraMila overnight.');
      return (
        <Textarea
          value={v}
          onChangeText={setV}
          placeholder="What did you observe?"
          maxLength={1000}
          helperText="Keep it plain — what you saw, what you did."
          minRows={4}
        />
      );
    }
    return <Wrap />;
  },
};

export const LimitReached: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('x'.repeat(500));
      return (
        <Textarea
          value={v}
          onChangeText={setV}
          maxLength={500}
          helperText="Advisory notes are capped at 500 characters."
          minRows={4}
        />
      );
    }
    return <Wrap />;
  },
};
