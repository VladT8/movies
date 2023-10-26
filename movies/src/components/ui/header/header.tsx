import React, { FC, useContext, useState } from "react";

import {
  HeaderContainer,
  InputSearchStyle,
} from "./header.styles";
import { ThemeContext } from "../../themeContext";
import { Burger } from "./Burger";
import { ThemeButtonStyle } from "../themeToggle/themeButton.styles";
import { ButtonThemeToggler } from "../themeToggle/themeButton";

interface HeaderContainerProps {
  nav?: string;
  children?: any;
  changeTheme: () => void;
  isActive: boolean;
}

export const Header: FC<HeaderContainerProps> = ({ nav, changeTheme, isActive }) => {
  const themeContextData = useContext(ThemeContext);

  return (
    <HeaderContainer
      className="header"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <Burger />
      <InputSearchStyle placeholder="movie title..." />
      <ButtonThemeToggler
        onClick={changeTheme}
        isActive={isActive}
      />
    </HeaderContainer>
  );
};
