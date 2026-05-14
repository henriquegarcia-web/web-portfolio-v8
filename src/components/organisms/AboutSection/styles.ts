import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[20]} 0;
`

export const AboutSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: ${({ theme }) => theme.spacing[4]};
`
