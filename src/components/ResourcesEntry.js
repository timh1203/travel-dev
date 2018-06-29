import React from 'react'
import { Div, A, ImgA } from '../assets/Matrix'

const ResourcesEntry = (props) => (
  <Div>
    <Div>
      <A href={props.href} target="_blank">
        <ImgA src={props.src} alt={props.alt} />
      </A>
    </Div>
    <Div>
      {props.text}
    </Div>
  </Div>
)

export default ResourcesEntry
