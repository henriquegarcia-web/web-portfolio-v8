// ================== IMPORTS

import { useEffect, useMemo, useState } from 'react'

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
      navigationSections.map((section) => {
        const sectionPath = `#${section.id}`

        return {
          ...section,
          path: sectionPath,
          active: currentHash === sectionPath,
        }
      }),
    [currentHash],
  )

  return (
    <S.Navigator aria-label="Navegação principal">
      {navItems.map((section) => (
        <NavLink
          key={section.id}
          label={t(`sections.${section.id}.nav`)}
          path={section.path}
          active={section.active}
        />
      ))}
    </S.Navigator>
  )
}

export default Navigator
