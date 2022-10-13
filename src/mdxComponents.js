import React from 'react'
import { Typography, Link as MUILink } from '@mui/material'
/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { MdxLink } from './components/mdxLink'

const Text = (variant) => (props) =>
  <Typography sx={{ py: 1 }} variant={variant} {...props} />

const Link = (props) => <MUILink component={MdxLink} {...props} />

export const MDXComponents = {
  p: Text('body1'),
  a: Link,
  h1: Text('h1'),
  h2: Text('h2'),
  h3: Text('h3'),
  h4: Text('h4'),
  h5: Text('h5'),
  h6: Text('h6'),
}
