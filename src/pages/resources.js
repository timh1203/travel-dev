import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, Span, H1, H2, H3, P, A, Img } from '../assets/Matrix'
import ResourcesNav from '../components/ResourcesNav'
import ResourcesTravel from '../components/ResourcesTravel'
import ResourcesComputer from '../components/ResourcesComputer'
import ResourcesPhone from '../components/ResourcesPhone'
import ResourcesCamera from '../components/ResourcesCamera'
import ResourcesSoftware from '../components/ResourcesSoftware'
import ResourcesWeb from '../components/ResourcesWeb'

const ResourcesPage = () => (
  <Section id='resources' modifiers={['w90', 'm0A']}>
    <H1 modifiers={['my3']}>Resources</H1>
    <ResourcesNav />

    <ResourcesTravel />
    <ResourcesComputer />
    <ResourcesPhone />
    <ResourcesCamera />
    <ResourcesSoftware />
    <ResourcesWeb />
    
    <P modifiers={['b']}>
      Disclosure: Some of the links are affiliate links. This means if you click on the link and purchase the item, I will receive an affiliate commission. However, this is at no extra cost to you. You’d just be helping me out. 🙂
    </P>
  </Section>
)

export default ResourcesPage