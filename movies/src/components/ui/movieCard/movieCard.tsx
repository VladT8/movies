import React, { FC } from 'react';
import { CardContainer } from './movieCard.styles';

interface MovieCardProps {
  title: string;
}

export const MovieCard: FC<MovieCardProps> = ({title}) => {
  return (
    <>
      <CardContainer>Title is {title}</CardContainer>
    </>
  );
};