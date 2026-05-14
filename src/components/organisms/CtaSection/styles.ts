import styled from 'styled-components'

export const CtaSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing[20]} 0;
  padding: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) => theme.spacing[12]} 0;
    padding: ${({ theme }) => theme.spacing[8]}
      ${({ theme }) => theme.spacing[5]};
  }
`

export const CtaSectionContent = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const CtaSectionBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  background-image: url('/cta_banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
