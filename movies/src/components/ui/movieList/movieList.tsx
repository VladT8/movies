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
import { Link } from "react-router-dom";

export interface MovieData {
  Title: string;
  Year?: string;
  Poster: string;
  Director: string;
  Genre: string;
  imdbID?: string;
  favoriteComponent?: () => Element;
}
interface MovieListProps {
  movies: MovieData[];
  favoriteComponent: FC<AddFavoriteProps>;
  // handleFavoritesClick?: ((movie: MovieData) => void) | undefined;
  handleFavoritesClick?: any;
}

export const MovieList: FC<MovieListProps> = ({
  movies,
  handleFavoritesClick,
  favoriteComponent,
}) => {
  const themeContextData = useContext(ThemeContext);
  const FavoriteComponent = favoriteComponent;
  return (
    <MovieListContainer>
      {movies.map((movie, imdbID) => (
        <Link key={imdbID} to={`/movie/${movie.imdbID}`}>
          <CardContainer
            theme={themeContextData.stylesForTheme}
            myTheme={themeContextData.currentTheme}
          >
            <>
              <Poster src={movie.Poster} alt={`${movie.Title}`} />
              <Title>{movie.Title}</Title>
              <div
                className="favor__wrapper"
                onClick={() => handleFavoritesClick(movie)}
              >
                <FavoriteComponent />
              </div>
            </>
          </CardContainer>
        </Link>
      ))}
    </MovieListContainer>
  );
};
