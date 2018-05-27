import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, Span, H1} from '../assets/Matrix'

const ResourcesNav = () => (
  <Section id='resources' modifiers={['w100', 'm0Auto']}>
    <DivResponsive>
      <Span modifiers={['rotateRight']}><Link to='#travel'>🌎 Travel</Link></Span>
      <Span modifiers={['rotateRight']}><Link to='#computer'>🖱️ Computer</Link></Span>
      <Span modifiers={['rotateRight']}><Link to='#phone'>☎️ Phone</Link></Span>
      <Span modifiers={['rotateRight']}><Link to='#camera'>📷 Camera</Link></Span>
      <Span modifiers={['rotateRight']}><Link to='#software'>👨‍💻 Software</Link></Span>
      <Span modifiers={['rotateRight']}><Link to='#web'>🕸️ Web</Link></Span>
    </DivResponsive>
  </Section>
)

const DivResponsive = styled.div`
  display: flex;
  font-style: italic;

  @media only screen and (min-width: 374px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 1.2rem;
    font-family: 'Raleway';
  }
`

export default ResourcesNav
