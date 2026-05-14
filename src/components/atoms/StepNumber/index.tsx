// ================== IMPORTS

import { Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface IStepNumber {
  step: number
  decimal?: number
}

// ================== COMPONENT

const StepNumber = ({ step, decimal = 2 }: IStepNumber) => {
  const formattedNumber = String(step).padStart(decimal, '0')

  return (
    <Typography variant="step" as="p">
      {formattedNumber}
    </Typography>
  )
}

export default StepNumber
