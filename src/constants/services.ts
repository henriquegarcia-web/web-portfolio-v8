export interface IService {
  id: string
  icon: string
}

export const services = [
  {
    id: 'web-mobile',
    icon: '/services/service-web-mobile.png',
  },
  {
    id: 'custom-systems',
    icon: '/services/service-custom-systems.png',
  },
  {
    id: 'automations',
    icon: '/services/service-automations.png',
  },
  {
    id: 'api',
    icon: '/services/service-api.png',
  },
  {
    id: 'consultancy',
    icon: '/services/service-consultancy.png',
  },
] satisfies IService[]
