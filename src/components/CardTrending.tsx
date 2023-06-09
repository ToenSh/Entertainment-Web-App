import { useState } from 'react';
import imageTrending from '../beyond-earth/trending/small.jpg';
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../assets/icon-bookmark-full.svg';
import movieIcon from '../assets/icon-category-movie.svg';

export default function CardTrending() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <article className=" max-w-[240px] max-h-[140px] relative ">
      <img src={imageTrending} alt="beyond-earth" className="rounded-lg" />
      <button
        className="bg-dark-blue opacity-50 w-8 h-8 rounded-full flex items-center justify-center absolute top-2 right-2"
        onClick={() => setBookmarked((prevBookmarked) => !prevBookmarked)}
      >
        <img
          src={bookmarkEmpty}
          alt="bookmark"
          className={`${bookmarked ? 'hidden' : 'block'}`}
        />
        <img
          src={bookmarkFull}
          alt="remove-bookmark"
          className={`${!bookmarked ? 'hidden' : 'block'}`}
        />
      </button>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2 opacity-75">
          <span>2019 </span>
          &bull;
          <span className="flex items-center gap-2">
            <img src={movieIcon} alt="movie-icon" />
            Movie
          </span>
          &bull;
          <span> PG</span>
        </div>
        <h3>Beyond Earth</h3>
      </div>
    </article>
  );
}
