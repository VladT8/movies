import React, { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { MainContainer } from "./main.styles";
import { MovieCard } from "../movieCard/movieCard";
import { MovieData, MovieList } from "../movieList/movieList";
import {
  AddFavorite,
  AddFavoriteProps,
} from "../../shared/favoriteIcon/AddFavorite";
import { Router, Routes, Route } from "react-router-dom";
import { FavoritesPage } from "../../pages/favoritesPage/favoritesPage";
import { SignUpComponent } from "../auth/SignUp";
import { SignInComponent } from "../auth/SignIn";
import { NotFoundComponent } from "../empty/empty";
import { SingleMoviePage } from "../singlePost/singleMoviePage";

export interface MainProps {
  movies: MovieData[];
}

export const Main: FC<MainProps> = ({ movies }) => {
  const themeContextData = useContext(ThemeContext);
  const [favorites, setFavorites] = useState<MovieData[]>([]);

  const saveToLocalStorage = (items: any) => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie: MovieData) => {
    const newFavoriteList: any = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie: MovieData) => {
    const newFavoriteList: any = favorites.filter(
      (favorites) => favorites.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  useEffect(() => {
    const movieFavorites = localStorage.getItem("react-movie-app-favorites");
    if (movieFavorites !== null) {
      setFavorites(JSON.parse(movieFavorites));
    }
  }, []);

  return (
    <MainContainer
      className="main"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      {/* <MovieCard title="The Departed" /> */}
      {/* <MovieList
        movies={movies}
        handleFavoritesClick={addFavoriteMovie}
        favoriteComponent={AddFavorite}
      /> */}
    </MainContainer>
  );
};
