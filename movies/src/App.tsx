import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./components/themeContext";
import { ThemeType, Themes } from "./components/themeContext/themes";
import { Header } from "./components/ui/header/header";
import { MovieCard } from "./components/ui/movieCard/movieCard";
import { ChangeThemeButton } from "./components/ui/themeToggle/themeToggle";
import { FormComponent } from "./components/shared/form/form";
import { SignInComponent } from "./components/ui/auth/SignIn";
import { SignUpComponent } from "./components/ui/auth/SignUp";

function App() {
  const [theme, setTheme] = useState<ThemeType>("light");

  const changeTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, stylesForTheme: Themes[theme] }}
    >
      <Router>
        <div className="App">
          <h2>You are using {theme} theme</h2>
          <button onClick={changeTheme}>CHANGE THEME</button>
          <Header />
          <SignUpComponent formName={"SignUp"} />
          <SignInComponent formName={"SignIn"} />
          <Routes>
            {/* <Route path="/" element={<SignUpForm/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
            <Route path="*" element={<NotFoundComponent/>}/> */}
          </Routes>
          <MovieCard
            title="Inception"
            posterUrl=""
            genre="Sci-Fi, Action"
            director="Christopher Nolan"
          />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
