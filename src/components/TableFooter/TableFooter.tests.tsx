import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import { DISABLED_BG } from '../../shared/disabled';

describe('TableFooter', () => {
  it('is visible on the page', () => {
    render(<table><TableFooter text="Total" /></table>);
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<table><TableFooter text="Total" backgroundColor="#ff0000" /></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<table><TableFooter text="Total" backgroundColor="#ff0000" disabled /></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
