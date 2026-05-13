// ================== IMPORTS

import * as S from './styles'

import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaRegEnvelopeOpen,
} from 'react-icons/fa'

import { SOCIAL_LINKS } from '@/constants/social'

import type { IconType } from 'react-icons'
import type { SizeTypes, SocialIdTypes } from '@/types/styles'

// ================== UTILS

const iconMap: Record<ISocialLink['icon'], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  email: FaRegEnvelopeOpen,
  behance: FaBehance,
}

const sizeMap: Record<NonNullable<ISocialLink['size']>, number> = {
  sm: 16,
  md: 20,
  lg: 24,
}

// ================== COMPONENT TYPES

interface ISocialLink {
  icon: SocialIdTypes
  size?: SizeTypes
}

// ================== COMPONENT

const SocialLink = ({ icon, size = 'md' }: ISocialLink) => {
  const Icon = iconMap[icon]

  const socialData = SOCIAL_LINKS.find((social) => social.id === icon)

  if (!socialData) {
    return null
  }

  return (
    <S.SocialLink
      href={socialData.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={socialData.name}
      title={socialData.name}
    >
      <Icon size={sizeMap[size]} />
    </S.SocialLink>
  )
}

export default SocialLink
