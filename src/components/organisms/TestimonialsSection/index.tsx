// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import { TestimonialsGrid } from '@/components/organisms'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const TestimonialsSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.TestimonialsSection>
      <S.TestimonialsSectionLeft>
        <SectionHeader
          label={t('sections.feedback.label')}
          headline={t('sections.feedback.headline')}
        />
      </S.TestimonialsSectionLeft>
      <S.TestimonialsSectionRight>
        <TestimonialsGrid />
      </S.TestimonialsSectionRight>
    </S.TestimonialsSection>
  )
}

export default TestimonialsSection
