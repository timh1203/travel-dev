import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Nav = () => (
  <Wrap_div>
    <Logo_img src={logo} />
    <Link_div>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resources">Resources</Link>
    </Link_div>
  </Wrap_div>
)
const Wrap_div = styled.div`
text-align: center;
`
const Logo_img = styled.img``
const Link_div = styled.div`
display: flex;
justify-content: space-around;
font-size: 1.5rem;
text-decoration: underline;
`

export default Nav
