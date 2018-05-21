import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const TextArea = styled.textarea`
${applyStyleModifiers(modifiers)}
`

export default TextArea