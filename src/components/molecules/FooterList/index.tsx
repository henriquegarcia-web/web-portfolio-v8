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
      <S.FooterListTitle>

      <Typography variant="subtitle" as="p" highlight={title}>
        {title}
      </Typography>
      </S.FooterListTitle>
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
