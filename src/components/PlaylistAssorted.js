import React from 'react'
import styled from 'styled-components'
import { Wrapper, H1, Div, Img } from '../assets/Matrix'

const VideoTunes = () => (
  <Wrapper id="videos">
    <H1>Assorted</H1>
    <Div1>
      <a href="https://www.youtube.com/watch?v=ak5j5DR3P_Q&list=PLPTS2VjPOpjXSlyPlkjLmvG2ff51Kq3bS" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/r11sXso.png" alt="Travel Inspiration Music Playlist" />
      </a>
    </Div1>
  </Wrapper>
)

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: 1fr;
`

const Img1 = styled(Img)`
  border: 1px solid black;
  max-height: 150px;
`

export default VideoTunes
