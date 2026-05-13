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
  background: string
  showInNavigation: boolean
}

export const landingSections: ILandingSection[] = [
  {
    id: 'inicio',
    Component: HeroSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'sobre',
    Component: AboutSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'servicos',
    Component: ServicesSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'projetos',
    Component: ProjectsSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'feedback',
    Component: TestimonialsSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'processos',
    Component: ProcessSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'cta',
    Component: CtaSection,
    background: 'transparent',
    showInNavigation: true,
  },
]
