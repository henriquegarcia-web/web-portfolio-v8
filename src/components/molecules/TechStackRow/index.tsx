// ================== IMPORTS

import * as S from './styles'
import StackIcon from 'tech-stack-icons'

import { techStack } from '@/constants/stack'
import { useAppTranslation } from '@/hooks/useAppTranslation'
import { Typography } from '@/components/atoms'

// ================== COMPONENT

const TechStackRow = () => {
  const { t } = useAppTranslation()

  return (
    <S.TechStackRow>
      <Typography variant="text" as="p">
        {t('components.techStack.title')}
      </Typography>
      <S.TechStackWrapper>
        {techStack.map((stack) => (
          <StackIcon key={`stack-${stack.id}`} name={stack.id} />
        ))}
      </S.TechStackWrapper>
    </S.TechStackRow>
  )
}

export default TechStackRow
