import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

const Header = () => (
  <Wrap_div>
    <AboutWrap />
    <NavWrap /> 
    <SocialWrap />
  </Wrap_div>
)

// components 
const AboutWrap = () => (
  <About_div>
    <Title_h1>About</Title_h1>
    <Body_p>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</Body_p>
    <More_button>Read More</More_button>
  </About_div>
)
const About_div = styled.div`
color: white;
flex: 1;
`
const Title_h1 = styled.h1`
color: white
`
const Body_p = styled.p`
color: white
`
const More_button = styled.button`
width: 25%;
`

const NavWrap = () => (
  <Nav_div>
    <Title_h1>Navigation</Title_h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/resources">Resources</Link>
  </Nav_div>
)
const Nav_div = styled.div`
display: flex;
flex-direction: column;
font-size: 1.2rem;
flex: 1;
`

const SocialWrap = () => (
  <Social_div>
    <SocialTitle_h1>Social</SocialTitle_h1>
    <Icon_div>
      <IconLink_a href='https://twitter.com/travelDev' target="_blank">
        <Twitter />
      </IconLink_a>
      <IconLink_a href='https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw' target="_blank">
        <Youtube />
      </IconLink_a>
      <IconLink_a href='https://www.instagram.com/travel_dev' target="_blank">
        <Instagram />
      </IconLink_a>
    </Icon_div>
  </Social_div>
)
const IconWrap = withBaseIcon({ size: '30%' })
const Twitter = () => <IconWrap icon={twitterSquare} />
const Youtube = () => <IconWrap icon={youtubeSquare} />
const Instagram = () => <IconWrap icon={instagram} />
const Social_div = styled.div``
const SocialTitle_h1 = styled.h1`
flex: 1;
color: white;
flex: 1 1 100%;
`
const Icon_div = styled.div`
display: flex;
flex-wrap: wrap;
`
const IconLink_a = styled.a`
flex: 1 1 100%;
display: block;
color: #555bfb;
& div {
  width: 100px;
}
`

// stylings
const Wrap_div = styled.div`
background: #333333;
color: white;
display: flex;
justify-content: space-around;
width: 100%;
`

export default Header
