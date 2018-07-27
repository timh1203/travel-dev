import React from 'react'
import styled from 'styled-components'
import { Section, Div, H1, A, P, Iframe, Button } from '../assets/Matrix'

const Carousel = ({ data }) => (
  <Section1>
    <H1>📹 Latest Videos</H1>
    <Section>
      {data.allYoutubeVideo.edges.map(item => (
        <Div1 key={item.node.videoId}>
          <Div modifiers={['f1']}>
            <Iframe1
              src={`http://www.youtube.com/embed/${item.node.videoId}?rel=0`}
              frameBorder="1"
              allowFullScreen
            />
          </Div>
          <Div>
            <A href={`https://www.youtube.com/watch?v=${item.node.videoId}`} target="_blank">
              <P modifiers={['b', 'u']}> {item.node.title}</P>
            </A>
            <P>{`${item.node.description.substr(0, 300)} ...`}</P>
          </Div>
        </Div1>
      ))}
    </Section>
    <A href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
      <Button>More Videos</Button>
    </A>
  </Section1>
)

const Section1 = styled(Section)`
  background: rgb(85, 91, 251, 0.2);
  text-align: center;
`

const Iframe1 = styled(Iframe)`
  width: 560px;
  height: 315px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 480px;
    height: 270px;
  }
  @media (max-width: 500px) {
    width: 320px;
    height: 180px;
  }
`

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  align-items: center;
  grid-gap: 20px;
  margin: 1rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: rows;
    font-size: 0.8rem;
  }
  @media (max-width: 375px) {
  }
`

export default Carousel
