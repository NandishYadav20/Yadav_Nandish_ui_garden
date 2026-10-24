import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';
import { surfaceStyles, SurfaceProps, DEFAULT_BLUE, LIGHT_TEXT } from '../../shared/disabled';

const StyledLabel = styled.label<SurfaceProps>`
  ${surfaceStyles}
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, backgroundColor = DEFAULT_BLUE, disabled = false }) => (
  <StyledLabel data-testid="label" htmlFor={htmlFor} $bg={backgroundColor} $text={LIGHT_TEXT} $disabled={disabled}>
    {text}
  </StyledLabel>
);

export default Label;
