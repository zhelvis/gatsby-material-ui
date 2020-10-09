import React from 'react'
import { useTranslation } from 'react-i18next'
import { LocalizedLink } from 'gatsby-theme-i18n'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => {
  const { t } = useTranslation('page2')

  return (
    <Layout>
      <SEO title={t('title')} description={t('description')} />
      <h1>{t('hello')}</h1>
      <LocalizedLink to="/">{t('link')}</LocalizedLink>
    </Layout>
  )
}

export default SecondPage
