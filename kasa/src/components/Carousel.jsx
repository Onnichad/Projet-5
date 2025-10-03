import { useEffect, useRef, useState, useCallback } from 'react';

export default function Carousel({ pictures = [], alt = '' }) {
  // tableau d'images
  const [index, setIndex] = useState(0); // image courante
  const imgRef = useRef(null); //  reference a l'image
  const count = Array.isArray(pictures) ? pictures.length : 0; // nombre d'images

  const prev = useCallback(() => {
    // image precedente
    const c = Math.max(count, 1); // au moins 1 pour eviter la division par 0
    setIndex((i) => (i - 1 + c) % c); //  modulo pour boucler
  }, [count]); // dependance count

  const next = useCallback(() => {
    // image suivante
    const c = Math.max(count, 1); // au moins 1 pour eviter la division par 0
    setIndex((i) => (i + 1) % c); // modulo pour boucler
  }, [count]); // dependance count

  useEffect(() => {
    // gestion des fleches gauche/droite
    const onKey = (e) => {
      if (count < 2) return; // si une seule image, on ne fait rien
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey); // on ecoute les touches
    return () => window.removeEventListener('keydown', onKey); // on nettoie
  }, [count, prev, next]); // dependances count, prev, next

  useEffect(() => {
    // scroll to image for screen readers
    if (imgRef.current) imgRef.current.scrollIntoView({ block: 'nearest' });
  }, [index]);

  if (!count) return null; // si pas d'images, on ne rend rien

  return (
    <div className="carousel" aria-roledescription="carousel">
      <img
        ref={imgRef}
        className="carousel__img"
        src={pictures[index]}
        alt={`${alt} — photo ${index + 1} sur ${count}`}
        loading="eager"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={prev}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            type="button"
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
