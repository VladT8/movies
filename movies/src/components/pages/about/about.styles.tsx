import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface AboutPageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const AboutPageContainer = styled.div<AboutPageStyleProps>`
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const AboutPageInfo = styled.p<AboutPageStyleProps>`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
