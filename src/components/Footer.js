import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Div, H1, P, Button } from '../assets/Matrix'

const Header = () => (
  <DivResponse1>
    <About />
    <Nav /> 
    <Social />
  </DivResponse1>
)

const About = () => (
  <DivResponse2>
    <H1 modifiers={['cWhite']}>About</H1>
    <P>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</P>
    <Link to="/about"><Button>Read More</Button></Link>
  </DivResponse2>
)

const Nav = () => (
  <DivResponse2>
    <H1 modifiers={['cWhite']}>Navigation</H1>
    <Link to="/">🏠 Home</Link>
    <Link to="/about">👤 About</Link>
    <Link to="/blog">📘 Blog</Link>
    <Link to="/resources">🌐 Resources</Link>
  </DivResponse2>
)

const Social = () => (
  <DivResponse2>
    <H1 modifiers={['cWhite']}>Social</H1>
    <Div>
      <A_iconlink href='https://twitter.com/travelDev' target="_blank">
        <Twitter />
        <PResponse>Twitter</PResponse>
      </A_iconlink>
    </Div>
    <Div>
      <A_iconlink href='https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw' target="_blank">
        <Youtube />
        <PResponse>Youtube</PResponse>
      </A_iconlink>
    </Div>
    <Div>
      <A_iconlink href='https://www.instagram.com/travel_dev' target="_blank">
        <Instagram />
        <PResponse>Instagram</PResponse>
      </A_iconlink>
    </Div>
  </DivResponse2>
)

const DivResponse1 = styled.div`
  display: flex;
  color: white;
  background: #333333;
  padding-bottom: 2rem;

  @media only screen and (min-width: 374px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    font-size: 1rem;
  }
`

const DivResponse2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 374px) {
    font-size: 1rem;
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    width: 25%;
  }
`

const PResponse = styled.p`
  @media only screen and (min-width: 374px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: inline-block;
    vertical-align: top;
  }
`

const IconWrap = withBaseIcon({ size: '25%' })
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
