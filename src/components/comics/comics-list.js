import { React, useState, useEffect } from 'react';

import { Comic } from './comic';

export const ComicsList = () => {
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
        setComicsState({ loading: false, comics: json.data.results });
      });
  }, [setComicsState]);

  if (comicsState.loading) return <h1>Loading...</h1>;

  return (
    <ul className='comics-list'>
      {comicsState.comics.map((comic) => {
        return <Comic comic={comic} key={comic.id} />;
      })}
    </ul>
  );
};
