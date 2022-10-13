import React from 'react'
/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { MdxLink as ThemeMdxLink } from '@ericcote/gatsby-theme-i18n'

export const MdxLink = React.forwardRef((props, ref) => (
  <span ref={ref}>
    <ThemeMdxLink {...props} />
  </span>
))
