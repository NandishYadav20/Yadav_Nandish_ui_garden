import type { ChangeEventHandler } from 'react';

export interface RadioButtonProps {
  text: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  backgroundColor?: string;
  disabled?: boolean;
}
