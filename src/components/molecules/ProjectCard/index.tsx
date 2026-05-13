// ================== IMPORTS

import * as S from './styles'

import { Image, Tag, Typography } from '@/components/atoms'
import type { IProject } from '@/constants/projects'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IProjectCard {
  project: IProject
}

// ================== COMPONENT

const ProjectCard = ({ project }: IProjectCard) => {
  const { t } = useAppTranslation()

  const projectData = {
    images: project.images[0],
    title: t(`components.projects.${project.id}.title`),
    tag: t(`components.projects.${project.id}.tag`),
    description: t(`components.projects.${project.id}.description`),
    techs: project.technologies,
  }

  return (
    <S.ProjectCard>
      <S.ProjectImage>
        <Image
          src={projectData.images}
          alt={`Projeto ${project.id}`}
          width={500}
          height={300}
        />
        <S.ProjectTag>
          <Tag variant="default">{projectData.tag}</Tag>
        </S.ProjectTag>
      </S.ProjectImage>

      <Typography variant="text" as="p">
        {projectData.tag}
      </Typography>
      <Typography variant="text" as="p">
        {projectData.tag}
      </Typography>

      <S.ProjectTagsWrapper>
        {projectData.techs.map((tech) => (
          <Tag key={`tag-tech-${project.id}-${tech}`} variant="default">
            {tech}
          </Tag>
        ))}
      </S.ProjectTagsWrapper>
    </S.ProjectCard>
  )
}

export default ProjectCard
