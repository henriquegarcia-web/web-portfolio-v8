import styled from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  min-height: calc(100dvh - ${({ theme }) => theme.sizes.header.desktop});
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: calc(100dvh - ${({ theme }) => theme.sizes.header.mobile});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing[12]} 0;
  }
`

export const HeroSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: min(100%, 38rem);
  }
`
