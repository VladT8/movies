import React from 'react';
import { CardContainer, Title, Info } from './movieCard.styles';

interface MovieCardProps {
  title: string;
  year: string;
  genre: string;
  director: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, year, genre, director }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Info>Year: {year}</Info>
      <Info>Genre: {genre}</Info>
      <Info>Director: {director}</Info>
    </CardContainer>
  );
};
