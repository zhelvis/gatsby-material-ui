import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  const { t } = useTranslation('404')

  return (
    <Layout>
      <SEO title={t('title')} description={t('description')} />
      <h1>404</h1>
    </Layout>
  )
}

export default NotFoundPage
