// ================== IMPORTS

import { useEffect, useRef, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

import * as S from './styles'

import { Button, Typography } from '@/components/atoms'
import { landingSections } from '@/constants/landingSections'
import { useAppTranslation } from '@/hooks/useAppTranslation'
import { LanguageSelector } from '@/components/molecules'

// ================== COMPONENT

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const sidebarRef = useRef<HTMLElement | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

  const { t } = useAppTranslation()

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocusedElement = document.activeElement
    const originalOverflow = document.body.style.overflow
    const toggleButton = toggleButtonRef.current

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseMenu()
        return
      }

      if (event.key !== 'Tab' || !sidebarRef.current) return

      const focusableElements = Array.from(
        sidebarRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      )

      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)

      if (!firstElement || !lastElement) return

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)

      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus()
      } else {
        toggleButton?.focus()
      }
    }
  }, [isOpen])

  return (
    <S.MobileMenu aria-label="Mobile menu">
      <S.ToggleWrapper>
        <LanguageSelector />
        <Button
          ref={toggleButtonRef}
          variant="secondary"
          size="md"
          icon={isOpen ? <HiX /> : <HiMenuAlt3 />}
          iconPosition="only"
          onClick={handleToggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        />
      </S.ToggleWrapper>

      {isOpen && (
        <>
          <S.Overlay
            type="button"
            aria-label="Fechar menu mobile"
            onClick={handleCloseMenu}
          />

          <S.Sidebar
            id="mobile-navigation-menu"
            ref={sidebarRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegacao"
          >
            <S.Header>
              <Typography variant="label" as="strong">
                Menu
              </Typography>

              <Button
                ref={closeButtonRef}
                variant="secondary"
                size="sm"
                icon={<HiX />}
                iconPosition="only"
                onClick={handleCloseMenu}
                aria-label="Fechar painel de navegacao"
              />
            </S.Header>

            <S.Content>
              <S.NavigationList role="list">
                {landingSections
                  .filter((section) => section.showInNavigation)
                  .map((section) => (
                    <S.NavigationItem key={section.id}>
                      <S.NavigationLink
                        href={`#${section.id}`}
                        onClick={handleCloseMenu}
                      >
                        <Typography variant="nav" as="span">
                          {t(`sections.${section.id}.nav`)}
                        </Typography>
                      </S.NavigationLink>
                    </S.NavigationItem>
                  ))}
              </S.NavigationList>
            </S.Content>
          </S.Sidebar>
        </>
      )}
    </S.MobileMenu>
  )
}

export default MobileMenu
