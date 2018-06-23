import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Div, Container } from '../assets/Matrix'
import './index.css'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "travelDev's blog" },
        { name: 'keywords', content: 'travel, development' },
      ]}
    />
    <Div>
      <Nav />
      {children()}
      <Footer />
    </Div>
  </Container>
)

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
