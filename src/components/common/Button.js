import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Button = styled.button`
${applyStyleModifiers(modifiers)}
`

export default Button