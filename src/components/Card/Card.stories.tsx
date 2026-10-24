import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { title: 'Card title', text: 'Short description of the card.', backgroundColor: '#ffffff', disabled: false },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
