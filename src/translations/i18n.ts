import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SITE_CONFIG } from '@/constants/site';
import enUSCommon from './locales/en-US/common.json';
import ptBRCommon from './locales/pt-BR/common.json';

const resources = {
  'en-US': {
    common: enUSCommon,
  },
  'pt-BR': {
    common: ptBRCommon,
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: SITE_CONFIG.defaultLocale,
  fallbackLng: SITE_CONFIG.fallbackLocale,
  showSupportNotice: false,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  supportedLngs: Object.keys(resources),
});

export default i18n;
