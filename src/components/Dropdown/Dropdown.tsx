import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { surfaceStyles, SurfaceProps, DEFAULT_WHITE, DARK_TEXT } from '../../shared/disabled';

const StyledSelect = styled.select<SurfaceProps>`
  ${surfaceStyles}
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #9e9e9e;
  border-radius: 4px;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <StyledSelect
    data-testid="dropdown"
    value={value}
    onChange={onChange}
    disabled={disabled}
    $bg={backgroundColor}
    $text={DARK_TEXT}
    $disabled={disabled}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
