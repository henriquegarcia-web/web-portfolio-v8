// ================== IMPORTS

import * as S from './styles'

// ================== TYPES

export type TypographyVariant =
  | 'hero-title'
  | 'title'
  | 'subtitle'
  | 'label'
  | 'text'
  | 'caption'
  | 'button'
  | 'link'
  | 'nav'

export interface ITypography {
  children: React.ReactNode
  variant?: TypographyVariant
  as?: React.ElementType
  className?: string
  active?: boolean
  highlight?: string
  uppercase?: boolean
}

// ================== UTILS

const renderHighlightedText = (text: string, highlight: string) => {
  if (!highlight.trim()) return text

  const regex = new RegExp(`(${highlight})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const isHighlighted = part.toLowerCase() === highlight.toLowerCase()

    if (!isHighlighted) return part

    return <S.Highlight key={`${part}-${index}`}>{part}</S.Highlight>
  })
}

// ================== COMPONENT

const Typography = ({
  children,
  variant = 'text',
  as,
  className,
  active = false,
  highlight,
  uppercase = false
}: ITypography) => {
  const content =
    typeof children === 'string' && highlight
      ? renderHighlightedText(children, highlight)
      : children

  return (
    <S.Typography
      as={as}
      $variant={variant}
      $active={active}
      $uppercase={uppercase}
      className={className}
    >
      {content}
    </S.Typography>
  )
}

export default Typography
