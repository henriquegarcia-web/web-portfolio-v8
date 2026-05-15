// ================== IMPORTS

import * as S from './styles'
import { RiArrowRightUpLine } from 'react-icons/ri'

import { Button, Typography } from '@/components/atoms'
import { WHATSAPP_HREF } from '@/constants/site'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const CtaSection = () => {
  const { t } = useAppTranslation()

  return (
    <S.CtaSection>
      <S.CtaSectionContent>
        <Typography variant="title" as="h2">
          {t('sections.cta.headline')}
        </Typography>
        {/* <Typography variant="text" as="p">
          {t('sections.cta.legend')}
        </Typography> */}
        <Button
          icon={<RiArrowRightUpLine />}
          iconPosition="right"
          variant="primary"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
        >
          {t('sections.cta.ctaContact')}
        </Button>
      </S.CtaSectionContent>
      <S.CtaSectionBanner />
    </S.CtaSection>
  )
}

export default CtaSection
