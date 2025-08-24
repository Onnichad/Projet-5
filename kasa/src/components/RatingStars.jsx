export default function RatingStars({ value = 0, outOf = 5 }) {
  const n = Math.max(0, Math.min(outOf, Number(value)));
  return (
    <div className="rating" aria-label={`Note ${n} sur ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <span key={i} className={i < n ? "star star--full" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}
