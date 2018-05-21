import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const H3 = styled.h3`
${applyStyleModifiers(modifiers)}
`

export default H3