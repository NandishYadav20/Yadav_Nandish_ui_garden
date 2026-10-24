import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';
import { DISABLED_BG } from '../../shared/disabled';

const renderInTable = (ui: React.ReactElement) => render(<table><tbody>{ui}</tbody></table>);

describe('TableRow', () => {
  it('is visible on the page', () => {
    renderInTable(<TableRow><td>Cell</td></TableRow>);
    expect(screen.getByTestId('table-row')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = renderInTable(<TableRow backgroundColor="#ff0000"><td>Cell</td></TableRow>);
    expect(screen.getByTestId('table-row')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<table><tbody><TableRow backgroundColor="#ff0000" disabled><td>Cell</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
