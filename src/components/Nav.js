import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Section, Div, Img } from '../assets/Matrix'

const Nav = () => (
  <Section1>
    <Link1 to="/"><Img1 src={logo} /></Link1>
    <Div1>
      <Link1 to="/">🏠 Home</Link1>
      <Link1 to="/about/">👤 About</Link1>
      <Link1 to="/blog">📘 Blog</Link1>
      <Link1 to="/resources">🌐 Resources</Link1>
    </Div1>
  </Section1>
)

const Section1 = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-auto-flow: rows;
  }
`

const Img1 = styled(Img)`
  justify-self: center;
`

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: space-between;
  font-size: 1.2rem;
  margin: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`

const Link1 = styled(Link)`
  text-decoration: none;

  &:hover {
    text-shadow: 0 0 10px #555bfb;
  }

  @media (max-width: 768px) {
    line-height: 2rem;
  }
`

export default Nav
