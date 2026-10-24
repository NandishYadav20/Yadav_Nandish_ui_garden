import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';
import { surfaceStyles, SurfaceProps, DEFAULT_BLUE, LIGHT_TEXT } from '../../shared/disabled';

const StyledHead = styled.thead<SurfaceProps>`
  ${surfaceStyles}
`;

const StyledTh = styled.th`
  padding: 0.5rem;
  text-align: left;
  font-weight: 600;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ columns, backgroundColor = DEFAULT_BLUE, disabled = false }) => (
  <StyledHead data-testid="table-header" $bg={backgroundColor} $text={LIGHT_TEXT} $disabled={disabled}>
    <tr>
      {columns.map((column, index) => (
        <StyledTh key={`${column}-${index}`} scope="col">
          {column}
        </StyledTh>
      ))}
    </tr>
  </StyledHead>
);

export default TableHeader;
