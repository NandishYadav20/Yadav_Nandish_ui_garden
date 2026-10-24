import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';
import { surfaceStyles, SurfaceProps, DEFAULT_WHITE, DARK_TEXT } from '../../shared/disabled';

const StyledCell = styled.td<SurfaceProps>`
  ${surfaceStyles}
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  overflow-wrap: anywhere;
`;

const TableCell: React.FC<TableCellProps> = ({ text, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <StyledCell data-testid="table-cell" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    {text}
  </StyledCell>
);

export default TableCell;
