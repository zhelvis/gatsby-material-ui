import React from 'react'

import DarkThemeProvider from './theme/darkThemeProvider'

export const wrapRootElement = ({ element }) => {
  return <DarkThemeProvider>{element}</DarkThemeProvider>
}
