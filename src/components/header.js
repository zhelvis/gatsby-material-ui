import React from 'react'
import PropTypes from 'prop-types'
/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { LocalizedLink } from '@ericcote/gatsby-theme-i18n'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

import ThemeSwitcher from './themeSwitcher'

const Header = ({ path }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              marginRight: theme.spacing(2),
              flexGrow: 1,
            }}
          >
            Gatsby MUI starter
          </Typography>
          <LocalizedLink to={path} language="ru">
            ru
          </LocalizedLink>
          <LocalizedLink to={path} language="en">
            en
          </LocalizedLink>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

Header.defaultProps = {
  path: '/',
}

Header.propTypes = {
  path: PropTypes.string,
}

export default Header
