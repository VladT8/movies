import React, { FC, useContext, useEffect } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";

interface MainProps {}

export const Main: FC<MainProps> = ({}: MainProps) => {
  const themeContextData = useContext(ThemeContext);
  return (
    <MainContainer
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <MovieCard
        title="Inception"
        posterUrl=""
        genre="Sci-Fi, Action"
        director="Christopher Nolan"
      />
    </MainContainer>
  );
};
