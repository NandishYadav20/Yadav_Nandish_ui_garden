import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';
import { surfaceStyles, SurfaceProps, DEFAULT_WHITE, DARK_TEXT } from '../../shared/disabled';

const StyledRow = styled.tr<SurfaceProps>`
  ${surfaceStyles}
`;

const TableRow: React.FC<TableRowProps> = ({ children, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <StyledRow data-testid="table-row" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    {children}
  </StyledRow>
);

export default TableRow;
