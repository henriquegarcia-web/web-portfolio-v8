import { forwardRef, memo } from 'react'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from 'react'

import * as S from './styles'

import Typography from '@/components/atoms/Typography'
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
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type IButton = ButtonAsButtonProps | ButtonAsAnchorProps

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButton>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref,
  ) => {
    const hasOnlyIcon = Boolean(icon && iconPosition === 'only')

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <S.IconWrapper>{icon}</S.IconWrapper>
        )}

        {!hasOnlyIcon && children && (
          <Typography variant="button" as="span">
            {children}
          </Typography>
        )}

        {icon && iconPosition === 'right' && (
          <S.IconWrapper>{icon}</S.IconWrapper>
        )}

        {icon && hasOnlyIcon && <S.IconWrapper>{icon}</S.IconWrapper>}
      </>
    )

    if ('href' in props && props.href) {
      const { href, ...anchorProps } = props as ButtonAsAnchorProps

      return (
        <S.ButtonLink
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          $variant={variant}
          $size={size}
          $iconOnly={hasOnlyIcon}
          {...anchorProps}
        >
          {content}
        </S.ButtonLink>
      )
    }

    const { type = 'button', ...buttonProps } = props as ButtonAsButtonProps

    return (
      <S.Button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        $variant={variant}
        $size={size}
        $iconOnly={hasOnlyIcon}
        {...buttonProps}
      >
        {content}
      </S.Button>
    )
  },
)

Button.displayName = 'Button'

export default memo(Button)
