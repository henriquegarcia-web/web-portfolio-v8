// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, Logo } from '@/components/atoms'
import { LanguageSelector, Navigator } from '@/components/molecules'
import { MobileMenu } from '@/components/organisms'

// ================== COMPONENT

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <Navigator />
        <S.HeaderCtas>
          <Button
            icon={<FaLocationArrow />}
            iconPosition="right"
            variant="secondary"
          >
            Vamos Conversar
          </Button>
          <LanguageSelector />
          <MobileMenu />
        </S.HeaderCtas>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
