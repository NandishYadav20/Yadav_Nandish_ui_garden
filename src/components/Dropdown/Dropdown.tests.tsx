import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { DISABLED_BG } from '../../shared/disabled';

describe('Dropdown', () => {
  it('is visible on the page', () => {
    render(<Dropdown options={['One', 'Two']} />);
    expect(screen.getByTestId('dropdown')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Dropdown options={['One']} backgroundColor="#ff0000" />);
    expect(screen.getByTestId('dropdown')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Dropdown options={['One']} backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('dropdown')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
