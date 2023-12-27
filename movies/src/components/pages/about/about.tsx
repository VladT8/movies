import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { AboutPageContainer } from "./about.styles";

export const AboutPage = () => {
  const themeContextData = useContext(ThemeContext);

  return (
    <AboutPageContainer
      className="about"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    ></AboutPageContainer>
  );
};
