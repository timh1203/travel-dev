import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Div from './common/Div'
import H1 from './common/H1'
import A from './common/A'
import P from './common/P'
import Iframe from './common/IFrame'
import Button from './common/Button'

const Carousel = ({ data }) => (
  <Div>
    <H1>📹 Videos</H1>
    {data.allYoutubeVideo.edges.map(item => (
      <Div modifiers={['displayFlex', 'justifyCenter']} key={item.node.videoId}>
        <Div modifers={['h50', 'p1']}>
          <Iframe src={`http://www.youtube.com/embed/${item.node.videoId}`}
          width="560" height="315" frameBorder="1" allowFullScreen></Iframe>
        </Div>
        <Div modifiers={['h50', 'p1']}>
          <A href={`https://www.youtube.com/watch?v=${item.node.videoId}&showinfo=0`} target='_blank'>
            ♦️ <P modifiers={['bold', 'underline']}> {item.node.title}</P>
          </A>
          <P>{item.node.description.substr(0, 300) + '...'}</P>
        </Div>
      </Div>
    ))}
    <A href={'https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw'} target='_blank'>
      <Button>More Videos</Button>
    </A>
  </Div>
)

export default Carousel
