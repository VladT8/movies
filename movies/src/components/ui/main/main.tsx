import React, { FC, useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";

interface MainProps {}

export const Main: FC<MainProps> = ({}: MainProps) => {
  const themeContextData = useContext(ThemeContext);
  return (
    <MainContainer
      className="main"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
      <MovieCard title="The Departed" />
    </MainContainer>
  );
};
