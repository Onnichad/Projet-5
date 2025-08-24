export default function Card({ title, cover }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={cover} alt={title} loading="lazy" />
        <div className="card__overlay">
          <h3 className="card__title">{title}</h3>
        </div>
      </div>
    </article>
  );
}
