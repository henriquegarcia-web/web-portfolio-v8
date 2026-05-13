// ================== IMPORTS

import * as S from './styles'

import { Link, Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface IListItem {
  id: string
  value: string
  path?: string
}

interface IFooterList {
  title: string
  items: IListItem[]
}

// ================== COMPONENT

const FooterList = ({ title, items }: IFooterList) => {
  return (
    <S.FooterList>
      <Typography variant="text" as="p">
        {title}
      </Typography>
      {items.map((item) => {
        if (!!item.path && item.path !== '')
          return (
            <Link key={item.id} to={item.path}>
              {item.value}
            </Link>
          )

        return (
          <Typography key={item.id} variant="text" as="p">
            {item.value}
          </Typography>
        )
      })}
    </S.FooterList>
  )
}

export default FooterList
