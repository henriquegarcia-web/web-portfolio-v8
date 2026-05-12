// ================== IMPORTS

import { memo } from 'react'

import * as S from './styles'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type {
  ButtonVariantTypes,
  PostionTypes,
  SizeTypes,
} from '@/types/styles'

// ================== COMPONENT TYPES

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantTypes
  size?: SizeTypes
  value?: string
  icon?: ReactNode
  iconPosition?: PostionTypes
}

// ================== COMPONENT

const Button = ({
  variant = 'primary',
  size = 'md',
  value,
  icon,
  iconPosition = 'left',
  type = 'button',
  ...props
}: IButton) => {
  const hasOnlyIcon = Boolean(icon && iconPosition === 'only')

  return (
    <S.Button
      $variant={variant}
      $size={size}
      $iconOnly={hasOnlyIcon}
      type={type}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <S.IconWrapper>{icon}</S.IconWrapper>
      )}

      {!hasOnlyIcon && value && <S.Label>{value}</S.Label>}

      {icon && iconPosition === 'right' && (
        <S.IconWrapper>{icon}</S.IconWrapper>
      )}

      {icon && hasOnlyIcon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Button>
  )
}

export default memo(Button)
