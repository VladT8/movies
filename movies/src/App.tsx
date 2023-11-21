import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./components/themeContext";
import { ThemeType, Themes } from "./components/themeContext/themes";
import { Header } from "./components/ui/header/header";
import { MovieCard } from "./components/ui/movieCard/movieCard";
import { FormComponent } from "./components/shared/form/form";
import { SignInComponent } from "./components/ui/auth/SignIn";
import { SignUpComponent } from "./components/ui/auth/SignUp";
import { Main } from "./components/ui/main/main";
import { Footer } from "./components/ui/footer/footer";
import { MovieData, MovieList } from "./components/ui/movieList/movieList";
import { SearchBox } from "./components/ui/searchInput/searchBox";
import { AddFavorite } from "./components/shared/favoriteIcon/AddFavorite";
import { NotFoundComponent } from "./components/ui/empty/empty";
import { SingleMoviePage } from "./components/ui/singlePost/singleMoviePage";
import { FavoritesPage } from "./components/ui/favoritesPage/favoritesPage";

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
  const [favorites, setFavorites] = useState([]);

  const addFavoriteMovie = (movie: MovieData) => {
    const newFavoriteList: any = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, stylesForTheme: Themes[theme] }}
    >
      <Router>
        <div className="App">
          <div className="container">
            <Header
              changeTheme={changeTheme}
              isActive={theme === "dark"}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Routes>
              <Route path="/" element={<Main movies={movies} />} />
              <Route path="/main" element={<Main movies={movies} />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route
                path="/register"
                element={<SignUpComponent formName={"SignUp"} />}
              />
              <Route
                path="/login"
                element={<SignInComponent formName={"SignIn"} />}
              />
              <Route path="/movie/:imdbID" element={<SingleMoviePage />} />
              <Route path="*" element={<NotFoundComponent />} />
            </Routes>
            <MovieList
              movies={movies}
              handleFavoritesClick={addFavoriteMovie}
              favoriteComponent={AddFavorite}
            />

            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
