import React from 'react'
import { Toolbar, Typography, Box } from '@mui/material'

import { NavList } from './navigation'

export const DrawerContent = () => {
  return (
    <React.Fragment>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gatsby MUI Starter
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <NavList />
      </Box>
    </React.Fragment>
  )
}
