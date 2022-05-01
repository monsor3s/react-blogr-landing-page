import React, { useState } from 'react'

import { 
  
    Head,
    HeaderContainer, 
    ImageBackgroundDesk,
    HeaderMenu,
    HeaderTitle, 
    HeaderItem, 
    HeaderLogin,
    ButtonLogin,
    ButtonSignUp,
    HeaderBody,
    HeaderBodyTitle,
    HeaderBodySpan,
    ButtonStart,
    ButtonLearn,
    DropDownListContainer,
    DropDownList,
    ListItem,
    } from './HeaderElements'


export const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const toggling = () => setIsHover(!isHover);

  return (
    <>
      <Head>
        <HeaderContainer>
          <ImageBackgroundDesk alt="Fundo Desk" />
            <HeaderMenu>
              <HeaderTitle>Blogr</HeaderTitle>
                <HeaderItem>Product</HeaderItem>
                <HeaderItem>Company</HeaderItem>
                <HeaderItem onmouseover={toggling}>Connect</HeaderItem>
                {isHover && (
                  <DropDownListContainer>
                  <DropDownList>
                    <ListItem>Contact</ListItem>
                    <ListItem>Newsletter</ListItem>
                    <ListItem>Linkedln</ListItem>
                  </DropDownList>
                </DropDownListContainer>
                )}
            </HeaderMenu>
            <HeaderLogin>
                <ButtonLogin>Login</ButtonLogin>
                <ButtonSignUp>SignUp</ButtonSignUp>
            </HeaderLogin>
            <HeaderBody>
              <HeaderBodyTitle>A modern publishing platform</HeaderBodyTitle>
              <HeaderBodySpan>Grow your audience and build your online brand</HeaderBodySpan>
                <ButtonStart>Start for Free</ButtonStart>
                <ButtonLearn>Learn More</ButtonLearn>
            </HeaderBody>
        </HeaderContainer>
      </Head>
    </>
  )
}

export default Header