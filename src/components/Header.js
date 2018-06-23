import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaYoutube from 'react-icons/lib/fa/youtube-square'
import FaInstagram from 'react-icons/lib/fa/instagram'
import React from 'react'
import styled from 'styled-components'
import { Section, Div, H1, H2, A, Iframe } from '../assets/Matrix'

const Header = () => (
  <Section>
    <H11>travelDev</H11>
    <Iframe1
      src="https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0"
      frameBorder="1"
      // allow="autoplay; encrypted-media"
      allowFullScreen
    />
    <H21>I love to ️✈️, 💻, and 📹.</H21>
    <Div>
      <A href="https://twitter.com/travelDev" target="_blank">
        <FaTwitter1 size={50} />
      </A>
      <A href="https://www.youtube.com/channel/UCUCXUCn0PEPrp7nAIFpFbOw" target="_blank">
        <FaYoutube1 size={50} />
      </A>
      <A href="https://www.instagram.com/travel_dev" target="_blank">
        <FaInstagram1 size={50} />
      </A>
    </Div>
  </Section>
)

const H11 = styled(H1)`
  font-family: 'Abril Fatface';
  font-weight: 800;
  color: #292929;
  text-shadow: 1px 4px 2px gray;
  transition: ease all 0.5s;
  margin: 0;
  font-size: 6rem;
  &:hover {
    color: #555bfb;
    text-decoration: underline;
    transform: rotate(-10deg) scale(1.1);
    cursor: crosshair;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const Iframe1 = styled(Iframe)`
  width: 560px;
  height: 315px;
  @media (max-width: 768px) {
    width: 480px;
    height: 270px;
  }
  @media (max-width: 500px) {
    width: 320px;
    height: 180px;
  }
`

const H21 = styled(H2)`
  @media (max-width: 768px) {
    font-family: 'Raleway';
    color: gray;
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-family: 'Raleway';
    color: gray;
    font-size: 1rem;
  }
`

const FaTwitter1 = styled(FaTwitter)`
  color: #0077B5;
  border: 1px solid #0077B5;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;
  &:hover {
    box-shadow: 0 0 20px #0077B5;
    border-color: transparent;
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

const FaYoutube1 = styled(FaYoutube)`
  color: #FF0000;
  border: 1px solid #FF0000;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;
  &:hover {
    box-shadow: 0 0 20px #FF0000;
    border-color: transparent;
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

const FaInstagram1 = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  margin: 2rem;
  &:hover {
    box-shadow: 0 0 20px #5454FF;
  }
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

export default Header
