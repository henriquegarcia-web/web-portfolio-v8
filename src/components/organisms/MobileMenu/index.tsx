// ================== IMPORTS

import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

import * as S from './styles'

import { Button, Typography } from '@/components/atoms'
import { landingSections } from '@/constants/landingSections'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { t } = useAppTranslation()

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.MobileMenu aria-label="Mobile menu">
      <S.ToggleWrapper>
        <Button
          variant="secondary"
          size="md"
          icon={isOpen ? <HiX /> : <HiMenuAlt3 />}
          iconPosition="only"
          onClick={handleToggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        />
      </S.ToggleWrapper>

      <S.AnimatePresence>
        {isOpen && (
          <>
            <S.Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleCloseMenu}
            />

            <S.Sidebar
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <S.Header>
                <Typography variant="label" as="strong">
                  Menu
                </Typography>

                <Button
                  variant="secondary"
                  size="sm"
                  icon={<HiX />}
                  iconPosition="only"
                  onClick={handleCloseMenu}
                  aria-label="Fechar menu"
                />
              </S.Header>

              <S.Content>
                <S.NavigationList>
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
      </S.AnimatePresence>
    </S.MobileMenu>
  )
}

export default MobileMenu
