import { render, screen } from '@testing-library/react';
import Label from './Label';
import { DISABLED_BG } from '../../shared/disabled';

describe('Label', () => {
  it('is visible on the page', () => {
    render(<Label text="Name" />);
    expect(screen.getByTestId('label')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Label text="Name" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('label')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Label text="Name" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('label')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
