import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import { DISABLED_BG } from '../../shared/disabled';
import { PLACEHOLDER_IMAGE } from '../../shared/placeholder';

describe('HeroImage', () => {
  it('is visible on the page', () => {
    render(<HeroImage src={PLACEHOLDER_IMAGE} alt="Hero" title="Welcome" />);
    expect(screen.getByTestId('hero-image')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<HeroImage src={PLACEHOLDER_IMAGE} alt="Hero" title="Welcome" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('hero-image')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<HeroImage src={PLACEHOLDER_IMAGE} alt="Hero" title="Welcome" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('hero-image')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
