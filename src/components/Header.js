import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div``
const VideoWrap = styled.object`margin: 2rem 0`
const Intro = styled.h1``
const Description = styled.p``

const Video = (props) => (
  <VideoWrap 
    width="560" 
    height="315" 
    data="https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen /> 
)

const Header = () => (
  <Container>
      <Intro>Hi, I'm travelDev! 💚✈️💻</Intro>
      <Description>I am a traveler and developer. I like to make videos and write articles.</Description>
      <Video />
  </Container>
)

export default Header
