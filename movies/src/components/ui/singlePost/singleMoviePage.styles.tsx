import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface SingleMoviePageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const SingleMoviePageStyle = styled.div<SingleMoviePageStyleProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
`;
export const SingleMoviePageStylePoster = styled.div<SingleMoviePageStyleProps>`
  width: 200px;
  height: 500px;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const SingleMoviePageStyleTitle = styled.h2<SingleMoviePageStyleProps>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme?.text};
`;

export const SinglePostinfo = styled.h3<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostPlot = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostDirector = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostActors = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostCountry = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostAwards = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
export const SinglePostimdbRating = styled.h2<SingleMoviePageStyleProps>`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
`;
