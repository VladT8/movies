import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { MovieListContainer } from "./movieList.styles";
import { MovieCard } from "../movieCard/movieCard";
import {
  DirectorInfo,
  Title,
  GenreInfo,
  Poster,
  CardContainer,
} from "../movieCard/movieCard.styles";

export interface MovieData {
  Title: string;
  Year?: string;
  Poster: string;
  Director: string;
  Genre: string;
}
interface MovieListProps {
  movies: MovieData[];
}

export const MovieList: FC<MovieListProps> = ({ movies }) => {
  const themeContextData = useContext(ThemeContext);
  return (
    <MovieListContainer>
      {movies.map((movie, index) => (
        <CardContainer
          key={index}
          theme={themeContextData.stylesForTheme}
          myTheme={themeContextData.currentTheme}
        >
          <>
            <Poster src={movie.Poster} alt={`${movie.Title}`} />
            <Title>{movie.Title}</Title>
          </>
        </CardContainer>
      ))}
    </MovieListContainer>
  );
};
