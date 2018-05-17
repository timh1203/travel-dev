import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Carousel = (data) => (
  <Section>
    <Title>Blog</Title>
    {data.data.allYoutubeVideo.edges.map(item => (
      <ItemWrap key={item.node.videoId}>
        <LCol>
          <iframe src={`http://www.youtube.com/embed/${item.node.videoId}`}
          width="560" height="315" frameborder="0" allowFullScreen></iframe>
        </LCol>
        <RCol>
        <a href={`https://www.youtube.com/watch?v=${item.node.videoId}&showinfo=0`} target='_blank'>
          <ItemName>{item.node.title}</ItemName>
        </a>
        <ItemDesc>{item.node.description.substr(0, 300) + '...'}</ItemDesc>
        </RCol>
      </ItemWrap>
    ))}
    <a href={'https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw'} target='_blank'><ItemButton>More Videos</ItemButton></a>
  </Section>
)
const Section = styled.section``
const Title = styled.h1``
const ItemWrap = styled.div`
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
const ItemName = styled.p`
font-weight: bold;
text-decoration: underline;
`
const ItemDesc = styled.p``
const ItemButton = styled.button``

export default Carousel
