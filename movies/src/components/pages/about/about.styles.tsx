import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface AboutPageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const AboutPageContainer = styled.div<AboutPageStyleProps>`
  /* width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 768px) {
    flex-wrap: wrap;
  } */
`;
