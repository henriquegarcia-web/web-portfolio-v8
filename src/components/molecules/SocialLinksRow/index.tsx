// ================== IMPORTS

import * as S from './styles'

import { SocialLink } from '@/components/atoms'
import { SOCIAL_LINKS } from '@/constants/social'

// ================== COMPONENT

const SocialLinksRow = () => {
  return (
    <S.SocialLinksRow>
      {SOCIAL_LINKS.filter((social) => social.id !== 'email').map((social) => (
        <SocialLink key={social.id} icon={social.id} />
      ))}
    </S.SocialLinksRow>
  )
}

export default SocialLinksRow
