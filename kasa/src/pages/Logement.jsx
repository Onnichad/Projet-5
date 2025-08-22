import { useParams, Navigate } from "react-router-dom";
import data from "../data/listings.json";
import Header from "../components/Header";

export default function Logement() {
  const { id } = useParams();
  const item = data.find((l) => String(l.id) === String(id));

  if (!item) return <Navigate to="/404" replace />;

  return (
    <>
      <Header />
      <main className="container">
        <h1>{item.title}</h1>
        <p>{item.location}</p>
        <img src={item.cover} alt={item.title} />
        <p>{item.description}</p>
      </main>
    </>
  );
}
