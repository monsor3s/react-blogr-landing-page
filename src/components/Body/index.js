import React from 'react'
import Circles from '../../images/bg-pattern-circles.svg'
import EditorDesk from '../../images/illustration-editor-desktop.svg'
import { BodyBackground, 
  BodyContainer, 
  ImageCircle, 
  ImageEditorDesk } from './BodyElements'

export const Body = () => {
  return (
    <BodyBackground>
        <BodyContainer>
          <ImageCircle src={Circles} alt="Cicles"/>
          <ImageEditorDesk src={EditorDesk} alt="Editor Desk"/>
        </BodyContainer>
    </BodyBackground>
  )
}

export default Body
