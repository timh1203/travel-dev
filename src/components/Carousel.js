import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Carousel = (data) => (
  <Wrap>
    <Title>Blog</Title>
    {data.data.allYoutubeVideo.edges.map(item => (
      <WrapItem key={item.node.videoId}>
        <LCol>
          <a href={`https://www.youtube.com/watch?v=${item.node.videoId}`} target='_blank'>
            <WrapImage src={item.node.thumbnail.url} alt={item.node.title} />
          </a>
        </LCol>
        <RCol>
        <a href={`https://www.youtube.com/watch?v=${item.node.videoId}`} target='_blank'>
          <WrapName>{item.node.title}</WrapName>
        </a>
        <WrapDesc>{item.node.description.substr(0, 200)}</WrapDesc>
        </RCol>
      </WrapItem>
    ))}
  </Wrap>
)
const Wrap = styled.section``
const Title = styled.h1``
const WrapItem = styled.div`
display: flex;
justify-content: center;
`
const LCol = styled.div`
height: 50%;
`
const RCol = styled.div`
height: 50%;
`
const WrapImage = styled.img`
width: 50%;
height: 50%;
`
const WrapName = styled.p`
font-weight: bold;
text-decoration: underline;
`
const WrapDesc = styled.p``

export default Carousel
