import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const P = styled.p`
${applyStyleModifiers(modifiers)}
`

export default P