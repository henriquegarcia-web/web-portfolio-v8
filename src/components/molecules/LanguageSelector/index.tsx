// ================== IMPORTS

import { useEffect, useRef, useState } from 'react'

import * as S from './styles'
import { FaChevronDown } from 'react-icons/fa'

import { languages } from '@/constants/languages'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { i18n } = useAppTranslation()
  const containerRef = useRef<HTMLDivElement | null>(null)

  const currentLanguage =
    languages.find((language) => language.id === i18n.language) ?? languages[0]

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleLanguageChange = (
    languageId: (typeof languages)[number]['id'],
  ) => {
    void i18n.changeLanguage(languageId)
    setIsOpen(false)
  }

  return (
    <S.Container ref={containerRef}>
      <S.Trigger
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Idioma atual: ${currentLanguage.label}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <S.Flag src={currentLanguage.image} alt="" aria-hidden />

        <S.Arrow $isOpen={isOpen} aria-hidden>
          <FaChevronDown />
        </S.Arrow>
      </S.Trigger>

      {isOpen && (
        <S.Dropdown role="listbox" aria-label="Selecionar idioma">
          {languages.map((language) => (
            <S.Item
              key={language.id}
              type="button"
              role="option"
              aria-selected={language.id === currentLanguage.id}
              aria-label={language.label}
              onClick={() => handleLanguageChange(language.id)}
            >
              <S.Flag src={language.image} alt="" aria-hidden />
            </S.Item>
          ))}
        </S.Dropdown>
      )}
    </S.Container>
  )
}

export default LanguageSelector
