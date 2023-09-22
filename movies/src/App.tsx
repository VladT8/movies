import React from 'react';

import { MovieCard } from './components/ui/movieCard/movieCard';  // Изменено имя файла и путь

function App() {
  return (
    <div className="App">
      <MovieCard
      title='Inception'
      />
    </div>
  );
}

export default App;