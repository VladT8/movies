import React, { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { SingleMoviePage } from "../../ui/singlePost/singleMoviePage";
import { FavoritesPageContainer } from "./favoritesPage.styles";
import { MovieData, MovieList } from "../../ui/movieList/movieList";
import { AddFavorite } from "../../shared/favoriteIcon/AddFavorite";
import { RemoveFavorites } from "../../shared/removeFavorites/removeFavorites";

interface FavoritesPageProps {
  favorites: MovieData[];
  addFavoriteMovie: (movie: MovieData) => void;
  removeFavoriteMovie: (movie: MovieData) => void;
}

export const FavoritesPage: FC<FavoritesPageProps> = ({
  favorites,
  removeFavoriteMovie,
}) => {
  const themeContextData = useContext(ThemeContext);

  return (
    <FavoritesPageContainer
      className="single-post"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <MovieList
        movies={favorites}
        handleFavoritesClick={removeFavoriteMovie}
        favoriteComponent={RemoveFavorites}
      />
    </FavoritesPageContainer>
  );
};
