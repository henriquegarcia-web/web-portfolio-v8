// ================== IMPORTS

import { Link as RRDLink } from 'react-router-dom'

import { Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface ILink {
  to: string
  children: string
}

// ================== COMPONENT

const Link = ({ to, children }: ILink) => {
  return (
    <RRDLink to={to}>
      <Typography variant="text" as="p">
        {children}
      </Typography>
    </RRDLink>
  )
}

export default Link
