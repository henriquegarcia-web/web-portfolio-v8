import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[20]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} 0;
  }
`

export const AboutSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: min(100%, 42rem);
  }
`
