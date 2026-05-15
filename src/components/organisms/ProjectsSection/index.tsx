// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import ProjectsCarousel from '@/components/organisms/ProjectsCarousel'
import { PROJECTS_HREF } from '@/constants/site'
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
            label: t('sections.projetos.cta'),
            path: PROJECTS_HREF,
            target: '_blank',
            rel: 'noreferrer',
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
