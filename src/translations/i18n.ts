import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { SITE_CONFIG } from '@/constants/site'
import enUSCommon from './locales/en-US/common.json'
import ptBRCommon from './locales/pt-BR/common.json'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const resources = {
  'en-US': {
    common: enUSCommon,
  },
  'pt-BR': {
    common: ptBRCommon,
  },
} as const

const supportedLanguages = Object.keys(resources)

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return SITE_CONFIG.defaultLocale

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
    return storedLanguage
  }

  return SITE_CONFIG.defaultLocale
}

const syncDocumentLanguage = (language: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = language
  }
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: SITE_CONFIG.fallbackLocale,
  showSupportNotice: false,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  supportedLngs: supportedLanguages,
})

i18n.on('languageChanged', (language) => {
  syncDocumentLanguage(language)

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }
})

syncDocumentLanguage(i18n.language || SITE_CONFIG.defaultLocale)

export default i18n
