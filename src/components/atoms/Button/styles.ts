import styled, { css } from 'styled-components'

import type { ButtonVariantTypes, SizeTypes } from '@/types/styles'

interface IButtonStyleProps {
  $variant: ButtonVariantTypes
  $size: SizeTypes
  $iconOnly?: boolean
}

const buttonVariants = {
  primary: css`
    color: ${({ theme }) => theme.colors.neutral.white};
    background: ${({ theme }) => theme.colors.brand.fade};

    border: 1px solid rgba(255, 255, 255, 0.18);

    box-shadow:
      0 0 18px rgba(91, 93, 240, 0.55),
      0 0 36px rgba(139, 92, 246, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.22);

    &::before {
      opacity: 1;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.24),
        transparent 55%
      );
    }

    &::after {
      opacity: 0.35;
      background: ${({ theme }) => theme.colors.brand.fade};
      filter: blur(14px);
    }
  `,

  secondary: css`
    color: ${({ theme }) => theme.colors.neutral.white};
    background: rgba(2, 6, 23, 0.45);

    border: 1px solid ${({ theme }) => theme.colors.border.subtle};

    box-shadow:
      0 0 18px rgba(91, 93, 240, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);

    &::before {
      opacity: 1;
      background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(139, 92, 246, 0.08) 30%,
          rgba(139, 92, 246, 0.75) 50%,
          rgba(139, 92, 246, 0.08) 70%,
          transparent 100%
        )
        border-box;
      mask:
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      border: 1px solid transparent;
    }

    &::after {
      opacity: 0.22;
      background: ${({ theme }) => theme.colors.brand.accent};
      filter: blur(12px);
    }
  `,
}

const buttonSizes = {
  sm: css`
    height: 36px;
    padding: 0 16px;
  `,

  md: css`
    height: 44px;
    padding: 0 22px;
  `,

  lg: css`
    height: 52px;
    padding: 0 28px;
  `,
}

const buttonStyles = css<IButtonStyleProps>`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  border: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  cursor: pointer;

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $size }) => buttonSizes[$size]}

  &::before,
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &::before {
    inset: 0;
    z-index: -1;
    border-radius: inherit;
  }

  &::after {
    z-index: -2;
    inset: 20%;
    border-radius: inherit;
  }

  ${({ $iconOnly }) =>
    $iconOnly &&
    css`
      padding: 0;
      aspect-ratio: 1 / 1;
    `}

  &:hover {
    opacity: 0.95;

    &::after {
      opacity: 0.45;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

export const ButtonLink = styled.a<IButtonStyleProps>`
  ${buttonStyles}
`

export const Button = styled.button<IButtonStyleProps>`
  ${buttonStyles}
`

export const Label = styled.span`
  position: relative;
  z-index: 1;
  line-height: 1;
`

export const IconWrapper = styled.span`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 0;

  color: inherit;

  svg {
    width: 1.3em;
    height: 1.3em;

    fill: currentColor;
    stroke: currentColor;
  }
`
