import { render, screen } from '@testing-library/react';
import Table from './Table';
import { DISABLED_BG } from '../../shared/disabled';

describe('Table', () => {
  it('is visible on the page', () => {
    render(<Table><tbody><tr><td>Cell</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = render(<Table backgroundColor="#ff0000"><tbody /></Table>);
    expect(screen.getByTestId('table')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<Table backgroundColor="#ff0000" disabled><tbody /></Table>);
    expect(screen.getByTestId('table')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
