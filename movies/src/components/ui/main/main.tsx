import React, { FC, useContext, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";
import { MovieData, MovieList } from "../movieList/movieList";
import {
  AddFavorite,
  AddFavoriteProps,
} from "../../shared/favoriteIcon/AddFavorite";

export interface MainProps {
  movies: MovieData[];
}

export const Main: FC<MainProps> = ({ movies }) => {
  const themeContextData = useContext(ThemeContext);
  // const [favorites, setFavorites] = useState([]);

  // const addFavoriteMovie = (movie: MovieData) => {
  //   const newFavoriteList: any = [...favorites, movie];
  //   setFavorites(newFavoriteList);
  // };
  return (
    <MainContainer
      className="main"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      {/* <MovieList
        movies={movies}
        handleFavoritesClick={addFavoriteMovie}
        favoriteComponent={AddFavorite}
      /> */}
      <MovieCard title="The Departed" />
      {/* <MovieCard title="The Shawshank Redemption" />
      <MovieCard title="Schindler's List" />
      <MovieCard title="Interstellar" />
      <MovieCard title="Fight Club" />
      <MovieCard title="Pulp Fiction" /> */}
    </MainContainer>
  );
};
