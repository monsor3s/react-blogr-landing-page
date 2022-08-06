import React from 'react'
import EditorDesk from '../../images/illustration-editor-desktop.svg'
import { 
  BodyBackground, 
  BodyContainer, 
  BodySectionOne,
  BodySectionOneContainer,
  ImageEditorDesk,
  TitleSectionOne
} from './BodyElements'

export const Body = () => {
  return (
    <BodyBackground>
        <BodyContainer>
          <BodySectionOne>
            <ImageEditorDesk src={EditorDesk} alt="Editor Desk"/>
              <BodySectionOneContainer>
                {/* <TitleSectionOne>Designed for the future</TitleSectionOne> */}
              </BodySectionOneContainer>
          </BodySectionOne>
        </BodyContainer>
    </BodyBackground>
  )
}

export default Body
