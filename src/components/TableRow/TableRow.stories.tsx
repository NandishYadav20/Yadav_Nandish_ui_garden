import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';
import TableCell from '../TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { backgroundColor: '#ffffff', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <tbody>
        <TableRow {...args}>
          <TableCell text="Apples" />
          <TableCell text="3" />
        </TableRow>
      </tbody>
    </table>
  ),
};
export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
