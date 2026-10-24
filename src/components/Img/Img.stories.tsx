import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';
import { PLACEHOLDER_IMAGE } from '../../shared/placeholder';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { src: PLACEHOLDER_IMAGE, alt: 'Placeholder image', backgroundColor: '#ffffff', disabled: false },
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
