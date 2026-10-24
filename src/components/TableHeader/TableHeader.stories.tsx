import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { columns: ['Name', 'Role'], backgroundColor: '#1976d2', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <TableHeader {...args} />
    </table>
  ),
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
