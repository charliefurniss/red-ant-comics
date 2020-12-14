import { React, useState } from 'react';

import { AppState } from './app-state';
import { Header, Favourites, ComicsList } from './components';

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const isFavourite = (comic) => favourites.includes(comic);

  const updateFavourites = (comic) => {
    const updatedFavourites = !isFavourite(comic)
      ? [...favourites, comic]
      : favourites.filter((f) => f.id !== comic.id);

    setFavourites(updatedFavourites);
  };

  const togglePanelState = () => setIsPanelOpen(!isPanelOpen);

  return (
    <AppState.Provider
      value={{
        favourites,
        updateFavourites,
        isFavourite,
        isPanelOpen,
        togglePanelState,
      }}
    >
      <Header />
      <main className='site-content'>
        <ComicsList />
      </main>
      <Favourites />
    </AppState.Provider>
  );
};

export default App;
