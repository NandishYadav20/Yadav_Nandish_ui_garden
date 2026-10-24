import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { options: ['Winnipeg', 'Toronto', 'Vancouver'], backgroundColor: '#ffffff', disabled: false },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
