import React from "react"

import DarkThemeProvider from "./theme/darkThemeProvider"
import LanguageProvider from "./i18n/languageProvider"

export const wrapRootElement = ({ element }) => {
  return <DarkThemeProvider>{element}</DarkThemeProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return <LanguageProvider {...props}>{element}</LanguageProvider>
}
