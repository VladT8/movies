import React, { FC, useContext, useEffect, useState } from "react";
import { CardContainer, Info, Poster, Title } from "./movieCard.styles";
import { ThemeContext } from "../../themeContext";
import { Theme } from "../../themeContext/themes";

interface MovieCardProps {
  title: string;
  posterUrl?: string;
  genre?: string;
  director?: string;
}

export const MovieCard: FC<MovieCardProps> = ({
  title,
}: MovieCardProps) => {
  const themeContextData = useContext(ThemeContext);
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const apiKey = "ebf59a92";
      const apiUrl = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, [title]);

  return (
    <CardContainer
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      {movieData && (
        <>
          <Poster src={movieData.Poster} alt={`${movieData.Title}`} />
          <Title>{movieData.Title}</Title>
          <Info>Genre: {movieData.Genre}</Info>
          <Info>Director: {movieData.Director}</Info>
        </>
      )}
    </CardContainer>
  );
};
