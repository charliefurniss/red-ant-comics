import { React, useState } from 'react';

import './App.css';
import { AppState } from './app-state';
import { Header, Favourites, ComicsList } from './components';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = (comic) => favourites.includes(comic);

  const addToFavourites = (comic) => {
    if (!isFavourite(comic)) {
      setFavourites([...favourites, comic]);
    }
  };

  const removeFromFavourites = (comic) => {
    const filteredFavourites = favourites.filter((f) => f.id !== comic.id);
    setFavourites(filteredFavourites);
  };

  return (
    <AppState.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}
    >
      <Header />
      <main class='site-content'>
        <ComicsList />
      </main>
      <Favourites />
    </AppState.Provider>
  );
};

export default App;
