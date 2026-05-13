// ================== IMPORTS

import * as S from './styles'

import { SectionTag, Typography } from '@/components/atoms'
import { Indicators } from '@/components/molecules'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const AboutSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.AboutSection>
      <S.AboutSectionLeft>
        <SectionTag>{t('sections.sobre.label')}</SectionTag>
        <Typography variant="text" as="p">
          {t('sections.sobre.headline')}
        </Typography>
        <Typography variant="text" as="p">
          {t('sections.sobre.about')}
        </Typography>
        <Indicators />
      </S.AboutSectionLeft>
    </S.AboutSection>
  )
}

export default AboutSection
