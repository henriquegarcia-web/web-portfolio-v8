export interface IService {
  id: string
  icon: string
}

export const services = [
  {
    id: 'web-mobile',
    icon: '/optimized/services/service-web-mobile.png',
  },
  {
    id: 'custom-systems',
    icon: '/optimized/services/service-custom-systems.png',
  },
  {
    id: 'automations',
    icon: '/optimized/services/service-automations.png',
  },
  {
    id: 'api',
    icon: '/optimized/services/service-api.png',
  },
  {
    id: 'consultancy',
    icon: '/optimized/services/service-consultancy.png',
  },
] satisfies IService[]
