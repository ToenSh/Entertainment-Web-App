import Navigation from '../components/Navigation';
import Recommended from '../components/Recommended';
import Search from '../components/Search';
import Trending from '../components/Trending';
import Bookmarks from './Bookmarks';
import Movies from './Movies';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-dark-blue min-h-screen">
        <Search />
        {/* <Trending />
        <Recommended /> */}
        <Bookmarks />
      </main>
    </>
  );
}
