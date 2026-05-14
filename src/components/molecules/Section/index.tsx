// ================== IMPORTS

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
            playsInline
            preload="metadata"
            aria-hidden
            disablePictureInPicture
          >
            <source src={background.value} type="video/mp4" />
          </S.BackgroundVideo>
        )}
      </S.SectionBackground>
    </S.Section>
  )
}
export default Section
