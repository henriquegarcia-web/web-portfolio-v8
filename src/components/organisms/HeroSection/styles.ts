import styled from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  height: calc(100vh - ${({ theme }) => theme.sizes.header.desktop});
`

export const HeroSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
