import React from 'react'

import { 
    Head,
    HeaderContainer, 
    HeaderItem, 
    HeaderMenu, 
    HeaderTitle 
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
        </HeaderContainer>
      </Head>
    </>
  )
}

export default Header