import React from 'react'
/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { useLocalization } from '@ericcote/gatsby-theme-i18n'
import { IconButton, Menu, MenuItem } from '@mui/material'

import TranslateIcon from '@mui/icons-material/Translate'

import { LocalizedLink } from './localizedLink'

export const LanguageSwitcher = ({ originalPath = '/' }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { locale: currentLocale, config } = useLocalization()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        color="primary"
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {config.map((locale) => (
          <li key={locale.code}>
            <MenuItem
              component={LocalizedLink}
              to={originalPath}
              language={locale.code}
              selected={currentLocale === locale.code}
            >
              {locale.localName}
            </MenuItem>
          </li>
        ))}
      </Menu>
    </div>
  )
}
