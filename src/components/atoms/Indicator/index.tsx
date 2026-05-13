// ================== IMPORTS

import * as S from './styles'

import { Typography } from '@/components/atoms'
import type { IIndicatorItem } from '@/constants/indicators'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IIndicator {
  indicator: IIndicatorItem
}

// ================== COMPONENT

const Indicator = ({ indicator }: IIndicator) => {
  const { t } = useAppTranslation()

  return (
    <S.Indicator>
      <Typography variant="text" as="p">
        {indicator.value}
      </Typography>
      <Typography variant="text" as="p">
        {t(`components.indicators.${indicator.id}`)}
      </Typography>
    </S.Indicator>
  )
}

export default Indicator
