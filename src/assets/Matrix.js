import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Modifiers } from './Modifiers'

export const Container = styled.div`
  ${applyStyleModifiers(Modifiers)}
  font-family: 'Raleway';
`

export const Wrapper = styled.div`
  padding: 1rem 0;
  ${applyStyleModifiers(Modifiers)}
`

export const Section = styled.section`
  ${applyStyleModifiers(Modifiers)}
  padding: 1rem 0;
`

export const Div = styled.div`
  ${applyStyleModifiers(Modifiers)}
`

export const DivFeatured = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 374px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    justify-content: center;
    text-align: center;
  } 
`

export const A = styled.a`
  ${applyStyleModifiers(Modifiers)}
`

export const Button = styled.button`
  ${applyStyleModifiers(Modifiers)}
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
`

export const Span = styled.span`
  ${applyStyleModifiers(Modifiers)}
`

export const Form = styled.form`
  ${applyStyleModifiers(Modifiers)}
`

export const Title = styled.h1`
  ${applyStyleModifiers(Modifiers)}
  font-family: 'Abril Fatface';
  font-weight: 800;
  font-size: 6rem;
  color: #292929;
  text-shadow: 1px 4px 2px gray;
  transition: ease all 0.5s;

  &:hover {
    color: #555bfb;
    text-decoration: underline;
    transform: rotate(-10deg) scale(1.1);
  }
`
export const H1 = styled.h1`
  ${applyStyleModifiers(Modifiers)}
`

export const H2 = styled.h2`
  ${applyStyleModifiers(Modifiers)}
  color: gray;
  font-family: 'Raleway';
`

export const H3 = styled.h3`
  ${applyStyleModifiers(Modifiers)}
`

export const H4 = styled.h4`
  ${applyStyleModifiers(Modifiers)}
`

export const H5 = styled.h5`
  ${applyStyleModifiers(Modifiers)}
`
export const H6 = styled.h6`
  ${applyStyleModifiers(Modifiers)}
`

export const Iframe = styled.iframe`
  ${applyStyleModifiers(Modifiers)}
`

export const Img = styled.img`
  ${applyStyleModifiers(Modifiers)}
`

export const Input = styled.input`
  ${applyStyleModifiers(Modifiers)}
  padding: 0.5%;
  transition: ease all 0.2s;
  outline: none;
  border: 1px solid #555bfb;
  width: 25%;

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
`

export const Textarea = styled.textarea`
  ${applyStyleModifiers(Modifiers)}
  padding: 0.5%;
  transition: ease all 0.2s;
  outline: none;
  border: 1px solid #555bfb;
  width: 25%;

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

export const Ul = styled.ul`
  ${applyStyleModifiers(Modifiers)}
`