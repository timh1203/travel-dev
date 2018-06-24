import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaYoutube from 'react-icons/lib/fa/youtube-square'
import FaInstagram from 'react-icons/lib/fa/instagram'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Div, H1, P, A, Button } from '../assets/Matrix'

const Header = () => (
  <Section1>
    <About />
    <Nav />
    <Social />
  </Section1>
)

const About = () => (
  <Div>
    <H1 modifiers={['cWhite']}>About</H1>
    <P1>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</P1>
    <Link to="/about"><Button>Read More</Button></Link>
  </Div>
)

const Nav = () => (
  <Div>
    <H1 modifiers={['cWhite']}>Navigation</H1>
    <Div1>
      <Link1 to="/">🏠 Home</Link1>
      <Link1 to="/about">👤 About</Link1>
      <Link1 to="/blog">📘 Blog</Link1>
      <Link1 to="/resources">🌐 Resources</Link1>
    </Div1>
  </Div>
)

const Social = () => (
  <Div>
    <H1 modifiers={['cWhite']}>Social</H1>
    <Div2>
      <A1 href="https://twitter.com/travelDev" target="_blank">
        <FaTwitter1 size={50} />
      </A1>
      <A1 href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <FaYoutube1 size={50} />
      </A1>
      <A1 href="https://www.instagram.com/travel_dev" target="_blank">
        <FaInstagram1 size={50} />
      </A1>
    </Div2>
  </Div>
)

const Section1 = styled(Div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  color: white;
  background: #333333;
  padding-bottom: 2rem;
  @media (max-width: 368px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-content: space-between;
`

const Div2 = styled(Div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 376px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Link1 = styled(Link)`
  text-decoration: none;
  &:visited {
    color: #5454FF;
  }
  &:hover {
    text-decoration: underline;
    text-shadow: 0 0 20px #5454FF;
  }
  @media (max-width: 768px) {
    line-height: 2rem;
  }
`

const P1 = styled(P)`
  @media (max-width: 376px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`

const A1 = styled(A)`
  margin: 0;
  padding: 0;
`

const FaTwitter1 = styled(FaTwitter)`
  color: #0077B5;
  border: 1px solid #0077B5;
  border-radius: 10%;
  margin: 0 1rem;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  &:hover {
    box-shadow: 0 0 20px #0077B5;
    border-color: transparent;
  }
  @media (max-width: 376px) {
  }
`

const FaYoutube1 = styled(FaYoutube)`
  color: #FF0000;
  border: 1px solid #FF0000;
  border-radius: 10%;
  margin: 0 1rem;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  &:hover {
    box-shadow: 0 0 20px #FF0000;
    border-color: transparent;
  }
  @media (max-width: 376px) {
  }
`

const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  margin: 0 1rem;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  &:hover {
    box-shadow: 0 0 20px #5454FF;
  }
  @media (max-width: 376px) {
  }
`

export default Header
