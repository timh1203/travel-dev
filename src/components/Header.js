import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Section, Div, H1, P, Object } from '../assets/Matrix'

const Header = () => (
  <Section>
      <H1>Hi, I'm travelDev! 💚✈️💻</H1>
      <P>I am a traveler and developer. I like to make videos and write articles.</P>
      <Div>
        <A_iconlink href='https://twitter.com/travelDev' target="_blank">
          <Twitter />
        </A_iconlink>
        <A_iconlink href='https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw' target="_blank">
          <Youtube />
        </A_iconlink>
        <A_iconlink href='https://www.instagram.com/travel_dev' target="_blank">
          <Instagram />
        </A_iconlink>
      </Div>

      <Object 
        width="560" 
        height="315" 
        data="https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0" 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen 
      /> 
  </Section>
)

const IconWrap = withBaseIcon({ size: '25%' })
const Twitter = () => <IconWrap icon={twitterSquare} />
const Youtube = () => <IconWrap icon={youtubeSquare} />
const Instagram = () => <IconWrap icon={instagram} />
const A_iconlink = styled.a`
color: #555bfb;

&:hover {
  color: black;
}
& div {
  width: 100px;
}
`

export default Header
