import { Suspense, useEffect, useRef, useState } from 'react'
import * as S from './styles'

import type { ILandingSection } from '@/constants/landingSections'

// ================== COMPONENT TYPES

interface ISection {
  section: ILandingSection
}

// ================== COMPONENT

const Section = ({ section }: ISection) => {
  const { id, Component, background, eager = false } = section
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [shouldRenderContent, setShouldRenderContent] = useState(eager)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  const isColor = background.type === 'color'
  const isImage = background.type === 'image'
  const isVideo = background.type === 'video'

  useEffect(() => {
    if (shouldRenderContent) return

    const sectionElement = sectionRef.current

    if (!sectionElement) return

    if (!('IntersectionObserver' in window)) {
      setShouldRenderContent(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setShouldRenderContent(true)
        observer.disconnect()
      },
      {
        rootMargin: '900px 0px',
      },
    )

    observer.observe(sectionElement)

    return () => observer.disconnect()
  }, [shouldRenderContent])

  useEffect(() => {
    if (!isVideo) return

    const hasReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isCompactViewport = window.matchMedia('(max-width: 48rem)').matches
    const connection = (
      navigator as Navigator & {
        connection?: {
          effectiveType?: string
          saveData?: boolean
        }
      }
    ).connection

    if (
      hasReducedMotion ||
      isCompactViewport ||
      connection?.saveData ||
      connection?.effectiveType === '2g' ||
      connection?.effectiveType === 'slow-2g'
    ) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setShouldLoadVideo(true)
    }, 1600)

    return () => window.clearTimeout(timeoutId)
  }, [isVideo])

  return (
    <S.Section
      id={id}
      ref={sectionRef}
      $isContentMounted={shouldRenderContent}
      $isEager={eager}
    >
      <S.SectionWrapper aria-busy={!shouldRenderContent}>
        {shouldRenderContent && (
          <Suspense fallback={null}>
            <Component />
          </Suspense>
        )}
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
            poster="/optimized/hero_bg_poster-1280.jpg"
            preload="none"
            playsInline
            aria-hidden
            disablePictureInPicture
          >
            {shouldLoadVideo && (
              <source src={background.value} type="video/mp4" />
            )}
          </S.BackgroundVideo>
        )}
      </S.SectionBackground>
    </S.Section>
  )
}
export default Section
