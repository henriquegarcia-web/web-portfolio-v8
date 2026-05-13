import styled from 'styled-components'

export const NavLink = styled.a`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-inline: ${({ theme }) => theme.spacing[3]};
`
