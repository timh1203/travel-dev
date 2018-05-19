import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'

const Contact = () => (
  <Wrap_div>
    <Title_h1>Contact Me</Title_h1>
    <FormWrap />
  </Wrap_div>
)

// components
const FormWrap = () => (
  <Form_form id='contact-form' method='POST'>
    <Form_ul>
      <Form_li><InputWrap type='hidden' name='From' value='traveldev.net' /></Form_li>
      <Form_li><InputWrap type='text' name='_gotcha' style={{ display: 'none' }} /></Form_li>
      <Form_li><InputWrap type='text' name='First Name' placeholder='First Name' required /></Form_li>
      <Form_li><InputWrap type='text' name='Last Name' placeholder='Last Name' required /></Form_li>
      <Form_li><InputWrap type='email' name='Email' placeholder='Email' required /></Form_li>
      <Form_li><TextareaWrap id='text' name='Body' placeholder='Message' required /></Form_li>
      <Form_li><InputWrap type='button' id='send' type='submit' value='Send' /></Form_li>
    </Form_ul>
  </Form_form>
)
const InputWrap = styled.input`
width: 25%;
`
const TextareaWrap = styled.textarea`
width: 25%;
`
const Form_form = styled.form``
const Form_ul = styled.ul`
list-style: none;
`
const Form_li = styled.li``

// stylings
const Wrap_div = styled.div``
const Title_h1 = styled.h1``

export default Contact
