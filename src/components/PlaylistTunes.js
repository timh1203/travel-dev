import React from 'react'
import styled from 'styled-components'
import { Wrapper, H1, Div, Img } from '../assets/Matrix'

const VideoTunes = () => (
  <Wrapper id="videos">
    <H1>Coding Music</H1>
    <Div1>
      <a href="https://www.youtube.com/watch?v=244AT-9e-cU&list=PLPTS2VjPOpjUBnIFFUphcKqzdBLTWPfqQ" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/4YMiSRr.png" alt="Ambition Coding Music Playlist" />
      </a>
      <a href="https://www.youtube.com/watch?v=HEf_xrgmuRI&list=PLPTS2VjPOpjWXnLm0Qsc-K0YkkYnK88PH" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/Prgiw5l.png" alt="Honor Coding Music Playlist" />
      </a>
      <a href="https://www.youtube.com/watch?v=MsHPO4xdwKg&list=PLPTS2VjPOpjVER26b8BstdcPgfO4qjYpn" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/MozKUmq.png" alt="Endurance Coding Music Playlist" />
      </a>
      <a href="https://www.youtube.com/watch?v=94TAFSMdkvk&list=PLPTS2VjPOpjUSTmVc9Y4MigDP-q_MZ6KH" rel="noopener noreferrer" target="_blank">
        <Img1 src="https://i.imgur.com/aLuyXMp.png" alt="Valor Coding Music Playlist" />
      </a>
    </Div1>
  </Wrapper>
)

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Img1 = styled(Img)`
  border: 1px solid black;
  max-height: 150px;
`

export default VideoTunes
