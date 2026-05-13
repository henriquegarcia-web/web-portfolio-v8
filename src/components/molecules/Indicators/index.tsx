// ================== IMPORTS

import * as S from './styles'

import { indicators } from '@/constants/indicators'
import { Indicator } from '@/components/atoms'

// ================== COMPONENT

const Indicators = () => {
  return (
    <S.Indicators>
      {indicators.map((indicator) => (
        <Indicator key={indicator.id} indicator={indicator} />
      ))}
    </S.Indicators>
  )
}

export default Indicators
