import React from 'react'

import { useTranslation } from 'react-i18next'
import { List, ListItemButton } from '@mui/material'

import { LocalizedLink } from './localizedLink'

export const NavList = () => {
  const { t } = useTranslation('layout')

  const links = [
    { to: '/', title: t('blog') },
    { to: '/second/', title: t('second') },
  ]
  return (
    <List>
      {links.map(({ to, title }, i) => (
        <li key={i}>
          <ListItemButton
            sx={{
              '&[aria-current="page"]': {
                backgroundColor: 'action.selected',
              },
            }}
            disableRipple
            component={LocalizedLink}
            to={to}
          >
            {title}
          </ListItemButton>
        </li>
      ))}
    </List>
  )
}
