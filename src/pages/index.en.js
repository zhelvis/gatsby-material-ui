import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LanguageLink from "../components/languageLink"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello!</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LanguageLink to="/page-2/">Go to page 2</LanguageLink>
    </Layout>
  )
}

export default IndexPage
