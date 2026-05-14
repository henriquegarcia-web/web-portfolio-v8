// ================== IMPORTS

import * as S from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ServiceCard } from '@/components/molecules'
import { services } from '@/constants/services'
import { useCarousel, useResponsiveItemsPerView } from '@/hooks/useCarousel'

// ================== COMPONENT

const ServicesCarousel = () => {
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
    items: services,
    itemsPerView,
    loop: true,
  })

  return (
    <S.ServicesCarousel>
      <S.CarouselViewport>
        <S.CarouselTrack
          $translateX={translateX}
          $dragOffset={dragOffset}
          $enableTransition={enableTransition}
          $isDragging={isDragging}
          onTransitionEnd={handleTransitionEnd}
          {...dragHandlers}
        >
          {carouselItems.map((service, index) => (
            <S.CarouselItem
              key={`${service.id}-${index}`}
              $itemWidth={itemWidth}
            >
              <ServiceCard service={service} />
            </S.CarouselItem>
          ))}
        </S.CarouselTrack>
      </S.CarouselViewport>

      <S.CarouselControlPrev onClick={prev} aria-label="Servico anterior">
        <FaChevronLeft />
      </S.CarouselControlPrev>

      <S.CarouselControlNext onClick={next} aria-label="Proximo servico">
        <FaChevronRight />
      </S.CarouselControlNext>
    </S.ServicesCarousel>
  )
}

export default ServicesCarousel
