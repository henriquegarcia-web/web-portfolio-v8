// ================== IMPORTS

import * as S from './styles'

import HeroDescription from '@/components/molecules/HeroDescription'

// ================== COMPONENT

const HeroSection = () => {
  return (
    <S.HeroSection>
      <S.HeroSectionLeft>
        <HeroDescription />
      </S.HeroSectionLeft>
    </S.HeroSection>
  )
}

export default HeroSection
