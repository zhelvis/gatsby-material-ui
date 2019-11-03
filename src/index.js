import React, { useState, useMemo, createContext } from "react"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

export const DarkModeContext = createContext({
  darMode: false,
  toogleDarkMode: () => {},
})

const App = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toogleDarkMode = () =>  setDarkMode(!darkMode);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  )

  return (
    <DarkModeContext.Provider value={{
      darkMode,
      toogleDarkMode
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
