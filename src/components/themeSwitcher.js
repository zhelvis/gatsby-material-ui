import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'

import { DarkModeContext } from '../../plugins/gatsby-plugin-material-ui-dark-mode'

export default () => {
  const { toogleDarkMode } = useContext(DarkModeContext)
  return (
    <Button onClick={toogleDarkMode} variant="contained" color="primary">
      Switch theme
    </Button>
  )
}
