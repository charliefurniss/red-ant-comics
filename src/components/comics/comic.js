import { React } from 'react';
import { useAppState } from '../../app-state';

export const Comic = ({ comic }) => {
  const { handleAddToFavourites } = useAppState();
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';

  return (
    <li class='comic-item'>
      <div class='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <button
          class='button js-add'
          onClick={() => handleAddToFavourites(comic)}
        >
          Add to favourites
        </button>
      </div>
    </li>
  );
};
