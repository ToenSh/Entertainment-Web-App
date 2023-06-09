import { useState } from 'react';
import imageRegular from '../the-great-lands/regular/small.jpg';
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../assets/icon-bookmark-full.svg';
import movieIcon from '../assets/icon-category-movie.svg';

export default function CardRegular() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <article className="relative max-w-[164px]">
      <img src={imageRegular} alt="the-great-lands" className=" rounded-lg" />
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
      <div>
        <div className="flex items-center gap-2 opacity-75 text-xs pb-1 pt-2">
          <span>2019</span>
          &bull;
          <img src={movieIcon} alt="movie-icon" />
          &bull;
          <span>E</span>
        </div>
        <h3>The Great Lands</h3>
      </div>
    </article>
  );
}
