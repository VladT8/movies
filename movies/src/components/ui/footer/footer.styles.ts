import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface FooterContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  h4 {
    font-size: 50px;
  }
`;
