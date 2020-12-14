import React from 'react';

import { useAppState } from '../../app-state';

export const Header = () => {
  const { togglePanelState } = useAppState();

  return (
    <header className='site-header'>
      <h1 className='site-heading'>Red Ant Comics</h1>
      <button
        className='favourites-toggle js-favourites-toggle'
        onClick={togglePanelState}
      ></button>
    </header>
  );
};
