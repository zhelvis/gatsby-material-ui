import React from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Hidden,
  Button,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import ThemeSwitcher from './themeSwitcher'

const drawerWidth = '18em'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const ListItemLink = (props) => {
  const { primary, to } = props

  return (
    <li>
      <ListItem button component={LocalizedLink} to={to}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

const NavList = () => {
  const { t } = useTranslation('layout')
  return (
    <List>
      <ListItemLink to="/" primary={t('home')} />
      <ListItemLink to="/page-2" primary={t('second')} />
      <ListItemLink to="/mdx" primary="Mdx page" />
    </List>
  )
}

const Layout = ({ children }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden implementation="css" mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography className={classes.title} variant="h6">
            Gatsby MUI Starter
          </Typography>
          <Button
            size="small"
            color="inherit"
            component={LocalizedLink}
            to="/"
            language="ru"
          >
            ru
          </Button>
          <Button
            size="small"
            color="inherit"
            component={LocalizedLink}
            to="/"
            language="en"
          >
            en
          </Button>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      <Hidden implementation="css" smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <NavList />
          </div>
        </Drawer>
      </Hidden>
      <Hidden implementation="css" mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ classes: { root: classes.drawerPaper } }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <NavList />
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
