import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Apples', backgroundColor: '#ffffff', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};
export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
