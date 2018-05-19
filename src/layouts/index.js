import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "travelDev's blog" },
        { name: 'keywords', content: 'travel, development' },
      ]}
    />
    <div style={{
      margin: '2rem auto',
      maxWidth: '90%',
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
      textAlign: 'center',
    }}>
      <Nav />
      {children()}
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`