import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

const Header = () => (
  <Wrap_div>
      <Intro_h1>Hi, I'm travelDev! 💚✈️💻</Intro_h1>
      <Desc_p>I am a traveler and developer. I like to make videos and write articles.</Desc_p>
      <Icons_div>
        <IconLink_a href='https://twitter.com/travelDev' target="_blank">
          <Twitter />
        </IconLink_a>
        <IconLink_a href='https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw' target="_blank">
          <Youtube />
        </IconLink_a>
        <IconLink_a href='https://www.instagram.com/travel_dev' target="_blank">
          <Instagram />
        </IconLink_a>
      </Icons_div>

      <VideoWrap />
  </Wrap_div>
)

// components
const IconWrap = withBaseIcon({ size: '25%' })
const Twitter = () => <IconWrap icon={twitterSquare} />
const Youtube = () => <IconWrap icon={youtubeSquare} />
const Instagram = () => <IconWrap icon={instagram} />
const IconLink_a = styled.a`
color: #555bfb;
&:hover {
  color: black;
}
& div {
  width: 100px;
}
`

const VideoWrap = () => (
  <Video_object 
    width="560" 
    height="315" 
    data="https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen 
  /> 
)
const Video_object = styled.object`
margin: 2rem 0
`

// stylings
const Wrap_div = styled.div``
const Intro_h1 = styled.h1``
const Desc_p = styled.p``
const Icons_div = styled.div``

export default Header
