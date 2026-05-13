// ================== IMPORTS

import * as S from './styles'
import { FaLocationArrow } from 'react-icons/fa'

import { Button, SectionTag, Typography } from '@/components/atoms'

// ================== COMPONENT TYPES

interface ISectionHeader {
  label: string
  headline: string
  cta?: {
    label: string
    path: string
  }
}

// ================== COMPONENT

const SectionHeader = ({ label, headline, cta }: ISectionHeader) => {
  return (
    <S.SectionHeader>
      <SectionTag>{label}</SectionTag>
      <Typography variant="text" as="p">
        {headline}
      </Typography>
      {cta && (
        <Button
          icon={<FaLocationArrow />}
          iconPosition="right"
          variant="secondary"
          type="link"
          path={cta.path}
        >
          {cta.label}
        </Button>
      )}
    </S.SectionHeader>
  )
}

export default SectionHeader
