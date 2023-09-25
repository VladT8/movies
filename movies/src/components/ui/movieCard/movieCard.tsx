import React, { FC, useContext, useEffect } from 'react';
import { CardContainer, Info, Poster, Title } from './movieCard.styles';
import { ThemeContext } from '../../themeContext';
import { Theme } from '../../themeContext/themes';

interface MovieCardProps {
  title: string;
  posterUrl: string
  genre: string
  director: string
}

export const MovieCard: FC<MovieCardProps> = ({title, posterUrl, genre, director }: MovieCardProps) => {

  const themeContextData = useContext(ThemeContext)

  return (
    <CardContainer
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}>
      <Poster src={posterUrl} alt={`${title}`}/>
      <Title>{title}</Title>
      <Info>Genre: {genre}</Info>
      <Info>Director: {director}</Info>
    </CardContainer>
  );
};