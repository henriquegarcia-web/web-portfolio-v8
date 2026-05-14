import styled, { css } from 'styled-components'

import type { ILandingSection } from '@/constants/landingSections'

type BackgroundType = ILandingSection['background']['type']

interface ISectionBackground {
  $type: BackgroundType
  $background?: string
}

export const Section = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: ${({ theme }) => theme.spacing[4]};

  width: 100%;
  overflow: hidden;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: ${({ theme }) => theme.spacing[3]};
  }
`

export const SectionWrapper = styled.div`
  z-index: 10;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container.lg};
`

export const SectionBackground = styled.div<ISectionBackground>`
  z-index: 5;

  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  ${({ $type, $background }) =>
    $type === 'color' &&
    css`
      background-color: ${$background};
    `}

  ${({ $type, $background }) =>
    $type === 'image' &&
    css`
      background-image: url(${$background});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`

export const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  opacity: 0.2;

  object-fit: cover;
`
