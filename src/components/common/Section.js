import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Section = styled.section`
${applyStyleModifiers(modifiers)}
`

export default Section