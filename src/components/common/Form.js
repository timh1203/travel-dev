import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Form = styled.form`
${applyStyleModifiers(modifiers)}
`

export default Form