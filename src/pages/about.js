import React from 'react'
import { Wrapper, H1, Img, P } from '../assets/Matrix'

const AboutPage = () => (
  <Wrapper>
    <H1 modifiers={['my3']}>About</H1>
    <Img modifiers={['w75', 'frame']} src="https://i.imgur.com/NtmLXEU.jpg" alt="Profile Picture" />
    <P modifiers={['fLarge', 'w75', 'm0A']}>
      I stepped away from a full-time job in the medical industry on October 28th, 2016. I left the corporate world behind and dedicated myself to redesigning my lifestyle so I can have more freedom in life. Although I have tried different ventures initially, I found that I love web development, which also allows for greater mobility and sustainability for a location-independent lifestyle. This is my journey in progress towards creating a life rich in experiences. I hope my experiences will inspire you to experience life intensely and seeking all the beauty encompassing our beautiful sphere.
    <br />
    <br />
      At the end of the day, we usually act in accordance with our estemeed values. Some important ones for me are time, location-freedom, health, and experiences. I want to take you with me and share how I'm building my lifestyle one brick a day to get closer to my goals. The very things we do every day define who we are and it's important not to forget about our dreams through fastidious, daily effort.
    <br />
    <br />
      Thanks for visiting my site!
    <br />
    <br />
      🌎Aho mitakuye oyasin💚
    </P>
  </Wrapper>
)

export default AboutPage
