import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import { DISABLED_BG } from '../../shared/disabled';

describe('RadioButton', () => {
  it('is visible on the page', () => {
    render(<RadioButton text="Option A" name="options" />);
    expect(screen.getByTestId('radio-button')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<RadioButton text="Option A" name="options" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('radio-button')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<RadioButton text="Option A" name="options" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('radio-button')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
