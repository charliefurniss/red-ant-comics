import { React } from 'react';
import { useAppState } from '../../app-state';

export const Comic = ({ comic }) => {
  const { isFavourite, updateFavourites } = useAppState();
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';
  const buttonLabel = isFavourite(comic)
    ? 'Remove from favourites'
    : 'Add to favourites';

  return (
    <li className='comic-item'>
      <div className='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <button
          className='button js-add'
          onClick={() => updateFavourites(comic)}
        >
          {buttonLabel}
        </button>
      </div>
    </li>
  );
};
