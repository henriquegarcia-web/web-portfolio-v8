// ================== IMPORTS

import * as S from './styles'

import { StepNumber, Typography } from '@/components/atoms'
import type { IProcess } from '@/constants/process'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IProcessStepCard {
  position: number
  process: IProcess
  nextColor?: string
}

// ================== COMPONENT

const ProcessStepCard = ({
  position,
  process,
  nextColor,
}: IProcessStepCard) => {
  const { t } = useAppTranslation()
  const ProcessIcon = process.icon

  const processGradient = `linear-gradient(90deg, ${process.color}, ${
    nextColor ?? 'transparent'
  })`

  return (
    <S.ProcessStepCard>
      <S.ProcessStepIconWrapper>
        <S.ProcessStepIcon $color={process.color}>
          <ProcessIcon aria-hidden />
        </S.ProcessStepIcon>
        <S.ProcessStepBar $color={process.color} $gradient={processGradient} />
      </S.ProcessStepIconWrapper>
      <S.ProcessStepDetails>
        <StepNumber step={position} decimal={2} />
        <Typography variant="subtitle" as="h3">
          {t(`components.processes.${process.id}.title`)}
        </Typography>
        <Typography variant="caption" as="p">
          {t(`components.processes.${process.id}.description`)}
        </Typography>
      </S.ProcessStepDetails>
    </S.ProcessStepCard>
  )
}

export default ProcessStepCard
