import { render, screen } from '@testing-library/react';
import Card from './Card';
import { DISABLED_BG } from '../../shared/disabled';

describe('Card', () => {
  it('is visible on the page', () => {
    render(<Card title="Title" text="Text" />);
    expect(screen.getByTestId('card')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Card title="Title" text="Text" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('card')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Card title="Title" text="Text" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('card')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
