import React from 'react'
import styled from 'styled-components'
import { Wrapper, H1, Div, Img } from '../assets/Matrix'

const VideoVlogs = () => (
  <Wrapper id="videos">
    <H1>Vlogs</H1>
    <Div1>
      <a href="https://www.youtube.com/watch?v=CWzrXh9DDSw&list=PLPTS2VjPOpjVL7MGjNkvzhhLR5-V4cgi7" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/2XilNv2.png" alt="USA Vlogs" />
      </a>
      <a href="https://www.youtube.com/watch?v=-MOTpCz1heE&list=PLPTS2VjPOpjU0njRf536hVFx9-7cwBtG1" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/RtVxIwI.png" alt="Colombia Vlogs" />
      </a>
      <a href="https://www.youtube.com/watch?v=uy22kP6-SiI&list=PLPTS2VjPOpjXNL6SvDuG0wE7tMehCv5vz" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/o1UDMId.png" alt="Japan Vlogs" />
      </a>
      <a href="https://www.youtube.com/watch?v=OwFP4rLeDYI&list=PLPTS2VjPOpjUrckwVyTFvN6rOKAbncwLp" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/t4ysr80.png" alt="Mexico Vlogs" />
      </a>
    </Div1>
  </Wrapper>
)

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Img1 = styled(Img)`
  border: 1px solid black;
  max-height: 150px;
`

export default VideoVlogs
