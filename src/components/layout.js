import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children, path }) => {
  return (
    <>
      <Header path={path} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.defaultProps = {
  path: '/',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
}

export default Layout
