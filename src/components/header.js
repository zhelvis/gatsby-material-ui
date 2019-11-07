import React from "react"
import { FormattedMessage } from "react-intl"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import LangSwitcher from "./languageSwitcher"
import ThemeSwitcher from "./themeSwitcher"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id="title" />
          </Typography>
          <LangSwitcher locale="ru">ru</LangSwitcher>
          <LangSwitcher locale="en">en</LangSwitcher>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
