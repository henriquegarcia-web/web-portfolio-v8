// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, Typography } from '@/components/atoms'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const HeroDescription = () => {
  const { t } = useAppTranslation()

  return (
    <S.HeroDescription>
      <Typography variant="label" as="h2">
        {t('sections.inicio.label')}
      </Typography>
      <Typography variant="hero-title" as="h1">
        {t('sections.inicio.headline')}
      </Typography>
      <Typography variant="text" as="p">
        {t('sections.inicio.legend')}
      </Typography>
      <S.HeroCtas>
        <Button
          icon={<FaLocationArrow />}
          iconPosition="right"
          variant="primary"
        >
          {t('sections.inicio.ctaProjects')}
        </Button>
        <Button
          icon={<FaLocationArrow />}
          iconPosition="right"
          variant="secondary"
        >
          {t('sections.inicio.ctaContact')}
        </Button>
      </S.HeroCtas>
    </S.HeroDescription>
  )
}

export default HeroDescription
