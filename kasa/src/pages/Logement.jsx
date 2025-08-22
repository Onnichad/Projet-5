import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams(); // on récupère l'id passé dans l’URL

  return (
    <div>
      <h1>Page logement</h1>
      <p>Affichage du logement avec l’ID : {id}</p>
    </div>
  );
}
