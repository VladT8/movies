import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface SingleMoviePageStyleProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const SingleMoviePageStyle = styled.div<SingleMoviePageStyleProps>`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const SingleMoviePageStylePoster = styled.div<SingleMoviePageStyleProps>`
  width: 40%;
  height: auto;
  margin-right: 25px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
export const SingleMoviePageStyleTitle = styled.h2<SingleMoviePageStyleProps>`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 15px;
`;

export const SinglePostinfo = styled.h3<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostPlot = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostDirector = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostActors = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostCountry = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostAwards = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
export const SinglePostimdbRating = styled.h2<SingleMoviePageStyleProps>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
`;
