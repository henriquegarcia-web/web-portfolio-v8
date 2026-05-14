import styled from 'styled-components'

export const TestimonialsGrid = styled.section`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`
