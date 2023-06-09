import CardRegular from './CardRegular';

export default function Recommended() {
  return (
    <section className="pl-4">
      <h2 className=" font-light text-xl mb-4">Recommended</h2>
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
