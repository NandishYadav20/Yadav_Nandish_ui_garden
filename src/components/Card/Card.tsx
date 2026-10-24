import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';
import { surfaceStyles, SurfaceProps, DEFAULT_WHITE, DARK_TEXT } from '../../shared/disabled';

const StyledCard = styled.article<SurfaceProps>`
  ${surfaceStyles}
  max-width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 320px;

  h3 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Card: React.FC<CardProps> = ({ title, text, backgroundColor = DEFAULT_WHITE, disabled = false }) => (
  <StyledCard data-testid="card" $bg={backgroundColor} $text={DARK_TEXT} $disabled={disabled}>
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledCard>
);

export default Card;
