import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Section, Img } from '../assets/Matrix'

const Nav = () => (
  <Section>
    <Img src={logo} />
    <DivResponse>
      <Link to="/">🏠 Home</Link>
      <Link to="/about/">👤 About</Link>
      <Link to="/blog">📘 Blog</Link>
      <Link to="/resources">🌐 Resources</Link>
    </DivResponse>
  </Section>
)

const DivResponse = styled.div`
  display: flex;
  font-size: 1.2rem;

  @media only screen and (min-width: 374px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export default Nav