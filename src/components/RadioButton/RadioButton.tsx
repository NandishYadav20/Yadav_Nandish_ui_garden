import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';
import { surfaceStyles, SurfaceProps, DEFAULT_LIGHT, DARK_TEXT } from '../../shared/disabled';

const StyledLabel = styled.label<SurfaceProps>`
  ${surfaceStyles}
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  text,
  name,
  value,
  onChange,
  backgroundColor = DEFAULT_LIGHT,
  disabled = false,
}) => (
  <StyledLabel data-testid="radio-button" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    <input type="radio" name={name} value={value ?? text} onChange={onChange} disabled={disabled} />
    {text}
  </StyledLabel>
);

export default RadioButton;
