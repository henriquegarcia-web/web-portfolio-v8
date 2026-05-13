// ================== IMPORTS

import * as S from './styles'

import { Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface INavLink {
  label: string
  path: string
  active: boolean
}

// ================== COMPONENT

const NavLink = ({ label, path, active }: INavLink) => {
  return (
    <S.NavLink href={path} data-active={active}>
      <Typography variant="nav" as="p" active={active}>
        {label}
      </Typography>
    </S.NavLink>
  )
}

export default NavLink
