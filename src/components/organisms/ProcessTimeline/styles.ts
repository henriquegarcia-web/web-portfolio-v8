import styled from 'styled-components'

export const ProcessTimeline = styled.section`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`
