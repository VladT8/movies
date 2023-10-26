import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface HeaderContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
  isOpen?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;

export const InputSearchStyle = styled.input`
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

export const NavigationContainer = styled.nav<HeaderContainerProps>`
  width: 50%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const NavUl = styled.ul<HeaderContainerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #0d2538;
    /* background-color: ${({ theme }) => theme?.background}; */
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 5% 0;
  }
`;

export const NavLi = styled.li<HeaderContainerProps>`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 576px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
