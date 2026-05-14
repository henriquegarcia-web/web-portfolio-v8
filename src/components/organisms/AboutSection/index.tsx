// ================== IMPORTS

import * as S from './styles'

import { Typography } from '@/components/atoms'
import { Indicators, SectionHeader } from '@/components/molecules'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const AboutSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.AboutSection>
      <S.AboutSectionLeft>
        <SectionHeader
          label={t('sections.sobre.label')}
          headline={t('sections.sobre.headline')}
          highlight={t('sections.sobre.headlineFocus')}
        />
        <Typography variant="text" as="p">
          {t('sections.sobre.about')}
        </Typography>
        <Indicators />
      </S.AboutSectionLeft>
    </S.AboutSection>
  )
}

export default AboutSection
