import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import {
  ProfileImage,
  ProfilePageContainer,
  ProfileTitle,
} from "./profile.styles";
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
    >
      <ProfileImage
        src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
        alt="Profile"
      />
      <ProfileTitle>ProfileName</ProfileTitle>
    </ProfilePageContainer>
  );
};
