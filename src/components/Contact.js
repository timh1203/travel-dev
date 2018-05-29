import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { withBaseIcon } from 'react-icons-kit'
import { twitterSquare, instagram, youtubeSquare } from 'react-icons-kit/fa/'
import { Section, H1, Form, Ul, Li, Button, Input } from '../assets/Matrix'

const Contact = () => (
  <Section modifiers={['py1']}>
    <H1>✉️ Contact</H1>
    <FormWrap />
  </Section>
)

const FormWrap = () => (
  <Form id='contact-form' method='POST'>
    <Ul modifiers={['lsNone']}>
      <Li><Input modifiers={['dNone']} type='hidden' name='From' value='traveldev.net' /></Li>
      <Li><InputResponse type='text' name='First Name' placeholder='First Name' required /></Li>
      <Li><InputResponse type='text' name='Last Name' placeholder='Last Name' required /></Li>
      <Li><InputResponse type='email' name='Email' placeholder='Email' required /></Li>
      <Li><TextareaResponse id='text' name='Body' placeholder='Message' required /></Li>
      <Li><Button id='send' type='submit' value='Send'>Send</Button></Li>
      <Li><Input modifiers={['vHidden']} type='text' name='_gotcha' /></Li>
    </Ul>
  </Form>
)

const InputResponse = styled.input`
  padding: 0.5%;
  transition: ease all 0.2s;
  outline: none;
  border: 1px solid #555bfb;

  &:hover {
    transform: scale(1.02);
    border: 3px solid #555bfb;
  }
  &:focus {
    border-radius: 50%;
    border: 3px solid #555bfb;
    outline: none;
    padding: 0.8rem;
    text-align: center;
    color: black;
  }

  @media only screen and (min-width: 374px) {
    width: 75%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const TextareaResponse = styled.textarea`
  padding: 0.5%;
  transition: ease all 0.2s;
  outline: none;
  border: 1px solid #555bfb;

  &:hover {
    transform: scale(1.02);
    border: 3px solid #555bfb;
  }
  &:focus {
    border-radius: 50%;
    border: 3px solid #555bfb;
    outline: none;
    padding: 0.8rem;
    text-align: center;
    color: black;
  }

  @media only screen and (min-width: 374px) {
    width: 75%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

export default Contact
