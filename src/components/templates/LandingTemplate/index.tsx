// ================== IMPORTS

import * as S from './styles'

import { Footer, Header } from '@/components/organisms'

// ================== COMPONENT TYPES

interface ILandingTemplate {
  children: React.ReactNode
}

// ================== COMPONENT

const LandingTemplate = ({ children }: ILandingTemplate) => {
  return (
    <S.LandingTemplate>
      <Header />
      <S.LandingContent>{children}</S.LandingContent>
      <Footer />
    </S.LandingTemplate>
  )
}

export default LandingTemplate
