// ================== IMPORTS

import { Suspense } from 'react'
import * as S from './styles'

import type { ILandingSection } from '@/constants/landingSections'

// ================== COMPONENT TYPES

interface ISection {
  section: ILandingSection
}

// ================== COMPONENT

const Section = ({ section }: ISection) => {
  const { id, Component, background } = section

  const isColor = background.type === 'color'
  const isImage = background.type === 'image'
  const isVideo = background.type === 'video'

  return (
    <Suspense fallback={null}>
      <S.Section id={id}>
        <S.SectionWrapper>
          <Component />
        </S.SectionWrapper>

        <S.SectionBackground
          $type={background.type}
          $background={isColor || isImage ? background.value : undefined}
        >
          {isVideo && (
            <S.BackgroundVideo
              autoPlay
              muted
              loop
              poster={background.value}
              playsInline
              preload="none"
              aria-hidden
              disablePictureInPicture
            >
              <source src={background.value} type="video/mp4" />
            </S.BackgroundVideo>
          )}
        </S.SectionBackground>
      </S.Section>
    </Suspense>
  )
}
export default Section
