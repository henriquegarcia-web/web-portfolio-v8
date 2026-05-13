// ================== IMPORTS

import { useEffect, useMemo, useRef, useState } from 'react'

import * as S from './styles'

import { NavLink } from '@/components/atoms'
import { landingSections } from '@/constants/landingSections'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== UTILS

const navigationSections = landingSections.filter(
  (section) => section.showInNavigation,
)

const getCurrentHash = () =>
  window.location.hash || `#${navigationSections[0]?.id}`

// ================== COMPONENT

const Navigator = () => {
  const [currentHash, setCurrentHash] = useState(getCurrentHash)

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  })

  const navRef = useRef<HTMLElement | null>(null)

  const { t } = useAppTranslation()

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(getCurrentHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const navItems = useMemo(
    () =>
      navigationSections
        .filter((section) => section.id !== 'cta')
        .map((section) => {
          const sectionPath = `#${section.id}`

          return {
            ...section,
            path: sectionPath,
            active: currentHash === sectionPath,
          }
        }),
    [currentHash],
  )

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      '[data-active="true"]',
    ) as HTMLElement | null

    if (!activeElement) return

    setIndicatorStyle({
      width: activeElement.offsetWidth,
      left: activeElement.offsetLeft,
    })
  }, [currentHash])

  return (
    <S.Navigator ref={navRef} aria-label="Navegação principal">
      {navItems.map((section) => (
        <NavLink
          key={section.id}
          label={t(`sections.${section.id}.nav`)}
          path={section.path}
          active={section.active}
        />
      ))}

      <S.ActiveIndicator
        style={{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`,
        }}
      />
    </S.Navigator>
  )
}

export default Navigator
