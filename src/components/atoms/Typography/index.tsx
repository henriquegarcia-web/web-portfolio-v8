// ================== IMPORTS

import * as S from './styles'

export type TypographyVariant =
  | 'hero-title'
  | 'title'
  | 'subtitle'
  | 'label'
  | 'text'
  | 'caption'
  | 'button'
  | 'link'

// ================== COMPONENT TYPES

export interface ITypography {
  children: React.ReactNode
  variant?: TypographyVariant
  as?: React.ElementType
  className?: string
}

// ================== COMPONENT

const Typography = ({
  children,
  variant = 'text',
  as,
  className,
}: ITypography) => {
  return (
    <S.Typography as={as} $variant={variant} className={className}>
      {children}
    </S.Typography>
  )
}

export default Typography
