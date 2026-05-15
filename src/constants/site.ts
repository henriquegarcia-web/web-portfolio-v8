export const SITE_CONFIG = {
  defaultLocale: 'pt-BR',
  fallbackLocale: 'en-US',
  siteUrl: 'https://henriquegarcia.dev.br',
  title: 'Henrique Garcia | Frontend Developer',
  description:
    'Portfolio profissional de Henrique Garcia, frontend developer especializado em interfaces modernas, performance, experiencia do usuario e solucoes digitais escalaveis.',
  author: {
    name: 'Henrique Garcia',
    jobTitle: 'Frontend Developer',
  },
  contactEmail: 'henriquegarcia.tech@gmail.com',
  contactPhone: '84991675322',
  ogImage: '/cta_banner.png',
  socialLinks: {
    github: 'https://github.com/henriquegarcia-web',
    linkedin: 'https://www.linkedin.com/in/henrique-garcia-dev/',
    instagram: 'https://instagram.com/henrique.jsx',
    behance: 'https://www.behance.net/henrique-garcia-dev',
  },
} as const

export const CONTACT_HREF = `mailto:${SITE_CONFIG.contactEmail}`
export const WHATSAPP_HREF = `https://wa.me/55${SITE_CONFIG.contactPhone}`
export const PROJECTS_HREF = SITE_CONFIG.socialLinks.behance
