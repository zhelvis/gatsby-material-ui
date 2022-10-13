import React from 'react'
import { graphql } from 'gatsby'

import { Seo } from '../components/seo'
import { Layout } from '../components/layout'

const BlogTemplate = ({ data, children, ...props }) => {
  return (
    <Layout {...props}>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <div>{children}</div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query Post($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        description
      }
    }
  }
`
