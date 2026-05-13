// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import { ProjectsCarousel } from '@/components/organisms'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const ProjectsSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.ProjectsSection>
      <S.ProjectsSectionLeft>
        <SectionHeader
          label={t('sections.projetos.label')}
          headline={t('sections.projetos.headline')}
          cta={{
            label: 'Ver todos os projetos',
            path: '/servicos',
          }}
        />
      </S.ProjectsSectionLeft>
      <S.ProjectsSectionRight>
        <ProjectsCarousel />
      </S.ProjectsSectionRight>
    </S.ProjectsSection>
  )
}

export default ProjectsSection
