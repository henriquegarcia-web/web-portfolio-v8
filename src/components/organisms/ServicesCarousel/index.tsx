// ================== IMPORTS

import * as S from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ServiceCard } from '@/components/molecules'
import { services } from '@/constants/services'

// ================== COMPONENT

const ServicesCarousel = () => {
  return (
    <S.ServicesCarousel>
      <S.CarouselControlPrev>
        <FaChevronLeft />
      </S.CarouselControlPrev>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
      <S.CarouselControlNext>
        <FaChevronRight />
      </S.CarouselControlNext>
    </S.ServicesCarousel>
  )
}

export default ServicesCarousel
