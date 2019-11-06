import { createContext } from "react"
import { defaultLangKey } from "./languages"

export default createContext({
  locale: defaultLangKey
})