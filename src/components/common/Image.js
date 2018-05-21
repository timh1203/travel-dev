import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Image = styled.img`
${applyStyleModifiers(modifiers)}
`

export default Image