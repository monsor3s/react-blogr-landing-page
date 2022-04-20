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
            
            </HeaderBody>
        </HeaderContainer>
      </Head>
    </>
  )
}

export default Header