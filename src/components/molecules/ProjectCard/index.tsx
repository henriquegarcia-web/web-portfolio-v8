// ================== IMPORTS

import * as S from './styles'

import { Image, Tag, Typography } from '@/components/atoms'
import type { IProject } from '@/constants/projects'
import { useAppTranslation } from '@/hooks/useAppTranslation'
import { useEffect, useState } from 'react'

// ================== COMPONENT TYPES

interface IProjectCard {
  project: IProject
}

// ================== COMPONENT

const IMAGE_INTERVAL = 1500

const ProjectCard = ({ project }: IProjectCard) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const { t } = useAppTranslation()

  const projectData = {
    images: project.images,
    title: t(`components.projects.${project.id}.title`),
    tag: t(`components.projects.${project.id}.tag`),
    description: t(`components.projects.${project.id}.description`),
    techs: project.technologies,
  }

  useEffect(() => {
    if (!isHovering || projectData.images.length <= 1) return

    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === projectData.images.length - 1 ? 0 : prev + 1,
      )
    }, IMAGE_INTERVAL)

    return () => window.clearInterval(interval)
  }, [isHovering, projectData.images.length])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCurrentImageIndex(0)
  }

  return (
    <S.ProjectCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.ProjectImage>
        <S.ProjectImageTrack $currentImageIndex={currentImageIndex}>
          {projectData.images.map((image, index) => (
            <S.ProjectImageItem key={`${project.id}-image-${index}`}>
              <Image
                src={image}
                alt={`Projeto ${project.id} - imagem ${index + 1}`}
                width={500}
                height={300}
                sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 50vw, 33vw"
              />
            </S.ProjectImageItem>
          ))}
        </S.ProjectImageTrack>

        <S.ProjectTag>
          <Tag variant="default">{projectData.tag}</Tag>
        </S.ProjectTag>
      </S.ProjectImage>

      <S.ProjectContent>
        <Typography variant="subtitle" as="h3">
          {projectData.title}
        </Typography>

        <Typography variant="caption" as="p">
          {projectData.description}
        </Typography>

        {/* <S.ProjectTagsWrapper>
          {projectData.techs.slice(0, 3).map((tech) => (
            <Tag key={`tag-tech-${project.id}-${tech}`} variant="tech">
              {tech}
            </Tag>
          ))}
        </S.ProjectTagsWrapper> */}
      </S.ProjectContent>
    </S.ProjectCard>
  )
}

export default ProjectCard
