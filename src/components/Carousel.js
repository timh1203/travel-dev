import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Carousel = ( data ) => (
  <Wrap>
    <Title>Blog</Title>
    {data.allYoutubeVideo.edges.map(item => (
      <p>{item.node.title}</p>
    ))}
  </Wrap>
)
  const Wrap = styled.section``
  const Title = styled.h1``

export default Carousel
