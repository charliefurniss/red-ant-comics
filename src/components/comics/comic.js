import { React } from 'react';

export const Comic = ({ comic }) => {
  return (
    <li class='comic-item'>
      <div class='comic-card'>
        <img src='...' />
        <h2>{comic.title}</h2>
        <button class='button js-add'>Add to favourites</button>
      </div>
    </li>
  );
};
