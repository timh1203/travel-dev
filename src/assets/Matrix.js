import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Modifiers } from './Modifiers'

export const Container = styled.div`
  ${applyStyleModifiers(Modifiers)}
  font-family: 'Raleway';
`

export const Wrapper = styled.div`
  ${applyStyleModifiers(Modifiers)}
  margin-bottom: 1rem;
`

export const Section = styled.section`
  ${applyStyleModifiers(Modifiers)}
  padding: 1rem 0;
`

export const SectionA = styled.section`
  ${applyStyleModifiers(Modifiers)}
  margin: 3rem auto;
  text-align: left;
`

export const Div = styled.div`
  ${applyStyleModifiers(Modifiers)}
`

export const DivA = styled.div`
  ${applyStyleModifiers(Modifiers)}
  display: flex;
  justify-content: space-between;
`

export const DivB = styled.div`
  ${applyStyleModifiers(Modifiers)}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const A = styled.a`
  ${applyStyleModifiers(Modifiers)}
`

export const Hr = styled.hr`
  ${applyStyleModifiers(Modifiers)}
  width: 70%;
  margin: 1rem auto;
`

export const Button = styled.button`
  ${applyStyleModifiers(Modifiers)}
  border: 2px solid black;
  border-radius: 10px;
  color: white;
  background: #555bfb;
  transition: ease all 0.5s;
  font-size: 1rem;
  &:hover {
    background: white;
    color: #555bfb;
    border: 2px solid black;
    box-shadow: 0 0 20px #5454FF;
  }
`

export const Span = styled.span`
  ${applyStyleModifiers(Modifiers)}
`

export const SpanA = styled.span`
  ${applyStyleModifiers(Modifiers)}
  transition: ease all 0.5s;
  &:hover {
    transform: rotate(-10deg) scale(1.1);
    outline: none;
    border: none;
  }
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

export const ImgA = styled.img`
  ${applyStyleModifiers(Modifiers)}
  max-height: 300px;
`

export const Input = styled.input`
  ${applyStyleModifiers(Modifiers)}
  font-size: 1rem;
  width: 40%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: ease all 0.2s;
  font-family: 'Raleway';
  &:focus {
    outline: none;
    border: 1px solid #555bfb;
    box-shadow: 0 0 20px #5454FF;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
`

export const Textarea = styled.textarea`
  ${applyStyleModifiers(Modifiers)}
  font-size: 1rem;
  width: 40%;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: ease all 0.2s;
  font-family: 'Raleway';
  &:focus {
    outline: none;
    border: 1px solid #555bfb;
    box-shadow: 0 0 20px #5454FF;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
`

export const Ul = styled.ul`
  ${applyStyleModifiers(Modifiers)}
  padding: 0;
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

// Social Links
export const twitter = 'https://twitter.com/travelDev';
export const youtube = 'https://www.youtube.com/c/travelDevVideos';
export const instagram = 'https://www.instagram.com/travel_dev';
export const introVid = 'https://www.youtube.com/embed/d1fnzB8M3UM?rel=0&amp;controls=0&amp;showinfo=0';
