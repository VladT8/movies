import React from 'react';

import { MovieCard } from './components/ui/movieCard/movieCard';  // Изменено имя файла и путь
import { Header } from './components/ui/header/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            {/* <Route path="/" element={<SignUpForm/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
            <Route path="*" element={<NotFoundComponent/>}/> */}
          </Routes>
          <MovieCard
            title='Inception'
            posterUrl = ''
            genre  = 'Sci-Fi, Action'
            director = 'Christopher Nolan'
          />
        </div>
    </Router>
    
  );
}

export default App;