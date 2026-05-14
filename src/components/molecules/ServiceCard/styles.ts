import styled from 'styled-components'

export const ServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.sm};

  background-color: ${({ theme }) => theme.colors.background.subtle};
  border: 1px solid ${({ theme }) => theme.colors.border.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`
