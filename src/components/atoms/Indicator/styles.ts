import styled from 'styled-components'

export const Indicator = styled.span`
  display: flex;
  flex-direction: column;
  max-width: 140px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.border.accent};
  }
`
