import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./components/themeContext";
import { ThemeType, Themes } from "./components/themeContext/themes";
import { Header } from "./components/ui/header/header";
import { MovieCard } from "./components/ui/movieCard/movieCard";
import { FormComponent } from "./components/shared/form/form";
import { SignInComponent } from "./components/ui/auth/SignIn";
import { SignUpComponent } from "./components/ui/auth/SignUp";
import { AuthDetails } from "./components/ui/auth/AuthDetails";
import { Main } from "./components/ui/main/main";
import { Footer } from "./components/ui/footer/footer";
import { MovieData, MovieList } from "./components/ui/movieList/movieList";
import { SearchBox } from "./components/ui/searchInput/searchBox";
import { AddFavorite } from "./components/shared/addFavorites/AddFavorite";
import { NotFoundComponent } from "./components/ui/empty/empty";
import { SingleMoviePage } from "./components/ui/singlePost/singleMoviePage";
import { FavoritesPage } from "./components/pages/favoritesPage/favoritesPage";
import { RemoveFavorites } from "./components/shared/removeFavorites/removeFavorites";
import { json } from "stream/consumers";
import { AboutPage } from "./components/pages/about/about";
import { ProfilePage } from "./components/pages/profile/profile";
function App() {
  const [theme, setTheme] = useState<ThemeType>("light");
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue: string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ebf59a92`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const saveToLocalStorage = (items: any) => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const [favorites, setFavorites] = useState<MovieData[]>([]);

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
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = localStorage.getItem("react-movie-app-favorites");
    if (movieFavorites !== null) {
      setFavorites(JSON.parse(movieFavorites));
    }
  }, []);

  return (
    <Router>
      <ThemeContext.Provider
        value={{ currentTheme: theme, stylesForTheme: Themes[theme] }}
      >
        <div className="App">
          <div className="container">
            <Header
              changeTheme={changeTheme}
              isActive={theme === "dark"}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <main className="main">
              <Routes>
                <Route path="/" element={<Main movies={movies} />} />
                <Route path="/main" element={<Main movies={movies} />} />
                <Route
                  path="/favorites"
                  element={
                    <FavoritesPage
                      favorites={favorites}
                      addFavoriteMovie={addFavoriteMovie}
                      removeFavoriteMovie={removeFavoriteMovie}
                    />
                  }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<SignUpComponent />} />
                <Route path="/login" element={<SignInComponent />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/movie/:imdbID" element={<SingleMoviePage />} />
                <Route path="*" element={<NotFoundComponent />} />
              </Routes>
              <MovieList
                movies={movies}
                handleFavoritesClick={addFavoriteMovie}
                favoriteComponent={AddFavorite}
              />
            </main>
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
