import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Modifiers } from './Modifiers'

export const Container = styled.div`
font-family: 'Raleway';
${applyStyleModifiers(Modifiers)}
`

export const A = styled.a`
${applyStyleModifiers(Modifiers)}
`

export const Button = styled.button`
border: 2px solid black;
border-radius: 5%;
color: white;
background: #555bfb;
transition: ease all 0.5s;

&:hover {
  background: white;
  color: #555bfb;
  border: 2px solid black;
  transform: scale(1.2);
}

${applyStyleModifiers(Modifiers)}
`

export const Div = styled.div`
${applyStyleModifiers(Modifiers)}
`

export const Form = styled.form`
${applyStyleModifiers(Modifiers)}
`

export const Title = styled.h1`
font-family: 'Modak';
font-family: 'Abril Fatface';
font-weight: 800;
font-size: 6rem;
color: #292929;
text-shadow: 1px 4px 2px gray;
${applyStyleModifiers(Modifiers)}
`
export const H1 = styled.h1`
${applyStyleModifiers(Modifiers)}
`

export const H2 = styled.h2`
color: gray;
font-family: 'Raleway';
${applyStyleModifiers(Modifiers)}
`

export const H3 = styled.h3`
font-family: 'Cabin';
${applyStyleModifiers(Modifiers)}
`

export const H4 = styled.h4`
font-family: 'Cabin';
${applyStyleModifiers(Modifiers)}
`

export const H5 = styled.h5`
font-family: 'Cabin';
${applyStyleModifiers(Modifiers)}
`
export const H6 = styled.h6`
font-family: 'Cabin';
${applyStyleModifiers(Modifiers)}
`

export const Iframe = styled.iframe`
${applyStyleModifiers(Modifiers)}
`

export const Img = styled.img`
${applyStyleModifiers(Modifiers)}
`

export const Input = styled.input`
padding: 0.5%;
border-radius: 5%;
${applyStyleModifiers(Modifiers)}
`

export const Li = styled.li`
${applyStyleModifiers(Modifiers)}
`

export const Object = styled.object`
${applyStyleModifiers(Modifiers)}
`

export const P = styled.p`
${applyStyleModifiers(Modifiers)}
`

export const Section = styled.section`
margin: 4rem 0;
${applyStyleModifiers(Modifiers)}
`

export const Textarea = styled.textarea`
padding: 0.5%;
border-radius: 5%;
${applyStyleModifiers(Modifiers)}
`

export const Ul = styled.ul`
${applyStyleModifiers(Modifiers)}
`