import React from 'react'

import { 
  
    Head,
    HeaderContainer, 
    HeaderMenu,
    HeaderTitle, 
    HeaderItem, 
    HeaderLogin,
    ButtonLogin,
    ButtonSignUp,
    } from './HeaderElements'

export const Header = () => {
  return (
    <>
      <Head>
        <HeaderContainer>
            <HeaderMenu>
              <HeaderTitle>Blogr</HeaderTitle>
                <HeaderItem>Product</HeaderItem>
                <HeaderItem>Company</HeaderItem>
                <HeaderItem>Connect</HeaderItem>
              <HeaderLogin>
                <ButtonLogin>Login</ButtonLogin>
                <ButtonSignUp>SignUp</ButtonSignUp>
              </HeaderLogin>
            </HeaderMenu>
        </HeaderContainer>
      </Head>
    </>
  )
}

export default Header