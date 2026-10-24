import { render, screen } from '@testing-library/react';
import Img from './Img';
import { DISABLED_BG } from '../../shared/disabled';
import { PLACEHOLDER_IMAGE } from '../../shared/placeholder';

describe('Img', () => {
  it('is visible on the page', () => {
    render(<Img src={PLACEHOLDER_IMAGE} alt="Placeholder" />);
    expect(screen.getByTestId('img')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Img src={PLACEHOLDER_IMAGE} alt="Placeholder" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('img')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Img src={PLACEHOLDER_IMAGE} alt="Placeholder" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('img')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
