import { React } from 'react';

import { Comic } from './comic';

export const ComicsList = ({ comicsState }) => {
  if (comicsState.loading) return <h1>Loading...</h1>;

  return (
    <ul id='comics-list' class='comics-list'>
      {comicsState.comics.map((comic) => {
        return <Comic comic={comic} />;
      })}
    </ul>
  );
};
