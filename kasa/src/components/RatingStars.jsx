export default function RatingStars({ value = 0, outOf = 5 }) {
  const n = Math.max(0, Math.min(outOf, Number(value))); // on declare n entre 0 et outOf
  return (
    <div className="rating" aria-label={`Note ${n} sur ${outOf}`}>
      {Array.from({ length: outOf }).map(
        (
          _,
          i // on cree un tableau de longueur outOf
        ) => (
          <span key={i} className={i < n ? 'star star--full' : 'star'}>
            ★
          </span> // etoile pleine si i < n, sinon vide
        )
      )}
    </div>
  );
}
