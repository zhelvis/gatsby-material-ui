import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Link } from '@mui/material'

import { LocalizedLink } from '../components/localizedLink'
import { Seo } from '../components/seo'

const NotFoundPage = () => {
  const { t } = useTranslation('404')

  return (
    <React.Fragment>
      <Seo title={t('title')} description={t('description')} />
      <Typography variant="h2">404</Typography>
      <Link component={LocalizedLink} to="/">
        {t('goToHome')}
      </Link>
    </React.Fragment>
  )
}

export default NotFoundPage
