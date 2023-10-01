import React, { FC, useContext } from "react";
import {
  HeaderContainer,
  NavLi,
  NavUl,
  NavigationContainer,
} from "./header.styles";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeContext";
import { ChangeThemeButton } from "../themeToggle/themeToggle";

interface HeaderContainerProps {
  nav?: string;
}

export const Header: FC<HeaderContainerProps> = ({ nav }) => {
  const themeContextData = useContext(ThemeContext);

  return (
    <HeaderContainer
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <NavigationContainer>
        <NavLi>
          <Link to="/">TO MAIN</Link>
        </NavLi>
        <NavLi>
          <Link to="/">SignUp</Link>
        </NavLi>
        <NavLi>
          <Link to="/">Login</Link>
        </NavLi>
        <NavLi>
          <Link to="/">About</Link>
        </NavLi>
        <NavLi>
          <Link to="/">Contacts</Link>
        </NavLi>
      </NavigationContainer>
      <div className="search">PLACE FOR SEARCH</div>
    </HeaderContainer>
  );
};
