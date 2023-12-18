import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface MainContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const MainContainer = styled.section<MainContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;
