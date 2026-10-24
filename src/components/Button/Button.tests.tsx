import { render, screen } from '@testing-library/react';
import Button from './Button';
import { DISABLED_BG } from '../../shared/disabled';

describe('Button', () => {
  it('is visible on the page', () => {
    render(<Button text="Click me" />);
    expect(screen.getByTestId('button')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Button text="Click me" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('button')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Button text="Click me" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('button')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
