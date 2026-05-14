// ================== IMPORTS

import * as S from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ProjectCard } from '@/components/molecules'
import { projects } from '@/constants/projects'
import { useCarousel, useResponsiveItemsPerView } from '@/hooks/useCarousel'

// ================== COMPONENT

const ProjectsCarousel = () => {
  const itemsPerView = useResponsiveItemsPerView({
    default: 3,
    lg: 2,
    md: 1,
  })

  const {
    carouselItems,
    itemWidth,
    translateX,
    dragOffset,
    enableTransition,
    isDragging,
    next,
    prev,
    handleTransitionEnd,
    dragHandlers,
  } = useCarousel({
    items: projects,
    itemsPerView,
    loop: true,
  })

  return (
    <S.ProjectsCarousel
      role="group"
      aria-roledescription="carousel"
      aria-label="Projetos em destaque"
    >
      <S.CarouselViewport>
        <S.CarouselTrack
          $translateX={translateX}
          $dragOffset={dragOffset}
          $enableTransition={enableTransition}
          $isDragging={isDragging}
          onTransitionEnd={handleTransitionEnd}
          {...dragHandlers}
        >
          {carouselItems.map((project, index) => {
            const isClone =
              index < itemsPerView || index >= itemsPerView + projects.length

            return (
              <S.CarouselItem
                key={`${project.id}-${index}`}
                $itemWidth={itemWidth}
                aria-hidden={isClone}
              >
                <ProjectCard project={project} />
              </S.CarouselItem>
            )
          })}
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
