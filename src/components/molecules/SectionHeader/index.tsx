// ================== IMPORTS

import * as S from './styles'

// ================== COMPONENT TYPES

interface ISectionHeader {
  label: string
  headline: string
}

// ================== COMPONENT

const SectionHeader = ({ label, headline }: ISectionHeader) => {
  return (
    <S.SectionHeader>
      <S.SectionHeaderTitle>{label}</S.SectionHeaderTitle>
      <S.SectionHeaderHeadline>{headline}</S.SectionHeaderHeadline>
    </S.SectionHeader>
  )
}

export default SectionHeader
