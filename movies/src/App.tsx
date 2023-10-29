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
import { MovieList } from "./components/ui/movieList/movieList";
import { SearchBox } from "./components/ui/searchInput/searchBox";

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

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, stylesForTheme: Themes[theme] }}
    >
      <Router>
        <div className="App">
          <div className="wrapper">
            <div className="container">
              <Header
                changeTheme={changeTheme}
                isActive={theme === "dark"}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              {/* <SignUpComponent formName={"SignUp"} />
          <SignInComponent formName={"SignIn"} /> */}
              <Routes>
                {/* <Route path="/" element={<SignUpForm/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
            <Route path="*" element={<NotFoundComponent/>}/> */}
              </Routes>
              <MovieList movies={movies} />
              <Main />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
