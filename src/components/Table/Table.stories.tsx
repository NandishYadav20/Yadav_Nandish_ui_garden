import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { backgroundColor: '#ffffff', disabled: false },
  render: (args) => (
    <Table {...args}>
      <TableHeader columns={['Item', 'Qty']} />
      <tbody>
        <TableRow>
          <TableCell text="Apples" />
          <TableCell text="3" />
        </TableRow>
        <TableRow>
          <TableCell text="Pears" />
          <TableCell text="5" />
        </TableRow>
      </tbody>
      <TableFooter text="Total items: 8" />
    </Table>
  ),
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
