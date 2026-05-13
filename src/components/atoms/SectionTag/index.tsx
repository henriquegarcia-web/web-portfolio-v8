// ================== IMPORTS

import * as S from './styles'

// ================== COMPONENT TYPES

interface ISectionTag {
  children: string
}

// ================== COMPONENT

const SectionTag = ({ children }: ISectionTag) => {
  return (
    <S.SectionTag>
      <S.SectionTagDot />
      {children}
    </S.SectionTag>
  )
}

export default SectionTag
