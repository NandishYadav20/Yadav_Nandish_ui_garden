import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';
import { DISABLED_BG, DEFAULT_WHITE } from '../../shared/disabled';

const StyledImg = styled.img<{ $bg: string; $disabled: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <StyledImg data-testid="img" src={src} alt={alt} $bg={backgroundColor} $disabled={disabled} />
);

export default Img;
