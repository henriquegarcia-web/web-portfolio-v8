import * as S from './styles'

import { Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface ILink {
  to: string
  children: string
}

// ================== COMPONENT

const Link = ({ to, children }: ILink) => {
  return (
    <S.Link href={to}>
      <Typography variant="text" as="span">
        {children}
      </Typography>
    </S.Link>
  )
}

export default Link
