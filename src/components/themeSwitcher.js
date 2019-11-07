import React, { useContext } from "react"
import Button from "@material-ui/core/Button"

import DarkModeContext from "../theme/darkModeContext"

export default () => {
  const { toogleDarkMode } = useContext(DarkModeContext)
  return (
    <Button onClick={toogleDarkMode} variant="contained" color="primary">
      Switch theme
    </Button>
  )
}
