import { React, useState, useEffect } from 'react';

import { Comic } from './comic';

const COMICS_URL =
  'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';

export const ComicsList = () => {
  const [comicsState, setComicsState] = useState({
    error: false,
    loading: true,
    comics: null,
  });

  useEffect(() => {
    fetch(COMICS_URL)
      .then((res) => res.json())
      .then((json) =>
        setComicsState({ loading: false, comics: json.data.results })
      )
      .catch((error) => setComicsState({ error }));
  }, [setComicsState]);

  if (comicsState.error)
    return (
      <h1>{`Sorry there's been a problem getting your comics: ${comicsState.error}`}</h1>
    );

  if (comicsState.loading) return <h1>Loading...</h1>;

  return (
    <ul className='comics-list'>
      {comicsState.comics.map((comic) => {
        return <Comic comic={comic} key={comic.id} />;
      })}
    </ul>
  );
};
