import React from 'react'
import EditorDesk from '../../images/illustration-editor-desktop.svg'
import { 
  BodyBackground, 
  BodyContainer, 
  BodySectionOne,
  ImageEditorDesk,
  TitleSectionOne
} from './BodyElements'

export const Body = () => {
  return (
    <BodyBackground>
        <BodyContainer>
          <BodySectionOne>
            <ImageEditorDesk src={EditorDesk} alt="Editor Desk"/>
            {/* <TitleSectionOne>Designed for the future</TitleSectionOne> */}
          </BodySectionOne>
        </BodyContainer>
    </BodyBackground>
  )
}

export default Body
