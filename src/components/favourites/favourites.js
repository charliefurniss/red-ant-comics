import React from 'react';
import { useAppState } from '../../app-state';

export const Favourites = () => {
  const {
    favourites,
    updateFavourites,
    isPanelOpen,
    togglePanelState,
  } = useAppState();
  const panelclassNameList = isPanelOpen
    ? 'favourites-panel open'
    : 'favourites-panel';

  return (
    <div className={panelclassNameList}>
      <div className='favourites-header'>
        <h2>Favourites</h2>
        <button className='close js-close' onClick={togglePanelState}></button>
      </div>
      <div className='favourites-content'>
        <ul className='favourites-list'>
          {favourites.map((favourite) => (
            <li key={favourite.id}>
              {favourite.title}
              <button
                className='remove js-remove'
                onClick={() => updateFavourites(favourite)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
