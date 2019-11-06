import React from "react"
import { Link } from "gatsby"

import Button from "@material-ui/core/Button"
import DarkModeContext from '../theme/darkModeContext'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <DarkModeContext.Consumer>
        {({ toogleDarkMode }) => (
          <Button onClick={toogleDarkMode} variant="contained" color="primary">
            Test
          </Button>
        )}
      </DarkModeContext.Consumer>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/ru">Switch to ru</Link>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
