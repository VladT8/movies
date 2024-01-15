import React, { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";
import { MovieData, MovieList } from "../movieList/movieList";

export interface MainProps {
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
      {/* <MovieCard title="The Departed" /> */}
    </MainContainer>
  );
};
