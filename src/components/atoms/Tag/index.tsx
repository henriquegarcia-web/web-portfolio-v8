// ================== IMPORTS

import * as S from './styles'

import { Typography } from '@/components/atoms'
import type { TagVariantTypes } from '@/types/styles'

// ================== COMPONENT TYPES

interface ITag {
  variant?: TagVariantTypes
  children: React.ReactNode
}

// ================== COMPONENT

const Tag = ({ variant = 'default', children }: ITag) => {
  return (
    <S.Tag $variant={variant}>
      {variant === 'tech' && <S.SectionTagDot />}
      <Typography variant="tag" as="p">
        {children}
      </Typography>
    </S.Tag>
  )
}

export default Tag
