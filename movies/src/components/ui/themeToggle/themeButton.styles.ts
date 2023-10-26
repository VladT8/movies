import styled from 'styled-components';
import { Theme, ThemeType } from '../../themeContext/themes';

interface ThemeButtonStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const ThemeButtonStyle = styled.button<ThemeButtonStyleProps>`
  width: 50px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;
  &::before {
    content: "";
    width: 26px;
    height: 26px;
    background-color: #999;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s, background-color 0.3s;
  }
  &.active {
    background-color: #14dc4b;
    &::before {
      transform: translateX(20px);
      background-color: #eee;
    }
  }
`;