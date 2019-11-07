import React from "react"
import { IntlProvider } from "react-intl"
import { getCurrentLangKey } from "ptz-i18n"

import languageContex from "./languageContext"
import { langs, defaultLangKey } from "./languages"
import i18nMessages from "./messages"

export default ({ children, location }) => {

  const locale = getCurrentLangKey(langs, defaultLangKey, location.pathname)

  return (
    <languageContex.Provider value={{ locale }}>
      <IntlProvider locale={locale} messages={i18nMessages[locale]}>
        {children}
      </IntlProvider>
    </languageContex.Provider>
  )
}
