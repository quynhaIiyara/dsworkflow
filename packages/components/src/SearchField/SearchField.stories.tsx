import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Text as RNText } from 'react-native';
import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v5.0.0',
    docs: {
      description: {
        component:
          'Search-shaped `Input`. Leading search glyph, trailing clear affordance that appears when the field has a value, optional result count meta line.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

const SearchGlyph = () => (
  <RNText style={{ fontSize: 16, color: '#4B5563' }}>⌕</RNText>
);

export const Default: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('');
      return (
        <SearchField
          value={v}
          onChangeText={setV}
          placeholder="Search farmers"
          searchIcon={<SearchGlyph />}
        />
      );
    }
    return <Wrap />;
  },
};

export const WithValue: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('Suhandi');
      return (
        <SearchField
          value={v}
          onChangeText={setV}
          placeholder="Search farmers"
          searchIcon={<SearchGlyph />}
        />
      );
    }
    return <Wrap />;
  },
};

export const WithResults: Story = {
  render: () => {
    function Wrap() {
      const [v, setV] = useState('Rojak');
      return (
        <SearchField
          value={v}
          onChangeText={setV}
          placeholder="Search farms"
          searchIcon={<SearchGlyph />}
          resultCount={12}
        />
      );
    }
    return <Wrap />;
  },
};
