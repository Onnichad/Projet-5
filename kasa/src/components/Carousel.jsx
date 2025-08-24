import { useState } from "react";

export default function Carousel({ pictures = [], alt = "" }) {
  const [index, setIndex] = useState(0);
  const count = pictures.length;

  if (!count) return null;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="carousel" aria-roledescription="carousel">
      <img
        className="carousel__img"
        src={pictures[index]}
        alt={`${alt} — photo ${index + 1}`}
      />
      {count > 1 && (
        <>
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={prev}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={next}
            aria-label="Image suivante"
          >
            ›
          </button>
          <div className="carousel__counter" aria-live="polite">
            {index + 1}/{count}
          </div>
        </>
      )}
    </div>
  );
}
