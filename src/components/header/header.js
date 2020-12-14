import React from 'react';

import { useAppState } from '../../app-state';

export const Header = () => {
  const { togglePanelState } = useAppState();

  return (
    <header class='site-header'>
      <h1 class='site-heading'>Red Ant Comics</h1>
      <button
        class='favourites-toggle js-favourites-toggle'
        onClick={togglePanelState}
      ></button>
    </header>
  );
};
