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
import { Burger } from "./Burger";

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
      className="header"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <Burger />

      <div className="search">PLACE FOR SEARCH</div>
      <button onClick={changeTheme}>CHANGE THEME</button>
    </HeaderContainer>
  );
};
