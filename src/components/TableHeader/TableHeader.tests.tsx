import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';
import { DISABLED_BG } from '../../shared/disabled';

const renderInTable = (ui: React.ReactElement) => render(<table>{ui}</table>);

describe('TableHeader', () => {
  it('is visible on the page', () => {
    renderInTable(<TableHeader columns={['Name']} />);
    expect(screen.getByTestId('table-header')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const { rerender } = renderInTable(<TableHeader columns={['Name']} backgroundColor="#ff0000" />);
    expect(screen.getByTestId('table-header')).toHaveStyleRule('background-color', '#ff0000');
    rerender(<table><TableHeader columns={['Name']} backgroundColor="#ff0000" disabled /></table>);
    expect(screen.getByTestId('table-header')).toHaveStyleRule('background-color', DISABLED_BG);
  });
});
