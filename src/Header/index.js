import React, { useState } from 'react'
import ArrowHeader from '../images/icon-arrow-light.svg'


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
    Nav,
    NavContainer,
    ContainerTitle,
    } from './HeaderElements'


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <HeaderContainer>
          <ImageBackgroundDesk alt="Fundo Desk" />
          <Nav>
            <NavContainer>
                      <ContainerTitle>
                        <HeaderTitle>Blogr</HeaderTitle>
                      </ContainerTitle>
                        <HeaderMenu>
                        <HeaderItem> 
                          <HeaderLinks>Product</HeaderLinks>
                          <HeaderArrow src={ ArrowHeader } alt="arrow header" />
                        </HeaderItem>
                        <HeaderItem>
                          <HeaderLinks>Company</HeaderLinks>
                          <HeaderArrow src={ ArrowHeader } alt="arrow header" />
                        </HeaderItem>
                        <HeaderItem>
                          <HeaderLinks onClick={toggling}>Connect</HeaderLinks>
                          <HeaderArrow src={ ArrowHeader } alt="arrow header" />
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
            </NavContainer>
          </Nav>
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