import React from 'react'

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
            <ImageEditorDesk alt="Editor Desk"/>
              <BodySectionOneContainer>
                {/* <TitleSectionOne>Designed for the future</TitleSectionOne> */}
              </BodySectionOneContainer>
          </BodySectionOne>
        </BodyContainer>
    </BodyBackground>
  )
}

export default Body
