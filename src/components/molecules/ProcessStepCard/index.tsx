// ================== IMPORTS

import * as S from './styles'

import { StepNumber, Typography } from '@/components/atoms'
import type { IProcess } from '@/constants/process'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IProcessStepCard {
  position: number
  process: IProcess
}

// ================== COMPONENT

const ProcessStepCard = ({ position, process }: IProcessStepCard) => {
  const { t } = useAppTranslation()

  return (
    <S.ProcessStepCard>
      <S.ProcessStepIconWrapper>
        <S.ProcessStepIcon>{process.icon}</S.ProcessStepIcon>
      </S.ProcessStepIconWrapper>
      <S.ProcessStepDetails>
        <StepNumber step={position} decimal={2} />
      </S.ProcessStepDetails>
      <Typography variant="text" as="p">
        {t(`components.processes.${process.id}.title`)}
      </Typography>
      <Typography variant="text" as="p">
        {t(`components.processes.${process.id}.description`)}
      </Typography>
    </S.ProcessStepCard>
  )
}

export default ProcessStepCard
