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
  title?: string;
  plot?: string;
  director?: string;
  actors?: string;
  country?: string;
  awards?: string;
  imdbRating?: string;
  posterUrl?: string;
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
      .then((json) => {
        setCurrentMovie(json);
      });
  }, []);
  return (
    <SingleMoviePageStyle
      className="single-post"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <SingleMoviePageStylePoster>
        <img src={currentMovie.posterUrl} alt={currentMovie.title} />
      </SingleMoviePageStylePoster>
      <div>
        <SingleMoviePageStyleTitle>
          {currentMovie.title}
        </SingleMoviePageStyleTitle>
        <SinglePostinfo>{currentMovie.plot}</SinglePostinfo>
        <SinglePostDirector>
          Director: {currentMovie.director}
        </SinglePostDirector>
        <SinglePostActors>Actors: {currentMovie.actors}</SinglePostActors>
        <SinglePostCountry>Country: {currentMovie.country}</SinglePostCountry>
        <SinglePostAwards>Awards: {currentMovie.awards}</SinglePostAwards>
        <SinglePostimdbRating>
          IMDb Rating: {currentMovie.imdbRating}
        </SinglePostimdbRating>
      </div>
    </SingleMoviePageStyle>
  );
};
