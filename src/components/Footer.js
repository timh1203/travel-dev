import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

const Header = () => (
  <Wrap>
    <About></About>
    <NavMini></NavMini>
    <Social></Social>
  </Wrap>
)
  const Wrap = styled.div`
  background: #333333;
  color: white;
  display: flex;
  justify-content: space-around;
  width: 100%;
  `
  
const About = () => (
  <AboutWrap>
    <Title>About</Title>
    <Body>My personal website to share my journey in travel and web development. I love meeting new people, learning about tech advances of the future, and sharing outdoor adventures.</Body>
    <Button>Read More</Button>
  </AboutWrap>
)
  const AboutWrap = styled.div`
  color: white;
  flex: 1;
  `
  const Title = styled.h1`
  color: white
  `
  const Body = styled.p`
  color: white
  `
  const Button = styled.button`
  width: 25%;
  `

const NavMini = () => (
  <NavMiniWrap>
    <Title>Navigation</Title>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/resources">Resources</Link>
  </NavMiniWrap>
)
  const NavMiniWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  flex: 1;
  `

const Social = () => (
  <SocialWrap>
    <SocialTitle>
      Social
    </SocialTitle>
    <IconWrap>
      <a href='https://twitter.com/travelDev' target="_blank">
        <Twitter />
      </a>
      <a href='https://www.youtube.com/c/traveldev' target="_blank">
        <Youtube />
      </a>
      <a href='https://www.instagram.com/travel_dev' target="_blank">
        <Instagram />
      </a>
    </IconWrap>
  </SocialWrap>
)
  const SocialWrap = styled.div`
  `
  const SocialTitle = styled.h1`
  flex: 1;
  color: white;
  flex: 1 1 100%;
  `
  const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  `
  const IconContainer = withBaseIcon({ size: '15%' })
  const Twitter = () => <IconContainer icon={twitterSquare} />
  const Youtube = () => <IconContainer icon={youtubeSquare} />
  const Instagram = () => <IconContainer icon={instagram} />

export default Header
