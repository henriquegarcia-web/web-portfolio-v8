// ================== IMPORTS

import * as S from './styles'
import { RiArrowRightUpLine } from 'react-icons/ri'

import { Button, Logo } from '@/components/atoms'
import { LanguageSelector, Navigator } from '@/components/molecules'
import { MobileMenu } from '@/components/organisms'
import { CONTACT_HREF } from '@/constants/site'
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
              href={CONTACT_HREF}
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
