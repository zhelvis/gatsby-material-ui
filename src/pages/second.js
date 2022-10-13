import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Stack } from '@mui/material'

import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const SecondPage = (props) => {
  const { t } = useTranslation('second')

  return (
    <Layout {...props}>
      <Seo title={t('title')} description={t('description')} />
      <Stack spacing={2}>
        <Typography variant="h3">{t('title')}</Typography>
        <Typography>{t('description')}</Typography>
      </Stack>
    </Layout>
  )
}

export default SecondPage
