import React, { FC } from 'react';
import { CardContainer, Info, Poster, Title } from './movieCard.styles';

interface MovieCardProps {
  title: string;
  posterUrl: string
  genre: string
  director: string
}

export const MovieCard: FC<MovieCardProps> = ({title, posterUrl, genre, director }) => {
  return (
    <CardContainer>
      <Poster src={posterUrl} alt={`${title}`}/>
      <Title>{title}</Title>
      <Info>Genre: {genre}</Info>
      <Info>Director: {director}</Info>
    </CardContainer>
  );
};