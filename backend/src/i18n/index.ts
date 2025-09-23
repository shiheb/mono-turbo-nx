import i18next from 'i18next'
import { LanguageDetector, handle } from 'i18next-http-middleware'
import { join } from 'path'

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  preload: ['en', 'ka'],
  resources: {
    en: { translation: require(join(__dirname, 'translations/en.json')) },
    ka: { translation: require(join(__dirname, 'translations/ka.json')) }
  }
})

export { i18next, handle as i18nextHttpMiddleware }
