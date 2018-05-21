import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const A = styled.a`
${applyStyleModifiers(modifiers)}
`

export default A