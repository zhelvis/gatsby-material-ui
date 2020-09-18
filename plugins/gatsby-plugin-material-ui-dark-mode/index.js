import React, { useMemo, createContext } from 'react'
import PropTypes from 'prop-types'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import usePersistedState from './usePersistedState'
import themes from '../../src/themes'

export const DarkModeContext = createContext({
  darMode: false,
  toogleDarkMode: () => {},
})

export const DarkModeProvider = ({ children }) => {
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

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
