import React, { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../themeContext";
import { SingleMoviePage } from "../singlePost/singleMoviePage";
import { FavoritesPageContainer } from "./favoritesPage.styles";
import { MovieList } from "../movieList/movieList";

// interface SingleMoviePageProps {
//   Title?: string;
//   Plot?: string;
//   Director?: string;
//   Actors?: string;
//   Country?: string;
//   Awards?: string;
//   imdbRating?: string;
//   Poster?: string;
//   imdbID?: string;
// }

export const FavoritesPage = () => {
  const themeContextData = useContext(ThemeContext);
  //   const params = useParams();

  //   const [currentMovie, setCurrentMovie] = useState<any>();

  //   useEffect(() => {
  //     fetch(`https://www.omdbapi.com/?i=${params.imdbID}&apikey=ebf59a92`)
  //       .then((response) => response.json())
  //       .then((json) => setCurrentMovie(json));
  //   }, []);
  return (
    <FavoritesPageContainer
      className="single-post"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      {/* <MovieList
        movies={favorites}
        handleFavoritesClick={addFavoriteMovie}
        favoriteComponent={AddFavorite}
      /> */}
    </FavoritesPageContainer>
  );
};
