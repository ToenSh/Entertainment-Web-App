import CardRegular from '../components/CardRegular';

export default function TVSeries() {
  return (
    <section className="pl-4">
      <h2 className=" font-light text-xl mb-4">TV Series</h2>
      <div className="grid grid-cols-2 gap-y-4">
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
      </div>
    </section>
  );
}
