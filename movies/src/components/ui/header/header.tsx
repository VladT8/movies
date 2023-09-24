import React, { FC } from 'react';
import { HeaderContainer, NavUl, NavigationContainer, } from './header.styles';
import { Link } from 'react-router-dom'

interface HeaderContainerProps {
   nav?: string
}

export const Header: FC<HeaderContainerProps> = ({nav}) => {
   return (
      <HeaderContainer>
         <NavigationContainer>
            <NavUl>
               <Link to='/'>SignUp</Link>
               <Link to='/'>Login</Link>
               <Link to='/'>About</Link>
               <Link to='/'>Contacts</Link>
            </NavUl>
         </NavigationContainer>
      </HeaderContainer>
   )
}