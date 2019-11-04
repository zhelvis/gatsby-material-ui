import React from "react"

import DarkThemeProvider from "./theme/DarkThemeProvider"

export const wrapRootElement = ({ element }) => {
  return <DarkThemeProvider>{element}</DarkThemeProvider>
}
