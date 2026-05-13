// ================== IMPORTS

import { useState } from 'react'

import * as S from './styles'
import { FaChevronDown } from 'react-icons/fa'

import { AnimatePresence } from 'framer-motion'
import { languages } from '@/constants/languages'

// ================== COMPONENT

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages[0]

  return (
    <S.Container>
      <S.Trigger type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <S.Flag src={currentLanguage.image} alt={currentLanguage.id} />

        <S.Arrow
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown />
        </S.Arrow>
      </S.Trigger>

      <AnimatePresence>
        {isOpen && (
          <S.Dropdown
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <S.Item
                key={language.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <S.Flag src={language.image} alt={language.id} />
              </S.Item>
            ))}
          </S.Dropdown>
        )}
      </AnimatePresence>
    </S.Container>
  )
}

export default LanguageSelector
