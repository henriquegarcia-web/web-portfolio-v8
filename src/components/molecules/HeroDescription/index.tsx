// ================== IMPORTS

import * as S from './styles'
import { RiArrowRightUpLine } from 'react-icons/ri'

import { Button, Typography } from '@/components/atoms'
import { CONTACT_HREF } from '@/constants/site'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const HeroDescription = () => {
  const { t } = useAppTranslation()

  return (
    <S.HeroDescription>
      <Typography variant="label" as="p">
        {t('sections.inicio.label')}
      </Typography>
      <Typography
        variant="hero-title"
        as="h1"
        highlight={t('sections.inicio.headlineFocus')}
      >
        {t('sections.inicio.headline')}
      </Typography>
      <S.HeroLegend>
        <Typography variant="text" as="p">
          {t('sections.inicio.legend')}
        </Typography>
      </S.HeroLegend>
      <S.HeroCtas>
        <Button
          icon={<RiArrowRightUpLine />}
          iconPosition="right"
          variant="primary"
          href="#projetos"
        >
          {t('sections.inicio.ctaProjects')}
        </Button>
        <Button
          icon={<RiArrowRightUpLine />}
          iconPosition="right"
          variant="secondary"
          href={CONTACT_HREF}
        >
          {t('sections.inicio.ctaContact')}
        </Button>
      </S.HeroCtas>
    </S.HeroDescription>
  )
}

export default HeroDescription
