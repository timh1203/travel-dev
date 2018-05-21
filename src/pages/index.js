import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import typography from '../utils/typography'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import { Div } from '../assets/Matrix'
// import Div from '../components/common/Div'

const MainPage = ({ data }) => (
  <Div>
    <Header />
    <Carousel data={data} />
    <Contact />
  </Div>
)

export const query = graphql`
  query IndexQuery {
    allYoutubeVideo(limit: 5) {
      edges {
        node {
          id
          title
          thumbnail {
            width
            height
            url
          }
          description
          videoId
          publishedAt
          privacyStatus
        }
      }
    }
  }
`

export default MainPage
