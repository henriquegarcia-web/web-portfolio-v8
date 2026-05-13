// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, Logo, Typography } from '@/components/atoms'
import { FooterList, SocialLinksRow } from '@/components/molecules'
import { landingSections } from '@/constants/landingSections'
import { techStack } from '@/constants/stack'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const Footer = () => {
  const { t } = useAppTranslation()

  const navigationItems = landingSections
    .filter((section) => section.showInNavigation)
    .map((section) => ({
      id: section.id,
      value: t(`sections.${section.id}.nav`),
      path: `#${section.id}`,
    }))

  const techItems = techStack.map((tech) => ({
    id: tech.id,
    value: t(`components.techStack.${tech.id}`),
  }))

  const contactItems = [
    {
      id: 'availability',
      value: t('sections.footer.availability'),
    },
  ]

  return (
    <S.Footer>
      <S.MainFooter>
        <S.FooterColumn>
          <Logo />
          <Typography variant="text" as="p">
            {t('sections.footer.headline')}
          </Typography>
          <SocialLinksRow />
        </S.FooterColumn>
        <S.FooterColumn>
          <FooterList title="Navegação" items={navigationItems} />
        </S.FooterColumn>
        <S.FooterColumn>
          <FooterList title="Tecnologias" items={techItems} />
        </S.FooterColumn>
        <S.FooterColumn>
          <FooterList title="Vamos conversar" items={contactItems} />
          <Button
            icon={<FaLocationArrow />}
            iconPosition="right"
            variant="secondary"
          >
            {t('sections.cta.ctaContact')}
          </Button>
        </S.FooterColumn>
      </S.MainFooter>
      <S.BottomFooter>
        <Typography variant="text" as="p">
          {t('sections.footer.rights')}
        </Typography>
        <Typography variant="text" as="p">
          {t('sections.footer.madeBy')}
        </Typography>
      </S.BottomFooter>
    </S.Footer>
  )
}

export default Footer
