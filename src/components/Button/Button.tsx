import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import { surfaceStyles, SurfaceProps, DEFAULT_BLUE, LIGHT_TEXT } from '../../shared/disabled';

const StyledButton = styled.button<SurfaceProps>`
  ${surfaceStyles}
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  max-width: 100%;

  &:not(:disabled) {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, backgroundColor = DEFAULT_BLUE, disabled = false, onClick }) => (
  <StyledButton
    data-testid="button"
    type="button"
    $bg={backgroundColor}
    $text={LIGHT_TEXT}
    $disabled={disabled}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

export default Button;
