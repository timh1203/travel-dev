import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Div, Image } from '../assets/Matrix'

const Nav = () => (
  <Div>
    <Div modifiers={['displayFlex', 'justifyAround', 'fontLarger', 'underline']}>
      <Link to="/">🏠 Home</Link>
      <Link to="/about/">👤 About</Link>
      <Link to="/blog">📘 Blog</Link>
      <Link to="/resources">🌐 Resources</Link>
    </Div>
    <Image src={logo} />
  </Div>
)

export default Nav
