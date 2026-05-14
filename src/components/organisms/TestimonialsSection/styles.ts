import styled from 'styled-components'

export const TestimonialsSection = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[20]} 0;
`

export const TestimonialsSectionLeft = styled.div`
  display: flex;
  width: 30%;
`

export const TestimonialsSectionRight = styled.div`
  display: flex;
  flex: 1;
  /* width: 70%; */
`
