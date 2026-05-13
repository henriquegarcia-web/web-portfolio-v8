import { memo } from 'react'

import * as S from './styles'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import type {
  ButtonVariantTypes,
  PostionTypes,
  SizeTypes,
} from '@/types/styles'

type ButtonBaseProps = {
  variant?: ButtonVariantTypes
  size?: SizeTypes
  children?: ReactNode
  icon?: ReactNode
  iconPosition?: PostionTypes
}

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    type?: 'button' | 'submit'
  }

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<LinkProps, 'to'> & {
    type: 'link'
    path: string
  }

type IButton = ButtonAsButtonProps | ButtonAsLinkProps

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  type = 'button',
  ...props
}: IButton) => {
  const hasOnlyIcon = Boolean(icon && iconPosition === 'only')

  const content = (
    <>
      {icon && iconPosition === 'left' && <S.IconWrapper>{icon}</S.IconWrapper>}

      {!hasOnlyIcon && children && <S.Label>{children}</S.Label>}

      {icon && iconPosition === 'right' && (
        <S.IconWrapper>{icon}</S.IconWrapper>
      )}

      {icon && hasOnlyIcon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </>
  )

  if (type === 'link') {
    const { path, ...linkProps } = props as ButtonAsLinkProps

    return (
      <S.ButtonLink
        to={path}
        $variant={variant}
        $size={size}
        $iconOnly={hasOnlyIcon}
        {...linkProps}
      >
        {content}
      </S.ButtonLink>
    )
  }

  return (
    <S.Button
      type={type}
      $variant={variant}
      $size={size}
      $iconOnly={hasOnlyIcon}
      {...(props as ButtonAsButtonProps)}
    >
      {content}
    </S.Button>
  )
}

export default memo(Button)
