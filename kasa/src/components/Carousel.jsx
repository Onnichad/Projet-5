import { useEffect, useRef, useState, useCallback } from "react";

export default function Carousel({ pictures = [], alt = "" }) {
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);
  const count = Array.isArray(pictures) ? pictures.length : 0;

  // Handlers toujours définis (les hooks ne dépendent pas d'une condition)
  const prev = useCallback(() => {
    // évite division par 0 si count === 0
    const c = Math.max(count, 1);
    setIndex((i) => (i - 1 + c) % c);
  }, [count]);

  const next = useCallback(() => {
    const c = Math.max(count, 1);
    setIndex((i) => (i + 1) % c);
  }, [count]);

  // Accessibilité clavier : actif seulement si plusieurs images
  useEffect(() => {
    const onKey = (e) => {
      if (count < 2) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, prev, next]);

  // Scroll/centrage image courante
  useEffect(() => {
    if (imgRef.current) imgRef.current.scrollIntoView({ block: "nearest" });
  }, [index]);

  // ✅ Le return peut être conditionnel, les hooks ont déjà été appelés
  if (!count) return null;

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
