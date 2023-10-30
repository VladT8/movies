import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";
import { MovieData, MovieList } from "../movieList/movieList";
import {
  AddFavorite,
  AddFavoriteProps,
} from "../../shared/favoriteIcon/AddFavorite";

interface MainProps {
  movies: MovieData[];
}

export const Main: FC<MainProps> = ({ movies }) => {
  const themeContextData = useContext(ThemeContext);
  return (
    <MainContainer
      className="main"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <MovieList movies={movies} favoriteComponent={AddFavorite} />
      {/* <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" /> */}
    </MainContainer>
  );
};
