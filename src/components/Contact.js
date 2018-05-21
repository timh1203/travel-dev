import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Div, H1, Form, Ul, Li, Input, Textarea } from '../assets/Matrix'

const Contact = () => (
  <Div>
    <H1>✉️ Contact</H1>
    <FormWrap />
  </Div>
)

const FormWrap = () => (
  <Form id='contact-form' method='POST'>
    <Ul modifiers={['listStyleNone']}>
      <Li><Input modifiers={['displayNone']} type='hidden' name='From' value='traveldev.net' /></Li>
      <Li><Input modifiers={['w25']} type='text' name='First Name' placeholder='First Name' required /></Li>
      <Li><Input modifiers={['w25']}type='text' name='Last Name' placeholder='Last Name' required /></Li>
      <Li><Input modifiers={['w25']}type='email' name='Email' placeholder='Email' required /></Li>
      <Li><Textarea modifiers={['w25']}id='text' name='Body' placeholder='Message' required /></Li>
      <Li><Input type='button' id='send' type='submit' value='Send' /></Li>
      <Li><Input modifiers={['visibilityHidden']} type='text' name='_gotcha' /></Li>
    </Ul>
  </Form>
)

export default Contact
