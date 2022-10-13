/**
 * Temporary load gatsby-theme-i18n fork,
 * because original package incompatible with gatsby-plugin-mdx v4
 *
 * @see https://github.com/gatsbyjs/themes/issues/172
 */
import { useLocalization } from '@ericcote/gatsby-theme-i18n'

export const useDateFormat = () => {
  const { locale, config, defaultLang } = useLocalization()

  const formats = Object.fromEntries(
    config.map(({ code, dateFormat }) => [code, dateFormat])
  )

  return formats[locale] || formats[defaultLang]
}
