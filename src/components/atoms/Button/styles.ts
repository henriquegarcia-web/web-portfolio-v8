import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import type { ButtonVariantTypes, SizeTypes } from '@/types/styles'

interface IButtonStyleProps {
  $variant: ButtonVariantTypes
  $size: SizeTypes
  $iconOnly?: boolean
}

const buttonVariants = {
  primary: css`
    background: #ffffff;
    color: #000000;
  `,

  secondary: css`
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
  `,
}

const buttonSizes = {
  sm: css`
    height: 36px;
    padding: 0 14px;
    font-size: 14px;
  `,

  md: css`
    height: 44px;
    padding: 0 18px;
    font-size: 16px;
  `,

  lg: css`
    height: 52px;
    padding: 0 24px;
    font-size: 18px;
  `,
}

const buttonStyles = css<IButtonStyleProps>`
  border: 0;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  cursor: pointer;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $size }) => buttonSizes[$size]}

  ${({ $iconOnly }) =>
    $iconOnly &&
    css`
      padding: 0;
      aspect-ratio: 1 / 1;
    `}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ButtonLink = styled(Link)<IButtonStyleProps>`
  ${buttonStyles}
`

export const Button = styled.button<IButtonStyleProps>`
  ${buttonStyles}
`

export const Label = styled.span`
  line-height: 1;
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 0;
`
