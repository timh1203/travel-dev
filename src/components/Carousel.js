import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Div from './common/Div'
import H1 from './common/H1'
import P from './common/P'
import Button from './common/Button'

const Carousel = ({ data }) => {
  return (
  <Div>
    <H1>Blog</H1>
    {data.allYoutubeVideo.edges.map(item => (
      <Div modifiers={['displayFlex', 'justifyCenter']} key={item.node.videoId}>
        <Div modifers={['h50', 'p1']}>
          <iframe src={`http://www.youtube.com/embed/${item.node.videoId}`}
          width="560" height="315" frameBorder="0" allowFullScreen></iframe>
        </Div>
        <Div modifiers={['h50', 'p1']}>
          <a href={`https://www.youtube.com/watch?v=${item.node.videoId}&showinfo=0`} target='_blank'>
            <P modifiers={['bold', 'underline']}>{item.node.title}</P>
          </a>
          <P>{item.node.description.substr(0, 300) + '...'}</P>
        </Div>
      </Div>
    ))}
    <a href={'https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw'} target='_blank'>
      <Button>More Videos</Button>
    </a>
  </Div>
)}

export default Carousel
