import React from 'react'
import LanguageLink from '../components/languageLink'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Вторая страница" />
    <h1>Привет со второй страницы!</h1>
    <LanguageLink to="/">Вернуться на главную</LanguageLink>
  </Layout>
)

export default SecondPage
