import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Ul = styled.ul`
${applyStyleModifiers(modifiers)}
`

export default Ul