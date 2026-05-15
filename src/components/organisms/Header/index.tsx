// ================== IMPORTS

import * as S from './styles'
import { RiArrowRightUpLine } from 'react-icons/ri'

import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import MobileMenu from '@/components/organisms/MobileMenu'
import Navigator from '@/components/molecules/Navigator'
import { WHATSAPP_HREF } from '@/constants/site'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const Header = () => {
  const { t } = useAppTranslation()

  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <S.HeaderContent>
          <Navigator />
          <S.HeaderCtas>
            <Button
              icon={<RiArrowRightUpLine />}
              iconPosition="right"
              variant="secondary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              {t('sections.cta.ctaContact')}
            </Button>
            <LanguageSelector />
          </S.HeaderCtas>
        </S.HeaderContent>
        <MobileMenu />
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
