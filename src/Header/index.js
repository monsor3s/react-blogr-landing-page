import React from 'react'

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
    } from './HeaderElements'

export const Header = () => {
  return (
    <>
      <Head>
        <HeaderContainer>
          <ImageBackgroundDesk alt="Fundo Desk" />
            <HeaderMenu>
              <HeaderTitle>Blogr</HeaderTitle>
                <HeaderItem>Product</HeaderItem>
                <HeaderItem>Company</HeaderItem>
                <HeaderItem>Connect</HeaderItem>
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