import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, H1, Img, P } from '../assets/Matrix'

const AboutPage = () => (
  <Section>
    <H1>About</H1>
    <Img modifiers={['w75', 'frame']}src={'https://i.imgur.com/NtmLXEU.jpg'} alt='Profile Picture' />
    <P modifiers={['fontLarge', 'w75', 'm0Auto']}>
      I stepped away from a full-time job in the medical industry on October 28th, 2016. I left the corporate world behind and dedicated myself to redesigning my lifestyle so I can have more freedom in life. Although I have tried different ventures initially, I found that I love web development as career which allows for mobility and sustainability for a location-independent lifestyle. This is my journey to create a life rich in experiences and to roam this planet among the vagabonds, digital nomads, digital expatriates, world travelers, and lifestyle entrepreneurs. I hope my experiences will inspire you to experience life intensely and seeking all the beauty encompassing our beautiful sphere.
    <br />
    <br />
      There are many different types of lifestyles which I came across that allows mobility such as house-sitting, couchsurfing, or workaways paired with a career like web development, writing, or marketing online. My concentration is mainly on web development. I want to share with you how I'm building my lifestyle one brick a day to get closer to my goals. The very things we do every day define who we are and it's important not to forget about our dreams through fastidious, daily effort. Hope to see you out in the world soon, my friends.
    <br />
    <br />
      Thanks for visiting my site!
    <br />
    <br /> 
      🌎Aho mitakuye oyasin💚
    </P>
  </Section>
)

export default AboutPage
