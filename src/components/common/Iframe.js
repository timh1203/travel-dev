import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { modifiers } from './modifiers'

const Iframe = styled.iframe`
${applyStyleModifiers(modifiers)}
`

export default Iframe