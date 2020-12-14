import { React } from 'react';

export const Comic = ({ comic }) => {
  if (!comic.title || !comic?.images[0]?.path) return null;

  const imageUrl = comic?.images[0]?.path + '/portrait_uncanny.jpg';

  return (
    <li class='comic-item'>
      <div class='comic-card'>
        <img src={imageUrl} alt={`${comic.title} title`} />
        <h2>{comic.title}</h2>
        <button class='button js-add'>Add to favourites</button>
      </div>
    </li>
  );
};
