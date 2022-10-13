import React from 'react'
import { Toolbar, IconButton, Drawer, Box } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { ThemeSwitcher } from './themeSwitcher'
import { LanguageSwitcher } from './languageSwitcher'
import { DrawerContent } from './drawerContent'

const drawerWidth = '18em'

export const Layout = ({ children, pageContext: { originalPath } }) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <ThemeSwitcher />
          <LanguageSwitcher originalPath={originalPath} />
        </Toolbar>
        <Box component="main" sx={{ px: 3, ml: { md: drawerWidth } }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
