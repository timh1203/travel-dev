import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainPage from '../pages/MainPage'

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
    <MainPage data={data} />
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

    allYoutubeVideo(limit: 5) {
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
          privacyStatus
        }
      }
    }
  }
`