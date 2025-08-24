import { useParams, Navigate } from "react-router-dom";
import data from "../data/listings.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import RatingStars from "../components/RatingStars";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

export default function Logement() {
  const { id } = useParams();
  const item = data.find((l) => String(l.id) === String(id));

  if (!item) return <Navigate to="/404" replace />;

  return (
    <>
      <Header />
      <main className="container logement">
        <Carousel pictures={item.pictures} alt={item.title} />

        <div className="logement__header">
          <div>
            <h1 className="logement__title">{item.title}</h1>
            <p className="logement__location">{item.location}</p>
            <div className="logement__tags">
              {item.tags?.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="logement__meta">
            <RatingStars value={Number(item.rating)} />
            {item.host && (
              <div className="host">
                <span className="host__name">{item.host.name}</span>
                <img
                  className="host__avatar"
                  src={item.host.picture}
                  alt={item.host.name}
                />
              </div>
            )}
          </div>
        </div>

        <div className="logement__columns">
          <Accordion title="Description">
            <p>{item.description}</p>
          </Accordion>
          <Accordion title="Équipements">
            <ul className="equip">
              {item.equipments?.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}
