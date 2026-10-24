import type { ChangeEventHandler } from 'react';

export interface DropdownProps {
  options: string[];
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  backgroundColor?: string;
  disabled?: boolean;
}
