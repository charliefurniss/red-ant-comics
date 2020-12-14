import { React } from 'react';
import { useAppState } from '../../app-state';

const FavouritesButton = ({ comic }) => {
  const { addToFavourites, removeFromFavourites, isFavourite } = useAppState();

  const buttonLabel = isFavourite(comic)
    ? 'Remove from favourites'
    : 'Add to favourites';
  const handleClick = isFavourite(comic)
    ? removeFromFavourites
    : addToFavourites;
  return (
    <button className='button js-add' onClick={() => handleClick(comic)}>
      {buttonLabel}
    </button>
  );
};

export const Comic = ({ comic }) => {
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';

  return (
    <li className='comic-item'>
      <div className='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <FavouritesButton comic={comic} />
      </div>
    </li>
  );
};
