import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    status: 'ready',
    since: 'v0.1.0',
    docs: {
      description: {
        component:
          'Compound table: `Table` + `Table.Header`, `Table.Row`, `Table.Cell`. Cells accept `align` and `flex` for column sizing. `variant="striped"` alternates body row backgrounds.',
      },
    },
  },
  args: {
    variant: 'default',
    size: 'md',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'striped'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Header>
        <Table.Cell flex={2}>Name</Table.Cell>
        <Table.Cell>Role</Table.Cell>
        <Table.Cell align="right">Points</Table.Cell>
      </Table.Header>
      <Table.Row>
        <Table.Cell flex={2}>Ada Lovelace</Table.Cell>
        <Table.Cell>Engineer</Table.Cell>
        <Table.Cell align="right">1200</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell flex={2}>Grace Hopper</Table.Cell>
        <Table.Cell>Admiral</Table.Cell>
        <Table.Cell align="right">980</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell flex={2}>Katherine Johnson</Table.Cell>
        <Table.Cell>Mathematician</Table.Cell>
        <Table.Cell align="right">1450</Table.Cell>
      </Table.Row>
    </Table>
  ),
};

export const Striped: Story = {
  args: { variant: 'striped' },
  render: Default.render,
};

export const Small: Story = {
  args: { size: 'sm', variant: 'striped' },
  render: Default.render,
};

export const Large: Story = {
  args: { size: 'lg' },
  render: Default.render,
};
