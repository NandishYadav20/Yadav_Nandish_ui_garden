import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';
import { DISABLED_BG } from '../../shared/disabled';

const renderInRow = (ui: React.ReactElement) => render(<table><tbody><tr>{ui}</tr></tbody></table>);

describe('TableCell', () => {
  it('is visible on the page', () => {
    renderInRow(<TableCell text="Apples" />);
    expect(screen.getByTestId('table-cell')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = renderInRow(<TableCell text="Apples" backgroundColor="#ff0000" />);
    expect(screen.getByTestId('table-cell')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<table><tbody><tr><TableCell text="Apples" backgroundColor="#ff0000" disabled /></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
