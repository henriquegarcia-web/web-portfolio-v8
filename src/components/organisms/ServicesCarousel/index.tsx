// ================== IMPORTS

import * as S from './styles'

import { ServiceCard } from '@/components/molecules'
import { services } from '@/constants/services'

// ================== COMPONENT

const ServicesCarousel = () => {
  return (
    <S.ServicesCarousel>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </S.ServicesCarousel>
  )
}

export default ServicesCarousel
