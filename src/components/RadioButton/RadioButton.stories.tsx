import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Option A', name: 'options', backgroundColor: '#e3f2fd', disabled: false },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
