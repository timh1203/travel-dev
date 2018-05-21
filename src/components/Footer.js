import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

import Div from './common/Div'
import H1 from './common/H1'
import P from './common/P'
import Button from './common/Button'

const Header = () => (
  <Div modifiers={['displayFlex', 'justifyAround', 'colorWhite', 'w100', 'backgroundGray']}>
    <About />
    <Nav /> 
    <Social />
  </Div>
)

const About = () => (
  <Div modifiers={['flex1', 'colorWhite']}>
    <H1 modifiers={['colorWhite']}>About</H1>
    <P modifiers={['colorWhite']}>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</P>
    <Button>Read More</Button>
  </Div>
)

const Nav = () => (
  <Div>
    <H1 modifiers={['displayFlex', 'flex1', 'colorWhite']}>Navigation</H1>
    <Div modifiers={['displayFlex', 'flexColumn', 'flex1', 'fontLarge', 'textCenter']}>
      <Link to="/">🏠 Home</Link>
      <Link to="/about">👤 About</Link>
      <Link to="/blog">📘 Blog</Link>
      <Link to="/resources">🌐 Resources</Link>
    </Div>
  </Div>
)

const Social = () => (
  <Div>
    <H1 modifiers={['flex1', 'colorWhite']}>Social</H1>
    <Div modifiers={['displayFlex', 'flexWrap']}>
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
  </Div>
)
const IconWrap = withBaseIcon({ size: '30%' })
const Twitter = () => <IconWrap icon={twitterSquare} />
const Youtube = () => <IconWrap icon={youtubeSquare} />
const Instagram = () => <IconWrap icon={instagram} />
const A_iconlink = styled.a`
flex: 1 1 100%;
display: block;
color: #555bfb;
& div {
  width: 100px;
}
`

export default Header
