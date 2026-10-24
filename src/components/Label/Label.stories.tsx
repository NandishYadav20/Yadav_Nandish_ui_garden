import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Name', backgroundColor: '#1976d2', disabled: false },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
