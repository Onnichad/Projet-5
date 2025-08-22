export default function Card({ title, cover }) {
  return (
    <article className="card">
      {cover && <img src={cover} alt={title} />}
      <h3 className="card__title">{title}</h3>
    </article>
  );
}
