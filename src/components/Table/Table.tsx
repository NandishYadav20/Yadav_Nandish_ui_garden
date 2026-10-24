import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import { surfaceStyles, SurfaceProps, DEFAULT_WHITE, DARK_TEXT } from '../../shared/disabled';

const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<SurfaceProps>`
  ${surfaceStyles}
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Table: React.FC<TableProps> = ({ children, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <Wrapper>
    <StyledTable data-testid="table" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
      {children}
    </StyledTable>
  </Wrapper>
);

export default Table;
