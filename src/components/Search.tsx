import search from '../assets/icon-search.svg';
export default function Search() {
  return (
    <div className="flex gap-4 py-6 pl-4">
      <button>
        <img src={search} alt="search" />
      </button>
      <label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for movies or TV series"
          className="bg-transparent w-56 outline-none text-white font-light text-base placeholder:text-white placeholder:opacity-50 mt-1 focus:border-b border-greyish-blue pb-2"
        />
      </label>
    </div>
  );
}
