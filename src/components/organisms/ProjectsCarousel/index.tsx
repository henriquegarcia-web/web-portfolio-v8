// ================== IMPORTS

import * as S from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ProjectCard } from '@/components/molecules'
import { projects } from '@/constants/projects'
import { useCarousel } from '@/hooks/useCarousel'

// ================== COMPONENT

const ProjectsCarousel = () => {
  const {
    carouselItems,
    itemWidth,
    translateX,
    enableTransition,
    next,
    prev,
    handleTransitionEnd,
  } = useCarousel({
    items: projects,
    itemsPerView: 3,
    loop: true,
  })

  return (
    <S.ProjectsCarousel>
      <S.CarouselViewport>
        <S.CarouselTrack
          $translateX={translateX}
          $enableTransition={enableTransition}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselItems.map((project, index) => (
            <S.CarouselItem
              key={`${project.id}-${index}`}
              $itemWidth={itemWidth}
            >
              <ProjectCard project={project} />
            </S.CarouselItem>
          ))}
        </S.CarouselTrack>
      </S.CarouselViewport>

      <S.CarouselControlPrev onClick={prev} aria-label="Projeto anterior">
        <FaChevronLeft />
      </S.CarouselControlPrev>

      <S.CarouselControlNext onClick={next} aria-label="Próximo projeto">
        <FaChevronRight />
      </S.CarouselControlNext>
    </S.ProjectsCarousel>
  )
}

export default ProjectsCarousel
