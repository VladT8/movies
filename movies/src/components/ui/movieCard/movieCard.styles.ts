import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface CardContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const CardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: left;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const Title = styled.h3<CardContainerProps>`
  font-size: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme?.text};
`;

export const Info = styled.h4<CardContainerProps>`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme?.text};
`;
