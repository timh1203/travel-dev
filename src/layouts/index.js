import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainPage from '../pages/MainPage'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "travelDev's blog" },
        { name: 'keywords', content: 'travel, development' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '90%',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        textAlign: 'center',
      }}
    >
    <MainPage />
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
