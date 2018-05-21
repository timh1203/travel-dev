import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Div, H1, P, Button } from '../assets/Matrix'

const Header = () => (
  <Div modifiers={['displayFlex', 'justifyAround', 'colorWhite', 'backgroundGray']}>
    <About />
    <Nav /> 
    <Social />
  </Div>
)

const About = () => (
  <Div modifiers={['flex1']}>
    <H1 modifiers={['colorWhite']}>About</H1>
    <P>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</P>
    <Button>Read More</Button>
  </Div>
)

const Nav = () => (
  <Div modifiers={['displayFlex', 'flexColumn', 'flex1', 'fontLarge']}>
    <H1 modifiers={['colorWhite']}>Navigation</H1>
    <Link to="/">🏠 Home</Link>
    <Link to="/about">👤 About</Link>
    <Link to="/blog">📘 Blog</Link>
    <Link to="/resources">🌐 Resources</Link>
  </Div>
)

const Social = () => (
  <Div modifiers={['displayFlex', 'flexColumn', 'flex1', 'fontLarge']}>
    <H1 modifiers={['colorWhite']}>Social</H1>
    <A_iconlink href='https://twitter.com/travelDev' target="_blank">
      <Twitter />
      <P modifiers={['textTop', 'displayInline']}>Twitter</P>
    </A_iconlink>
    <A_iconlink href='https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw' target="_blank">
      <Youtube />
      <P modifiers={['textTop', 'displayInline']}>Youtube</P>
    </A_iconlink>
    <A_iconlink href='https://www.instagram.com/travel_dev' target="_blank">
      <Instagram />
      <P modifiers={['textTop', 'displayInline']}>Instagram</P>
    </A_iconlink>
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
