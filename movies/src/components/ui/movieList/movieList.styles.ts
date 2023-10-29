import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface movieListProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const MovieListContainer = styled.section<movieListProps>`
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
