import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Div = styled.div`
${applyStyleModifiers(modifiers)}
`

export default Div