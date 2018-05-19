import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Carousel = ({ data }) => (
  <Wrap_div>
    <Title_h1>Blog</Title_h1>
    {data.allYoutubeVideo.edges.map(item => (
      <Item_div key={item.node.videoId}>
        <LeftCol_div>
          <iframe src={`http://www.youtube.com/embed/${item.node.videoId}`}
          width="560" height="315" frameborder="0" allowFullScreen></iframe>
        </LeftCol_div>
        <RightCol_div>
        <a href={`https://www.youtube.com/watch?v=${item.node.videoId}&showinfo=0`} target='_blank'>
          <Name_p>{item.node.title}</Name_p>
        </a>
        <Desc_p>{item.node.description.substr(0, 300) + '...'}</Desc_p>
        </RightCol_div>
      </Item_div>
    ))}
    <a href={'https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw'} target='_blank'>
      <More_button>More Videos</More_button>
    </a>
  </Wrap_div>
)

const Wrap_div = styled.section``
const Title_h1 = styled.h1``
const Item_div = styled.div`
display: flex;
justify-content: center;
`
const LeftCol_div = styled.div`
height: 50%;
`
const RightCol_div = styled.div`
height: 50%;
`
const Name_p = styled.p`
font-weight: bold;
text-decoration: underline;
`
const Desc_p = styled.p``
const More_button = styled.button``

export default Carousel
