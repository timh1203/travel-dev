import React from 'react'
import styled from 'styled-components'
import { Section, H1, Form, Ul, Li, Img, Button, Input, Textarea } from '../assets/Matrix'

const Contact = () => (
  <Section>
    <H1>✉️ Contact</H1>
    <Img1 src="https://i.imgur.com/JOtaH0c.jpg" alt="Profile Picture" />
    <FormWrap />
  </Section>
)

const FormWrap = () => (
  <Form id="contact-form" method="POST">
    <Ul modifiers={['lsNone']}>
      <Li><Input modifiers={['dNone']} type="hidden" name="From" value="traveldev.net" /></Li>
      <Li><Input type="text" name="First Name" placeholder="First Name" required /></Li>
      <Li><Input type="text" name="Last Name" placeholder="Last Name" required /></Li>
      <Li><Input type="email" name="Email" placeholder="Email" required /></Li>
      <Li><Textarea id="text" name="Body" placeholder="Message" required /></Li>
      <Li><Button id="send" type="submit" value="Send">Send</Button></Li>
      <Li modifiers={['p0', 'm0', 'h0']}><Input modifiers={['vHidden']} type="text" name="_gotcha" /></Li>
    </Ul>
  </Form>
)

const Img1 = styled(Img)`
  width: 300px;
  border: 1px solid black;
  box-shadow: 1px 3px 3px gray;
  border-radius: 10px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 250px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
`

export default Contact
