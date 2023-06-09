import CardRegular from '../components/CardRegular';

export default function Bookmarks() {
  return (
    <>
      <section className="pl-4 mb-6">
        <h2 className=" font-light text-xl mb-4">Bookmarked Movies</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
        </div>
      </section>
      <section className="pl-4">
        <h2 className=" font-light text-xl mb-4">Bookmarked TV Series</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
          <CardRegular />
        </div>
      </section>
    </>
  );
}
