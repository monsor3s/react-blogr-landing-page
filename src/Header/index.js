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
    HeaderLinks,
    HeaderArrow,
    } from './HeaderElements'


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <HeaderContainer>
          <ImageBackgroundDesk alt="Fundo Desk" />
          <HeaderTitle>Blogr</HeaderTitle>
            <HeaderMenu>
                <HeaderItem>
                  <HeaderLinks>Product</HeaderLinks>
                  <HeaderArrow src="../images/icon-arrow-dark.svg" />
                </HeaderItem>
                <HeaderItem>
                  <HeaderLinks>Company</HeaderLinks>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLinks onClick={toggling}>Connect</HeaderLinks>
                  {isOpen && (
                    <DropDownListContainer>
                    <DropDownList>
                      <ListItem>Contact</ListItem>
                      <ListItem>Newsletter</ListItem>
                      <ListItem>Linkedln</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
                </HeaderItem>
                
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