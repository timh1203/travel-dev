import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import typography from "../utils/typography";  

import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = styled.div``

const MainPage = () => (
  <Container>
    <Nav />
    <Header />
    <Footer />
  </Container>
)

export default MainPage