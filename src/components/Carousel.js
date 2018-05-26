import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, H1, A, P, Iframe, Button } from '../assets/Matrix'

const Carousel = ({ data }) => (
  <Section modifiers={['backgroundBlue50', 'py3Auto']}>
    <H1>📹 Videos</H1>
    {data.allYoutubeVideo.edges.map(item => (
      <Div modifiers={['displayFlex', 'justifyAround', 'w75', 'm0Auto', 'carouselPopup']} key={item.node.videoId}>
        <Div modifers={['flex1']}>
          <Iframe src={`http://www.youtube.com/embed/${item.node.videoId}`}
          width="560" height="315" frameBorder="1" allowFullScreen></Iframe>
        </Div>
        <Div modifiers={['w75', 'p1']}>
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
  </Section>
)

export default Carousel
