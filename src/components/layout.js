import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <main
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem`,
        fontSize: `140%`,
        fontFamily: `sans-serif`,
      }}
    >
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
