import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../assets/logo.png'

const Container = styled.div`
text-align: center;
`

const Logo = styled.img``

const LinkWrap = styled.div`
display: flex;
justify-content: space-around;
`

const Nav = () => (
  <Container>
    <Logo src={logo} />
    
    <LinkWrap>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resources">Resources</Link>
    </LinkWrap>
  </Container>
)

export default Nav