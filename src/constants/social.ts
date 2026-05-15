import type { SocialIdTypes } from '@/types/styles'
import { SITE_CONFIG, WHATSAPP_HREF } from './site'

export interface ISocialLink {
  id: SocialIdTypes
  name: string
  link: string
}

export const SOCIAL_LINKS = [
  {
    id: 'github',
    name: 'GitHub',
    link: SITE_CONFIG.socialLinks.github,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: SITE_CONFIG.socialLinks.linkedin,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    link: SITE_CONFIG.socialLinks.instagram,
  },
  {
    id: 'email',
    name: 'E-mail',
    link: `mailto:${SITE_CONFIG.contactEmail}`,
  },
  {
    id: 'behance',
    name: 'Behance',
    link: SITE_CONFIG.socialLinks.behance,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    link: WHATSAPP_HREF,
  },
] satisfies ISocialLink[]
