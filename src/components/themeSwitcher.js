import React from 'react'
import { IconButton } from '@mui/material'
import Brightness4 from '@mui/icons-material/Brightness4'
import { useColorScheme } from '@mui/material/styles'

export const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme()

  const toggleColorMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <IconButton onClick={toggleColorMode} color="primary" size="large">
      <Brightness4 />
    </IconButton>
  )
}
