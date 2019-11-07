import React, { useContext } from "react"
import { Link } from "gatsby"
import { getUrlForLang } from "ptz-i18n"
import languageContext from "../i18n/languageContext"
import { defaultLangKey } from "../i18n/languages"

export default ({ to, children }) => {
  
  const { locale } = useContext(languageContext);

  const validPath = locale === defaultLangKey ? to : getUrlForLang("/", to, locale)
  
  return <Link to={validPath}>{children}</Link>
}
