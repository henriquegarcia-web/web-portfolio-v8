import type { SocialIdTypes } from '@/types/styles'

export interface ISocialLink {
  id: SocialIdTypes
  name: string
  link: string
}

export const SOCIAL_LINKS = [
  {
    id: 'github',
    name: 'GitHub',
    link: 'https://github.com/henriquegarcia-web',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/henrique-garcia-dev/',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    link: 'http://instagram.com/henrique.jsx',
  },
  {
    id: 'email',
    name: 'E-mail',
    link: 'mailto:henriquegarcia.tech@gmail.com',
  },
  {
    id: 'behance',
    name: 'Behance',
    link: 'https://www.behance.net/henrique-garcia-dev',
  },
] satisfies ISocialLink[]
