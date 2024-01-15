import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { AboutPageContainer, AboutPageInfo } from "./about.styles";

export const AboutPage = () => {
  const themeContextData = useContext(ThemeContext);

  return (
    <AboutPageContainer
      className="about"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <AboutPageInfo>
        The project is developed using the following technologies and functional
        features:
        <br />
        - React with hooks (useContext, useEffect, useState).
        <br />
        - Routing implemented with react-router-dom.
        <br />
        - React Hook Form
        <br />
        - Theme switching capability using useContext.
        <br />
        - User authentication and interaction with Google Firebase for data
        storage and login (with localStorage support).
        <br />
        - Private navigation to page '/profile'. (email: test@gmail.com,
        password: Qwer1234)
        <br />
        - Integration with the OMDB API (https://www.omdbapi.com/) to retrieve
        movie information.
        <br />
        - Implementation of movie search, navigation to individual movie pages,
        and adding to favorites (with localStorage support).
        <br />
        - Burger menu for convenient site navigation.
        <br />- Styling of components using Styled Components and SASS
        preprocessor.
        <br />- Implementation of a menu button using Mui UI.
      </AboutPageInfo>
    </AboutPageContainer>
  );
};
