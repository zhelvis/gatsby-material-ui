import React from 'react'
import LanguageLink from '../components/languageLink'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <LanguageLink to="/">Go back to the homepage</LanguageLink>
  </Layout>
)

export default SecondPage
