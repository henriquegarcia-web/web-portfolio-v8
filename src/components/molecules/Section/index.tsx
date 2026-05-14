// ================== IMPORTS

import { useEffect, useRef } from 'react'
import * as S from './styles'

import type { ILandingSection } from '@/constants/landingSections'

// ================== COMPONENT TYPES

interface ISection {
  section: ILandingSection
}

// ================== COMPONENT

const Section = ({ section }: ISection) => {
  const { id, Component, background } = section

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const isColor = background.type === 'color'
  const isImage = background.type === 'image'
  const isVideo = background.type === 'video'

  useEffect(() => {
    if (!isVideo) return

    const handleLoad = () => {
      setTimeout(() => {
        videoRef?.current?.play().catch(() => {})
      }, 200)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)

      return () => {
        window.removeEventListener('load', handleLoad)
      }
    }
  }, [isVideo])

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
            ref={videoRef}
            // autoPlay
            muted
            loop
            poster={'/hero_bg_poster.png'}
            playsInline
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
