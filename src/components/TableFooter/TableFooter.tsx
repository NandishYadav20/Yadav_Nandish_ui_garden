import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';
import { surfaceStyles, SurfaceProps, DEFAULT_LIGHT, DARK_TEXT } from '../../shared/disabled';

const StyledFooter = styled.tfoot<SurfaceProps>`
  ${surfaceStyles}
  font-weight: 600;
`;

const TableFooter: React.FC<TableFooterProps> = ({ text, backgroundColor = DEFAULT_LIGHT, disabled = false }) => (
  <StyledFooter data-testid="table-footer" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    <tr>
      <td style={{ padding: '0.5rem' }}>{text}</td>
    </tr>
  </StyledFooter>
);

export default TableFooter;
