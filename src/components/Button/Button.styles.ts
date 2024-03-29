import { css } from '@emotion/react';

import { theme } from '../../theme';

const {
  colors,
  opacities,
  margin,
  padding,
  fonts,
  fontSizes,
  fontWeights,
  shadows,
  transitions,
} = theme;

export const Styles = css`
  appearance: none;
  -webkit-appearance: none;
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  box-sizing: border-box;
  padding: ${padding.xxs} ${padding.xs};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${margin.xxs};
  cursor: pointer;
  transition: opacity ${transitions[0]}, color ${transitions[0]},
    background-color ${transitions[0]};
  :hover {
    opacity: ${opacities[75]};
  }
  :focus-visible {
    outline: none;
    box-shadow: ${shadows.focus.color};
  }
  :active {
    opacity: ${opacities[5]};
  }
  :disabled {
    user-select: none;
    cursor: not-allowed;
    color: ${colors.text.secondary};
    background-color: ${colors.disabled};
    border-color: transparent;
  }
  :disabled:active {
    transform: none;
  }
`;

export const TertiaryVariant = css`
  border-color: transparent;
`;

export const OutlineVariant = css`
  border: 2px solid;
  border-color: currentColor;
`;

export const SmallStyles = css`
  ${fontSizes[0]};
  padding: ${padding.xxs} ${padding.xs};
  gap: ${margin.xxs};
`;

export const LargeStyles = css`
  ${fontSizes[2]};
  padding: ${padding.xs} ${padding.md};
  gap: ${margin.xs};
`;

export const FullStyles = css`
  width: 100%;
`;
