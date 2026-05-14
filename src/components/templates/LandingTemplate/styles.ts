import styled from 'styled-components'

export const LandingTemplate = styled.main`
  display: flex;
  flex-direction: column;
`

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.sizes.header.desktop};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.sizes.header.mobile};
  }
`
