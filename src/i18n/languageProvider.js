import React from "react"
import { IntlProvider } from "react-intl"
import { getCurrentLangKey } from "ptz-i18n"
import { langs, defaultLangKey } from "./languages"
import i18nMessages from "./messages"

export default ({ children, location }) => {
  const currentLang = getCurrentLangKey(
    langs,
    defaultLangKey,
    location.pathname
  )
  console.log(currentLang)
  return (
    <IntlProvider locale={currentLang} messages={i18nMessages[currentLang]}>
      {children}
    </IntlProvider>
  )
}
