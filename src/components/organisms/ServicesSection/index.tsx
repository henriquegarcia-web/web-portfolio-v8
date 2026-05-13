// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import { ServicesCarousel } from '@/components/organisms'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const ServicesSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.ServicesSection>
      <SectionHeader
        label={t('sections.servicos.label')}
        headline={t('sections.servicos.headline')}
      />
      <ServicesCarousel />
    </S.ServicesSection>
  )
}

export default ServicesSection
