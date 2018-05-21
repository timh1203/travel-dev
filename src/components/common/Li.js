import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Li = styled.li`
${applyStyleModifiers(modifiers)}
`

export default Li