import { useState } from "react";
import styled from "styled-components";
import { NavLi, NavUl, NavigationContainer } from "./header.styles";
import { Link } from "react-router-dom";
interface BurgeContainerProps {
  isOpen: boolean;
}

const StyledBurger = styled.div<BurgeContainerProps>`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 35px;
  left: 30px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  z-index: 2;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  div {
    width: 30px;
    height: 5px;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: -2px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0deg)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
`;
export const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavigationContainer className="header__menu" isOpen={isOpen}>
        <NavUl className="header__list">
          <NavLi>
            <Link to="/">Main</Link>
          </NavLi>
          <NavLi>
            <Link to="/favorites">Favorites</Link>
          </NavLi>
        </NavUl>
      </NavigationContainer>
    </>
  );
};
