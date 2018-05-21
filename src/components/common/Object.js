import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Object = styled.object`
${applyStyleModifiers(modifiers)}
`

export default Object