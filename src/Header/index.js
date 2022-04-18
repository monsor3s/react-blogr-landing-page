import React from 'react'

import { 
  ButtonLearn,
  ButtonStart,
    Head,
    HeaderBody,
    HeaderContainer, 
    HeaderItem, 
    HeaderMenu, 
    HeaderTitle, 
    SubtitleHeaderBody, 
    TitleHeaderBody
    } from './HeaderElements'

export const Header = () => {
  return (
    <>
      <Head>
        <HeaderContainer>
            <HeaderTitle>Blogr</HeaderTitle>
            <HeaderMenu>
                <HeaderItem>Product</HeaderItem>
                <HeaderItem>Company</HeaderItem>
                <HeaderItem>Connect</HeaderItem>
            </HeaderMenu>
            <HeaderBody>
              <TitleHeaderBody>A modern publishing platform</TitleHeaderBody>
              <SubtitleHeaderBody>Grow your audience and build your online brand</SubtitleHeaderBody>
              <ButtonStart>Start for Free</ButtonStart>
              <ButtonLearn>Learn More</ButtonLearn>
            </HeaderBody>
        </HeaderContainer>
      </Head>
    </>
  )
}

export default Header