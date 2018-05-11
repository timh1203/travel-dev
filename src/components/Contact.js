import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

const Contact = () => (
  <Wrap>
    <Title>Contact Me</Title>
    <Form />
  </Wrap>
)
  const Wrap = styled.div`
  `
  const Title = styled.h1`
  `

const Form = () => (
  <form id='contact-form' method='POST'>
    <ul style={{ listStyle: 'none' }}>
      <li><InputWrap type='hidden' name='From' value='traveldev.net' /></li>
      <li><InputWrap type='text' name='_gotcha' style={{ display: 'none' }} /></li>
      <li><InputWrap type='text' name='First Name' placeholder='First Name' required /></li>
      <li><InputWrap type='text' name='Last Name' placeholder='Last Name' required /></li>
      <li><InputWrap type='email' name='Email' placeholder='Email' required /></li>
      <li><TextareaWrap id='text' name='Body' placeholder='Message' required /></li>
      <li><InputWrap type='button' id='send' type='submit' value='Send' /></li>
    </ul>
  </form>
)
  const InputWrap = styled.input`
  width: 25%;
  `
  const TextareaWrap = styled.textarea`
  width: 25%;
  `

export default Contact
