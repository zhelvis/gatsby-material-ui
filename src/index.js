import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './mdxComponents'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

import { theme } from './theme'

export const wrapRootElement = ({ element }) => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <MDXProvider components={MDXComponents}>{element}</MDXProvider>
    </CssVarsProvider>
  )
}
