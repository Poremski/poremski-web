import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import sv from './sv.json'
import es from './es.json'
import eo from './eo.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  messages: {
    sv: sv,
    en: en,
    es: es,
    eo: eo
  }
})

export default i18n
