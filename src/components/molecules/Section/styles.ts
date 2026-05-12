import styled from 'styled-components'
import type { LandingVariantTypes } from '@/types/styles'

interface ILandingTemplate {
  $variant: LandingVariantTypes
  $background: string
}

export const Section = styled.section<ILandingTemplate>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container.lg};
`

export const SectionContent = styled.div``
