import React from 'react'
/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { LocalizedLink as ThemeLocalizedLink } from '@ericcote/gatsby-theme-i18n'

export const LocalizedLink = React.forwardRef((props, ref) => (
  <span ref={ref}>
    <ThemeLocalizedLink {...props} />
  </span>
))
