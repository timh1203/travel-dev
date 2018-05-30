import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Section, Div } from '../assets/Matrix'

const Header = () => (
  <Section>
    <TitleResponse>travelDev</TitleResponse>
    <ObjectResponse 
      data="https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0" 
      frameBorder="0" 
      allow="autoplay; encrypted-media" 
      allowFullScreen 
    /> 
    <H2Response modifiers={['ul']}>I love to travel, code, and make videos. 💚✈️💻</H2Response>
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
  </Section>
)

const TitleResponse = styled.h1`
  font-family: 'Abril Fatface';
  font-weight: 800;
  color: #292929;
  text-shadow: 1px 4px 2px gray;
  transition: ease all 0.5s;

  &:hover {
    color: #555bfb;
    text-decoration: underline;
    transform: rotate(-10deg) scale(1.1);
  }

  @media only screen and (min-width: 374px) {
    font-size: 4rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
`

const ObjectResponse = styled.object`
  @media only screen and (min-width: 374px) {
    width: 320px;
    height: 180px;
  }
  @media only screen and (min-width: 768px) {
    width: 560px;
    height: 315px;
  }
`

const H2Response = styled.h2`
  @media only screen and (min-width: 374px) {
    font-family: 'Raleway';
    color: gray;
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 768px) {
    font-family: 'Raleway';
    color: gray;
    font-size: 1.5rem;
  }
`

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
