import React, { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { MovieCard } from "../movieCard/movieCard";
import { MovieData, MovieList } from "../movieList/movieList";
import {
  SingleMoviePageStyle,
  SingleMoviePageStylePoster,
  SingleMoviePageStyleTitle,
  SinglePostActors,
  SinglePostAwards,
  SinglePostCountry,
  SinglePostDirector,
  SinglePostimdbRating,
  SinglePostinfo,
} from "./singleMoviePage.styles";
import { AddFavorite } from "../../shared/favoriteIcon/AddFavorite";
import { useParams } from "react-router-dom";

interface SingleMoviePageProps {
  Title?: string;
  Plot?: string;
  Director?: string;
  Actors?: string;
  Country?: string;
  Awards?: string;
  imdbRating?: string;
  Poster?: string;
  imdbID?: string;
}

export const SingleMoviePage = () => {
  const themeContextData = useContext(ThemeContext);
  const params = useParams();
  console.log("PARAMS", params);

  const [currentMovie, setCurrentMovie] = useState<any>();
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${params.imdbID}&apikey=ebf59a92`)
      .then((response) => response.json())
      .then((json) => setCurrentMovie(json));
  }, []);
  return (
    <SingleMoviePageStyle
      className="single-post"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <SingleMoviePageStylePoster>
        <img src={currentMovie.Poster} alt={currentMovie.Title} />
      </SingleMoviePageStylePoster>
      <div>
        <SingleMoviePageStyleTitle>
          {currentMovie?.Title}
        </SingleMoviePageStyleTitle>
        <SinglePostinfo>{currentMovie.Plot}</SinglePostinfo>
        <SinglePostDirector>
          Director: {currentMovie.Director}
        </SinglePostDirector>
        <SinglePostActors>Actors: {currentMovie.Actors}</SinglePostActors>
        <SinglePostCountry>Country: {currentMovie.Country}</SinglePostCountry>
        <SinglePostAwards>Awards: {currentMovie.Awards}</SinglePostAwards>
        <SinglePostimdbRating>
          IMDb Rating: {currentMovie.imdbRating}
        </SinglePostimdbRating>
      </div>
    </SingleMoviePageStyle>
  );
};
