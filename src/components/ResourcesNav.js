import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, SpanA } from '../assets/Matrix'

const ResourcesNav = () => (
  <Section1 id="resources">
    <Div1>
      <SpanA><Link to="#travel">🌎 Travel</Link></SpanA>
      <SpanA><Link to="#computer">🖱️ Computer</Link></SpanA>
      <SpanA><Link to="#phone">☎️ Phone</Link></SpanA>
      <SpanA><Link to="#camera">📷 Camera</Link></SpanA>
      <SpanA><Link to="#software">👨‍💻 Software</Link></SpanA>
      <SpanA><Link to="#web">🕸️ Web</Link></SpanA>
    </Div1>
  </Section1>
)

const Section1 = styled(Section)`
  width: 100%;
  margin: 0 auto;
`

const Div1 = styled(Div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`

export default ResourcesNav
