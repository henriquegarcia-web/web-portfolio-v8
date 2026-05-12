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
import type { LandingVariantTypes } from '@/types/styles'

export interface ILandingSection {
  id: string
  variant: LandingVariantTypes
  Component: ComponentType
  background: string
  showInNavigation: boolean
}

export const landingSections: ILandingSection[] = [
  {
    id: 'inicio',
    variant: 'full-component',
    Component: HeroSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'sobre',
    variant: 'full-component',
    Component: AboutSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'servicos',
    variant: 'with-title',
    Component: ServicesSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'projetos',
    variant: 'with-title',
    Component: ProjectsSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'feedback',
    variant: 'with-title',
    Component: TestimonialsSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'processos',
    variant: 'with-title',
    Component: ProcessSection,
    background: 'transparent',
    showInNavigation: true,
  },
  {
    id: 'cta',
    variant: 'full-component',
    Component: CtaSection,
    background: 'transparent',
    showInNavigation: true,
  },
]
