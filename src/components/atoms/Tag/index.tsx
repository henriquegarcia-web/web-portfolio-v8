// ================== IMPORTS

import * as S from './styles'

import type { TagVariantTypes } from '@/types/styles'

// ================== COMPONENT TYPES

interface ITag {
  variant?: TagVariantTypes
  children: React.ReactNode
}

// ================== COMPONENT

const Tag = ({ variant = 'default', children }: ITag) => {
  return <S.Tag $variant={variant}>{children}</S.Tag>
}

export default Tag
