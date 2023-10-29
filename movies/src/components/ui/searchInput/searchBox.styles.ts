import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface SearchBoxProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const SearchBoxStyle = styled.input<SearchBoxProps>`
  width: 200px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: #007bff;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }
`;
