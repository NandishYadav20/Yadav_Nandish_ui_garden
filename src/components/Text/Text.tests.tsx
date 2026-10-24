import { render, screen } from '@testing-library/react';
import Text from './Text';
import { DISABLED_BG } from '../../shared/disabled';

describe('Text', () => {
  it('is visible on the page', () => {
    render(<Text text="Some body text" />);
    expect(screen.getByTestId('text')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Text text="Some body text" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('text')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Text text="Some body text" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('text')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
