// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import ProcessTimeline from '@/components/organisms/ProcessTimeline'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const ProcessSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.ProcessSection>
      <SectionHeader
        label={t('sections.processos.label')}
        headline={t('sections.processos.headline')}
      />
      <ProcessTimeline />
    </S.ProcessSection>
  )
}

export default ProcessSection
