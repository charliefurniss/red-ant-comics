import React from 'react';
import { useAppState } from '../../app-state';

export const Favourites = () => {
  const {
    favourites,
    removeFromFavourites,
    isPanelOpen,
    togglePanelState,
  } = useAppState();
  const panelClassList = isPanelOpen
    ? 'favourites-panel open'
    : 'favourites-panel';

  return (
    <div id='favourites-panel' class={panelClassList}>
      <div class='favourites-header'>
        <h2>Favourites</h2>
        <button class='close js-close' onClick={togglePanelState}></button>
      </div>
      <div class='favourites-content'>
        <ul class='favourites-list'>
          {favourites.map((favourite) => (
            <li key={favourite.id}>
              {favourite.title}
              <button
                class='remove js-remove'
                onClick={() => removeFromFavourites(favourite)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
