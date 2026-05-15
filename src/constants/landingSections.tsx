import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

import HeroSection from '@/components/organisms/HeroSection'

const AboutSection = lazy(() => import('@/components/organisms/AboutSection'))
const ServicesSection = lazy(
  () => import('@/components/organisms/ServicesSection'),
)
const ProjectsSection = lazy(
  () => import('@/components/organisms/ProjectsSection'),
)
const TestimonialsSection = lazy(
  () => import('@/components/organisms/TestimonialsSection'),
)
const ProcessSection = lazy(
  () => import('@/components/organisms/ProcessSection'),
)
const CtaSection = lazy(() => import('@/components/organisms/CtaSection'))

export interface ILandingSection {
  id: string
  Component: ComponentType | LazyExoticComponent<ComponentType>
  background: {
    type: 'color' | 'image' | 'video'
    value: string
  }
  eager?: boolean
  showInNavigation: boolean
}

export const landingSections: ILandingSection[] = [
  {
    id: 'inicio',
    Component: HeroSection,
    background: {
      type: 'video',
      value: '/hero_bg.mp4',
    },
    eager: true,
    showInNavigation: true,
  },
  {
    id: 'sobre',
    Component: AboutSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
  {
    id: 'servicos',
    Component: ServicesSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
  {
    id: 'projetos',
    Component: ProjectsSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
  {
    id: 'feedback',
    Component: TestimonialsSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
  {
    id: 'processos',
    Component: ProcessSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
  {
    id: 'cta',
    Component: CtaSection,
    background: {
      type: 'color',
      value: 'transparent',
    },
    showInNavigation: true,
  },
]
