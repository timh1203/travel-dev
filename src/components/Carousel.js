import React from 'react'
import styled from 'styled-components'
import { Section, Div, H1, A, P, Button } from '../assets/Matrix'

const Carousel = ({ data }) => (
  <Section modifiers={['bBlue20']}>
    <H1>📹 Videos</H1>
    {data.allYoutubeVideo.edges.map(item => (
      <DivResponse1 key={item.node.videoId}>
        <Div modifiers={['f1']}>
          <IframeResponse src={`http://www.youtube.com/embed/${item.node.videoId}`} frameBorder="1" allowFullScreen />
        </Div>
        <DivResponse2>
          <A href={`https://www.youtube.com/watch?v=${item.node.videoId}&showinfo=0`} target="_blank">
            ♦️ <P modifiers={['b', 'u']}> {item.node.title}</P>
          </A>
          <P>{`${item.node.description.substr(0, 300)} ...`}</P>
        </DivResponse2>
      </DivResponse1>
    ))}
    <A href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
      <Button>More Videos</Button>
    </A>
  </Section>
)

const IframeResponse = styled.iframe`
  @media only screen and (min-width: 374px) {
    width: 320px;
    height: 180px;
  }
  @media only screen and (min-width: 768px) {
    width: 560px;
    height: 315px;
  }
`

const DivResponse1 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
  
  @media only screen and (min-width: 374px) and (max-width: 767px) {
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 768px) {
    transition: ease all 1s;
    flex-wrap: wrap;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`

const DivResponse2 = styled.div`
  @media only screen and (min-width: 374px) and (max-width: 767px) {
    width: 75%;
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 1rem;
    flex: 1;
  }
`

export default Carousel
