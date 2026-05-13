// ================== IMPORTS

import * as S from './styles'

import { HeroDescription, TechStackRow } from '@/components/molecules'

// ================== COMPONENT

const HeroSection = () => {
  return (
    <S.HeroSection>
      <S.HeroSectionLeft>
        <HeroDescription />
        <TechStackRow />
      </S.HeroSectionLeft>
    </S.HeroSection>
  )
}

export default HeroSection
