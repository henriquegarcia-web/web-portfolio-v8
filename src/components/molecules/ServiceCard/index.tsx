// ================== IMPORTS

import * as S from './styles'

import { Image, Typography } from '@/components/atoms'
import type { IService } from '@/constants/services'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IServiceCard {
  service: IService
}

// ================== COMPONENT

const ServiceCard = ({ service }: IServiceCard) => {
  const { t } = useAppTranslation()

  return (
    <S.ServiceCard>
      <Image src={service.icon} alt="" width={40} height={40} />
      <Typography variant="text" as="p">
        {t(`components.services.${service.id}.title`)}
      </Typography>
      <Typography variant="text" as="p">
        {t(`components.services.${service.id}.legend`)}
      </Typography>
    </S.ServiceCard>
  )
}

export default ServiceCard
