import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Div, Container } from '../assets/Matrix'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "travelDev's blog" },
        { name: 'keywords', content: 'travel, development' },
      ]}
    />
    <Div modifiers={['mt2rem', 'textCenter']}>
      <Nav />
      {children()}
      <Footer />
    </Div>
  </Container>
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