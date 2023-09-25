import styled from 'styled-components';
import { Theme, ThemeType } from '../../themeContext/themes';

interface HeaderContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;

export const NavigationContainer = styled.nav<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;

export const NavUl = styled.ul<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`

// export const NavLi = styled.li<HeaderContainerProps>`
//   height: 100px;
//   cursor: pointer;
//   background-color: ${({ theme }) => theme?.background};
//   color: ${({ theme }) => theme?.text};
// `