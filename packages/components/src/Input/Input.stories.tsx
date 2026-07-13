import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Text as RNText } from 'react-native';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'Single-line text input. White frame + hairline border, green focus ring per `design.md`. Errors render inline (red border + red helper) — the one exception to the "errors are bottom toasts" rule.',
      },
    },
  },
  args: {
    placeholder: 'Farm name',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const AlertGlyph = () => (
  <RNText style={{ fontSize: 14, color: '#B91C1C' }}>⚠</RNText>
);
const SearchGlyph = () => (
  <RNText style={{ fontSize: 16, color: '#4B5563' }}>⌕</RNText>
);

export const Default: Story = {
  render: (args) => {
    function Wrap() {
      const [v, setV] = useState('');
      return <Input {...args} value={v} onChangeText={setV} />;
    }
    return <Wrap />;
  },
};

export const WithLeadingIcon: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('');
      return (
        <Input
          value={v}
          onChangeText={setV}
          placeholder="Search farmers"
          leadingIcon={<SearchGlyph />}
        />
      );
    }
    return <Wrap />;
  },
};

export const WithHelper: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('');
      return (
        <Input
          value={v}
          onChangeText={setV}
          placeholder="Farm ID"
          helperText="Format: FF-00000"
        />
      );
    }
    return <Wrap />;
  },
};

export const Errored: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('FF-1');
      return (
        <Input
          value={v}
          onChangeText={setV}
          placeholder="Farm ID"
          error="ID does not match FF-00000 format."
          errorIcon={<AlertGlyph />}
        />
      );
    }
    return <Wrap />;
  },
};

export const Disabled: Story = {
  render: () => (
    <Input value="Locked value" onChangeText={() => {}} disabled />
  ),
};
