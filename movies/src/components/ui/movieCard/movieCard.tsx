import React, { FC, useContext, useEffect, useState } from "react";
import {
  CardContainer,
  DirectorInfo,
  GenreInfo,
  Poster,
  Title,
} from "./movieCard.styles";
import { ThemeContext } from "../../themeContext";
import {
  AddFavorite,
  AddFavoriteProps,
} from "../../shared/addFavorites/AddFavorite";

interface MovieCardProps {
  title: string;
  posterUrl?: string;
  genre?: string;
  director?: string;
  favoriteComponent?: FC<AddFavoriteProps>;
}

export const MovieCard: FC<MovieCardProps> = ({ title }: MovieCardProps) => {
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
          <DirectorInfo>Director: {movieData.Director}</DirectorInfo>
          <GenreInfo>Genre: {movieData.Genre}</GenreInfo>
          {/* <AddFavorite /> */}
        </>
      )}
    </CardContainer>
  );
};
