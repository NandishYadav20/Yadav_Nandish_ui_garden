import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';
import { PLACEHOLDER_IMAGE } from '../../shared/placeholder';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { src: PLACEHOLDER_IMAGE, alt: 'Hero banner', title: 'Welcome to the UI Garden', backgroundColor: '#1976d2', disabled: false },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
