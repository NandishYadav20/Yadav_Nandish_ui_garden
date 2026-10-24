import { css } from 'styled-components';

export const DEFAULT_BLUE = '#1976d2';
export const DEFAULT_LIGHT = '#e3f2fd';
export const DEFAULT_WHITE = '#ffffff';
export const DARK_TEXT = '#212121';
export const LIGHT_TEXT = '#ffffff';
export const DISABLED_BG = '#bdbdbd';
export const DISABLED_TEXT = '#424242';

export interface SurfaceProps {
  $bg: string;
  $text: string;
  $disabled: boolean;
}

// Shared look: uses the custom background when enabled, greys out when disabled.
export const surfaceStyles = css<SurfaceProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $text, $disabled }) => ($disabled ? DISABLED_TEXT : $text)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'auto')};
`;
