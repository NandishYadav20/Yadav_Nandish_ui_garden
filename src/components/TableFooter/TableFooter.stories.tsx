import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Total items: 8', backgroundColor: '#e3f2fd', disabled: false },
  render: (args) => (
    <table style={{ width: '100%' }}>
      <TableFooter {...args} />
    </table>
  ),
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
