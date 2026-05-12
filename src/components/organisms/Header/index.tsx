// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, Logo } from '@/components/atoms'
import { LanguageSelector, Navigator } from '@/components/molecules'

// ================== COMPONENT

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <Navigator />
        <S.HeaderCtas>
          <Button
            value="Vamos Conversar"
            icon={<FaLocationArrow />}
            iconPosition="right"
            variant="secondary"
          />
          <LanguageSelector />
        </S.HeaderCtas>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
