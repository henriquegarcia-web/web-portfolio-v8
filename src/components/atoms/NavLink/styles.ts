import styled from 'styled-components'

interface INavLink {
  $active: boolean
}

export const NavLink = styled.a<INavLink>`
  border-bottom: 2px solid
    ${({ theme, $active }) =>
      $active
        ? theme.colors.brand.accent
        : theme.colors.neutral.darkest};
`
