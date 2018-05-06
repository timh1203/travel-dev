import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.p``
const Title = styled.h1``
const Body = styled.p``

const ResourcesPage = () => (
  <Container>
    <Title>Resources</Title>
    <Body>
      There are a million and one coding sites out there. These are some of the free ones I recommend you start with to see what kind of coding you like to learn. Take advantage of them and try out different resources to see what works for you!
    </Body>
      
    <Body>
      <Link to="https://beta.freecodecamp.org/en/">Free Code Camp</Link> – Another great place to learn to code with free exercises and community. It’s considered a real school which you can list on LinkedIn and helps you get in contact with non-profits after you finish your certifications. However, many people get jobs way before they finish their certifications. Though a little vague on instruction sometimes, it’s still a great resource to get you started.
    </Body>
      
    <Body>
      Codecademy – A very similar learning environment to Free Code Camp. Plenty of exercises and courses for you to sign up on. It’s free and really fun to learn. Instructions are much better but it does not have a large community to interact with others. The best way to learn is to read, apply, and see the results. This is a great place to do just that!
    </Body>
  </Container>
)

export default ResourcesPage