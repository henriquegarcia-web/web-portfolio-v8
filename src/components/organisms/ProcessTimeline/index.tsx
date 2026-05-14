// ================== IMPORTS

import * as S from './styles'

import { ProcessStepCard } from '@/components/molecules'
import { processes } from '@/constants/process'

// ================== COMPONENT

const ProcessTimeline = () => {
  return (
    <S.ProcessTimeline>
      {processes.map((process, index) => (
        <ProcessStepCard
          key={process.id}
          position={index + 1}
          process={process}
          nextColor={processes[index + 1]?.color}
        />
      ))}
    </S.ProcessTimeline>
  )
}

export default ProcessTimeline
