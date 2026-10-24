import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Some body text', backgroundColor: '#e3f2fd', disabled: false },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
