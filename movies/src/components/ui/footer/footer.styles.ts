import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface FooterContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  width: 100%;
  height: 150px;
  border: 3px solid black;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;