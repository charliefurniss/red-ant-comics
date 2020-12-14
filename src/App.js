import { React, useEffect, useState } from 'react';

import './App.css';
import { Header, Favourites, ComicsList } from './components';

const App = () => {
  const [comicsState, setComicsState] = useState({
    loading: true,
    comics: null,
  });
  useEffect(() => {
    setComicsState({ loading: true });
    const url =
      'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log({ comics: json.data.results });
        setComicsState({ loading: false, comics: json.data.results });
      });
  }, [setComicsState]);

  return (
    <>
      <Header />
      <main class='site-content'>
        <ComicsList comicsState={comicsState} />
      </main>
      <Favourites />
    </>
  );
};

export default App;
