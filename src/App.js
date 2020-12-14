import { React, useState } from 'react';

import './App.css';
import { AppState } from './app-state';
import { Header, Favourites, ComicsList } from './components';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFavourites = (favourite) => {
    if (favourites.length === 0) setFavourites(favourite);
    if (!favourites.includes(favourite)) {
      setFavourites([...favourites, favourite]);
    }
  };

  return (
    <AppState.Provider value={{ favourites, handleAddToFavourites }}>
      <Header />
      <main class='site-content'>
        <ComicsList />
      </main>
      <Favourites />
    </AppState.Provider>
  );
};

export default App;
