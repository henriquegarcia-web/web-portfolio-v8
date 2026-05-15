// ================== IMPORTS

import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import * as S from './styles'

import Header from '@/components/organisms/Header'

const Footer = lazy(() => import('@/components/organisms/Footer'))

// ================== COMPONENT TYPES

interface ILandingTemplate {
  children: React.ReactNode
}

// ================== COMPONENT

const LandingTemplate = ({ children }: ILandingTemplate) => {
  const footerRef = useRef<HTMLDivElement | null>(null)
  const [shouldRenderFooter, setShouldRenderFooter] = useState(false)

  useEffect(() => {
    const footerElement = footerRef.current

    if (!footerElement) return

    if (!('IntersectionObserver' in window)) {
      setShouldRenderFooter(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setShouldRenderFooter(true)
        observer.disconnect()
      },
      {
        rootMargin: '900px 0px',
      },
    )

    observer.observe(footerElement)

    return () => observer.disconnect()
  }, [])

  return (
    <S.LandingTemplate>
      <Header />
      <S.LandingContent>{children}</S.LandingContent>
      <S.FooterBoundary ref={footerRef} aria-busy={!shouldRenderFooter}>
        {shouldRenderFooter && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
      </S.FooterBoundary>
    </S.LandingTemplate>
  )
}

export default LandingTemplate
