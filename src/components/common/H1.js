import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const H1 = styled.h1`
${applyStyleModifiers(modifiers)}
`

export default H1