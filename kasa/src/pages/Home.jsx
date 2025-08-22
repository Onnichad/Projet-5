import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Page d’accueil</h1>
      <p>Bienvenue sur Kasa !</p>
      <Link to="/about">À propos</Link>;
    </main>
  );
}
