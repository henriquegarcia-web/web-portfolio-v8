// ================== IMPORTS

import * as S from './styles'
import { RiArrowRightUpLine } from 'react-icons/ri'

import { Button, SectionTag, Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface ISectionHeader {
  label: string
  headline: string
  highlight?: string
  cta?: {
    label: string
    path: string
  }
}

// ================== COMPONENT

const SectionHeader = ({ label, headline, highlight, cta }: ISectionHeader) => {
  return (
    <S.SectionHeader>
      <SectionTag>{label}</SectionTag>
      <Typography variant="title" as="h2" highlight={highlight}>
        {headline}
      </Typography>

      <S.SectionHeaderCta>
        {cta && (
          <Button
            icon={<RiArrowRightUpLine />}
            iconPosition="right"
            variant="secondary"
            href={cta.path}
          >
            {cta.label}
          </Button>
        )}
      </S.SectionHeaderCta>
    </S.SectionHeader>
  )
}

export default SectionHeader
