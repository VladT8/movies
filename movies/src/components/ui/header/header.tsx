import React, { FC } from 'react';
import { HeaderContainer, NavUl, NavigationContainer, } from './header.styles';
import { Link } from 'react-router-dom'
import ThemeToggle from '../themeToggle/themeToggle';

interface HeaderContainerProps {
   nav?: string
}

export const Header: FC<HeaderContainerProps> = ({nav}) => {
   return (
      <HeaderContainer>
         <NavigationContainer>
            <li><Link to='/'>TO MAIN</Link></li>
            <li><Link to='/'>SignUp</Link></li>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Contacts</Link></li>
         </NavigationContainer>
         <div className="search">PLACE FOR SEARCH</div>
         <ThemeToggle/>
      </HeaderContainer>
   )
}