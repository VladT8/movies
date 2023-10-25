import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface CardContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: left;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
`;

export const Title = styled.h3<CardContainerProps>`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme?.text};
`;

export const DirectorInfo = styled.h4<CardContainerProps>`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 400;
  color: ${({ theme }) => theme?.text};
`;

export const GenreInfo = styled.h4<CardContainerProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme?.text};
`;
