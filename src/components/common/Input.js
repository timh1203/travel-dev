import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Input = styled.input`
${applyStyleModifiers(modifiers)}
`

export default Input