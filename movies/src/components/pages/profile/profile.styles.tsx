import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface ProfilePageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const ProfilePageContainer = styled.div<ProfilePageStyleProps>`
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ProfileTitle = styled.h2`
  font-size: 24px;
`;