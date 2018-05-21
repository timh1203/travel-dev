import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Div, Img } from '../assets/Matrix'

const Nav = () => (
  <Div>
    <Div modifiers={['displayFlex', 'justifyAround', 'itemsCenter', 'fontLarger', 'underline']}>
      <Link to="/">🏠 Home</Link>
      <Link to="/about/">👤 About</Link>
      <Img src={logo} />
      <Link to="/blog">📘 Blog</Link>
      <Link to="/resources">🌐 Resources</Link>
    </Div>
  </Div>
)

export default Nav