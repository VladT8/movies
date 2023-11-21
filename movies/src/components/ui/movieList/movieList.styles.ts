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
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  a {
    /* position: relative; */
    border-radius: 10px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
    .favor__wrapper {
      /* position: absolute; */
      background: rgba(0, 0, 0, 0.8);
      z-index: 10;
      width: 100%;
      transition: 0.5s ease;
      opacity: 0;
      /* bottom: 0; */
      text-align: center;
      width: 100%;
      height: 30px;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
