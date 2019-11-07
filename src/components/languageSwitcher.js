import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import { getUrlForLang } from "ptz-i18n"
import Button from "@material-ui/core/Button"

import { defaultLangKey, langs } from "../i18n/languages"

export default ({ children, locale }) => {
  const getValidPath = path => {
    let pathArr = path.split("/")
    if (langs.filter(lang => lang !== defaultLangKey).includes(pathArr[1])) {
      if (locale === defaultLangKey) {
        pathArr.splice(1, 1)
      } else {
        pathArr[1] = locale
      }
      return pathArr.join("/")
    }
    return locale === defaultLangKey ? path : getUrlForLang("/", path, locale)
  }

  return (
    <Location>
      {({ location }) => {
        return (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`${getValidPath(location.pathname)}`}
          >
            {children}
          </Button>
        )
      }}
    </Location>
  )
}
