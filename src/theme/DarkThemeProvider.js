import React, { useMemo } from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import DarkModeContext from './darkModeContext'
import themes from './themes'
import usePersistedState from '../hooks/usePersistedState'

export default ({ children }) => {
  const [darkMode, setDarkMode] = usePersistedState('darkMode', false)

  const toogleDarkMode = () => setDarkMode(!darkMode)

  const theme = useMemo(
    () => createMuiTheme(darkMode ? themes.dark : themes.light),
    [darkMode]
  )

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toogleDarkMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}
