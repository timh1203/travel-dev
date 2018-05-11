import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import typography from "../utils/typography";  

import Nav from '../components/Nav'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const MainPage = ({ data }) => (
  <Wrap>
    <Nav />
    <Header />
    <Carousel data={data} />
    <Contact />
    <Footer />
  </Wrap>
)
  const Wrap = styled.div``

export default MainPage
