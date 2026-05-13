// ================== IMPORTS

import * as S from './styles'

import type { ILandingSection } from '@/constants/landingSections'

// ================== COMPONENT TYPES

interface ISection {
  section: ILandingSection
}

// ================== COMPONENT

const Section = ({ section }: ISection) => {
  const { id, Component, background } = section

  return (
    <S.Section id={id} $background={background}>
      <S.SectionWrapper>
        <Component />
      </S.SectionWrapper>
    </S.Section>
  )
}

export default Section
