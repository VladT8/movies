import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { ProfilePageContainer } from "./profile.styles";
import { AuthContext } from "../../authContext/authProvider";

export const ProfilePage = () => {
  const themeContextData = useContext(ThemeContext);
  const dataFromContext = useContext(AuthContext);
  console.log("AUTH CONTEXT", dataFromContext);
  return (
    <ProfilePageContainer
      className="profile"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    ></ProfilePageContainer>
  );
};
