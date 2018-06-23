import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import { Wrapper } from '../assets/Matrix'

const MainPage = ({ data }) => (
  <Wrapper>
    <Header />
    <Carousel data={data} />
    <Contact />
  </Wrapper>
)

export const query = graphql`
  query IndexQuery {
    allYoutubeVideo(limit: 3) {
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
