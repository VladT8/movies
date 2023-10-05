import React, { FC, useContext, useState } from "react";
import {
  HeaderContainer,
  NavLi,
  NavUl,
  NavigationContainer,
} from "./header.styles";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeContext";
import { ChangeThemeButton } from "../themeToggle/themeToggle";
import { ThemeType } from "../../themeContext/themes";

interface HeaderContainerProps {
  nav?: string;
  children?: any;
  changeTheme: () => void;
}

export const Header: FC<HeaderContainerProps> = ({ nav, changeTheme }) => {
  const themeContextData = useContext(ThemeContext);

  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <HeaderContainer
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <NavigationContainer>
        <NavUl>
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
        </NavUl>
      </NavigationContainer>
      <div className="search">PLACE FOR SEARCH</div>
      <button onClick={changeTheme}>CHANGE THEME</button>
    </HeaderContainer>
  );
};
