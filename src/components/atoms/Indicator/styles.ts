import styled from 'styled-components'

export const Indicator = styled.span`
  display: flex;
  flex-direction: column;
  max-width: 140px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.border.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;

    &:not(:last-child) {
      border-right: 0;
      padding-bottom: ${({ theme }) => theme.spacing[4]};
      border-bottom: 1px solid ${({ theme }) => theme.colors.border.accent};
    }
  }
`
