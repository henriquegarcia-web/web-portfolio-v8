import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  ProcessSection,
  CtaSection,
} from '@/components/organisms'

import type { ComponentType } from 'react'

export interface ILandingSection {
  id: string
  Component: ComponentType
  background: {
    type: 'color' | 'image' | 'video'
    value: string
  }
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
