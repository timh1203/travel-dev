import React from 'react'
import ResourcesNav from '../components/ResourcesNav'
// import ResourcesTravel from '../components/ResourcesTravel'
// import ResourcesComputer from '../components/ResourcesComputer'
// import ResourcesPhone from '../components/ResourcesPhone'
import ResourcesCamera from '../components/ResourcesCamera'
// import ResourcesSoftware from '../components/ResourcesSoftware'
// import ResourcesWeb from '../components/ResourcesWeb'
import { Wrapper, H1, P } from '../assets/Matrix'

const ResourcesPage = () => (
  <Wrapper id="resources" modifiers={['w90', 'm0A']}>
    <H1 modifiers={['my3']}>Resources</H1>
    <ResourcesNav />

    {/* <ResourcesTravel /> */}
    {/* <ResourcesComputer /> */}
    {/* <ResourcesPhone /> */}
    <ResourcesCamera />
    {/* <ResourcesSoftware /> */}
    {/* <ResourcesWeb /> */}

    <P modifiers={['b']}>
      Disclosure: Some of the links are affiliate links. This means if you click on the link and purchase the item, I will receive an affiliate commission. However, this is at no extra cost to you. You’d just be helping me out. 🙂
    </P>
  </Wrapper>
)

export default ResourcesPage
