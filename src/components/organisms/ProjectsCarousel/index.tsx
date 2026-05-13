// ================== IMPORTS

import * as S from './styles'

import { ProjectCard } from '@/components/molecules'
import { projects } from '@/constants/projects'

// ================== COMPONENT

const ProjectsCarousel = () => {
  return (
    <S.ProjectsCarousel>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.ProjectsCarousel>
  )
}

export default ProjectsCarousel
