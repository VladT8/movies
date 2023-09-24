import styled from 'styled-components';
import { Theme } from '../../themeContext/themes';

interface HeaderContainerProps {
  theme: Theme
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.text};
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: ${props => props.theme.text};
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.text};
`

// export const NavLi = styled.li`
//   height: 100px;
//   cursor: pointer;
//   color: ${props => props.theme.text};
//   background-color: ${props => props.theme.text};
// `