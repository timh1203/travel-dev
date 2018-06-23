import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Div, H1, P, Button } from '../assets/Matrix'

const Header = () => (
  <SectionResponse>
    <About />
    <Nav />
    <Social />
  </SectionResponse>
)

const About = () => (
  <DivResponse>
    <H1 modifiers={['cWhite']}>About</H1>
    <P>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</P>
    <Link to="/about"><Button>Read More</Button></Link>
  </DivResponse>
)

const Nav = () => (
  <DivResponse>
    <H1 modifiers={['cWhite']}>Navigation</H1>
    <Link to="/">🏠 Home</Link>
    <Link to="/about">👤 About</Link>
    <Link to="/blog">📘 Blog</Link>
    <Link to="/resources">🌐 Resources</Link>
  </DivResponse>
)

const Social = () => (
  <DivResponse>
    <H1 modifiers={['cWhite']}>Social</H1>
    <Div>
      <A1 href="https://twitter.com/travelDev" target="_blank">
        <Twitter />
        <PResponse>Twitter</PResponse>
      </A1>
    </Div>
    <Div>
      <A1 href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <Youtube />
        <PResponse>Youtube</PResponse>
      </A1>
    </Div>
    <Div>
      <A1 href="https://www.instagram.com/travel_dev" target="_blank">
        <Instagram />
        <PResponse>Instagram</PResponse>
      </A1>
    </Div>
  </DivResponse>
)

const SectionResponse = styled.div`
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

const DivResponse = styled.div`
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
const A1 = styled.a`
  flex: 1 1 100%;
  display: block;
  color: #555bfb;

  & div {
    width: 100px;
  }
`

export default Header
