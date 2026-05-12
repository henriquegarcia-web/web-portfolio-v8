// ================== IMPORTS

import * as S from './styles'

import { SectionHeader } from '@/components/molecules'
import type { ILandingSection } from '@/constants/landingSections'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface ISection {
  section: ILandingSection
}

// ================== COMPONENT

const Section = ({ section }: ISection) => {
  const { id, variant, Component, background } = section

  const hasHeader = variant === 'with-title'

  const { t } = useAppTranslation()

  const headerData = hasHeader
    ? {
        label: t(`sections.${id}.label`),
        headline: t(`sections.${id}.headline`),
      }
    : null

  return (
    <S.Section id={id} $variant={variant} $background={background}>
      <S.SectionWrapper>
        {hasHeader && headerData && (
          <SectionHeader
            label={headerData.label}
            headline={headerData.headline}
          />
        )}

        <S.SectionContent>
          <Component />
        </S.SectionContent>
      </S.SectionWrapper>
    </S.Section>
  )
}

export default Section
