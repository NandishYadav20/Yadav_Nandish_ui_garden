import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';
import { surfaceStyles, SurfaceProps, DEFAULT_LIGHT, DARK_TEXT } from '../../shared/disabled';

const StyledText = styled.p<SurfaceProps>`
  ${surfaceStyles}
  margin: 0;
  padding: 0.5rem;
  border-radius: 4px;
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({ text, backgroundColor = DEFAULT_LIGHT, disabled = false }) => (
  <StyledText data-testid="text" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    {text}
  </StyledText>
);

export default Text;
