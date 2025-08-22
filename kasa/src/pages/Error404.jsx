import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retourner à l’accueil</Link>
    </div>
  );
}
