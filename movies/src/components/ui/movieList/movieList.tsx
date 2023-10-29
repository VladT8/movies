import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { MovieListContainer } from "./movieList.styles";
import {
  AddFavorite,
  AddFavoriteProps,
} from "../../shared/favoriteIcon/AddFavorite";
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
  favoriteComponent?: () => Element;
}
interface MovieListProps {
  movies: MovieData[];
  favoriteComponent: FC<AddFavoriteProps>;
}

export const MovieList: FC<MovieListProps> = ({
  movies,
  favoriteComponent,
}) => {
  const themeContextData = useContext(ThemeContext);
//   const FavoriteComponent = favoriteComponent;
  return (
    <MovieListContainer>
      {movies.map((movie, index, handleFavoritesClick) => (
        <CardContainer
          key={index}
          theme={themeContextData.stylesForTheme}
          myTheme={themeContextData.currentTheme}
          onClick={() => handleFavoritesClick}
        >
          <>
            <Poster src={movie.Poster} alt={`${movie.Title}`} />
            <Title>{movie.Title}</Title>
            {/* <FavoriteComponent /> */}
          </>
        </CardContainer>
      ))}
    </MovieListContainer>
  );
};
