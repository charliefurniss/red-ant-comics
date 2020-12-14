import React from 'react';

export const Favourites = () => {
  return (
    <div id='favourites-panel' class='favourites-panel open'>
      <div class='favourites-header'>
        <h2>Favourites</h2>
        <button class='close js-close'></button>
      </div>
      <div class='favourites-content'>
        <ul class='favourites-list'>
          Template for list items:
          <li>
            Comic name
            <button class='remove js-remove'></button>
          </li>
        </ul>
      </div>
    </div>
  );
};
