import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface SingleMoviePageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const FavoritesPageContainer = styled.div<SingleMoviePageStyleProps>`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
