// ================== IMPORTS

import * as S from './styles'

// ================== COMPONENT TYPES

interface INavLink {
  label: string
  path: string
  active: boolean
}

// ================== COMPONENT

const NavLink = ({ label, path, active }: INavLink) => {
  return (
    <S.NavLink href={path} $active={active}>
      {label}
    </S.NavLink>
  )
}

export default NavLink
