import styled from 'styled-components'

export const Link = styled.a`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`
