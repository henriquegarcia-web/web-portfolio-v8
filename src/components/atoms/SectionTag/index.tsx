// ================== IMPORTS

import * as S from './styles'

import { Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface ISectionTag {
  children: string
}

// ================== COMPONENT

const SectionTag = ({ children }: ISectionTag) => {
  return (
    <S.SectionTag>
      <S.SectionTagDot />
      <Typography variant="tag" as="p">
        {children}
      </Typography>
    </S.SectionTag>
  )
}

export default SectionTag
