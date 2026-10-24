import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';
import { DISABLED_BG, DISABLED_TEXT, DEFAULT_BLUE, LIGHT_TEXT } from '../../shared/disabled';

const StyledHero = styled.section<{ $bg: string; $disabled: boolean }>`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $disabled }) => ($disabled ? DISABLED_TEXT : LIGHT_TEXT)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};

  img {
    display: block;
    width: 100%;
    height: auto;
    filter: ${({ $disabled }) => ($disabled ? 'grayscale(100%)' : 'none')};
  }

  h1 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 1rem;
    font-size: clamp(1.25rem, 4vw, 2rem);
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, backgroundColor = DEFAULT_BLUE, disabled = false }) => (
  <StyledHero data-testid="hero-image" $bg={backgroundColor} $disabled={disabled}>
    <img src={src} alt={alt} />
    <h1>{title}</h1>
  </StyledHero>
);

export default HeroImage;
