import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { ProfilePageContainer } from "./profile.styles";

export const ProfilePage = () => {
  const themeContextData = useContext(ThemeContext);

  return (
    <ProfilePageContainer
      className="profile"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    ></ProfilePageContainer>
  );
};
