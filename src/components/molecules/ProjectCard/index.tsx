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

const getOptimizedProjectImage = (src: string, width: 640 | 960) => {
  const match = src.match(/^\/projects\/([^/]+)\/([^/]+)\.png$/)

  if (!match) return src

  const [, projectId, imageId] = match

  return `/optimized/projects/${projectId}/${imageId}-${width}.jpg`
}

const ProjectCard = ({ project }: IProjectCard) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const { t } = useAppTranslation()
  const images = project.images

  const projectData = {
    title: t(`components.projects.${project.id}.title`),
    tag: t(`components.projects.${project.id}.tag`),
    description: t(`components.projects.${project.id}.description`),
    techs: project.technologies,
  }

  useEffect(() => {
    if (!isHovering || images.length <= 1) return

    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      )
    }, IMAGE_INTERVAL)

    return () => window.clearInterval(interval)
  }, [images.length, isHovering])

  useEffect(() => {
    if (!isHovering || images.length <= 1) return

    const nextImageIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    const image = new window.Image()

    image.src = getOptimizedProjectImage(images[nextImageIndex], 960)
  }, [currentImageIndex, images, isHovering])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCurrentImageIndex(0)
  }

  const currentImage = images[currentImageIndex] ?? images[0]

  return (
    <S.ProjectCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.ProjectImage>
        <Image
          src={getOptimizedProjectImage(currentImage, 640)}
          srcSet={`${getOptimizedProjectImage(
            currentImage,
            640,
          )} 640w, ${getOptimizedProjectImage(currentImage, 960)} 960w`}
          alt={`Projeto ${project.id} - imagem ${currentImageIndex + 1}`}
          width={500}
          height={300}
          sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 50vw, 33vw"
        />

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
