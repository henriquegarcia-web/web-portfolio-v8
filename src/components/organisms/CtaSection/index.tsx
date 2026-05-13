// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, Typography } from '@/components/atoms'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const CtaSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.CtaSection>
      <Typography variant="text" as="p">
        {t('sections.cta.headline')}
      </Typography>
      <Typography variant="text" as="p">
        {t('sections.cta.legend')}
      </Typography>
      <Button icon={<FaLocationArrow />} iconPosition="right" variant="primary">
        {t('sections.cta.ctaContact')}
      </Button>
    </S.CtaSection>
  )
}

export default CtaSection
