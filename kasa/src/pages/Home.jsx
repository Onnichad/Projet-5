import { Link } from "react-router-dom";
import data from "../data/listings.json";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import homeBanner from "../assets/background.png";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div
          className="home__banner"
          style={{ backgroundImage: `url(${homeBanner})` }}
          role="img"
          aria-label="Bannière d’accueil"
        >
          <h1 className="home__banner-title">Chez vous, partout et ailleurs</h1>
        </div>

        <section className="home__gridwrap">
          <div className="home__grid">
            {data.map((item) => (
              <Link
                to={`/logement/${item.id}`}
                key={item.id}
                className="card-link"
              >
                <Card title={item.title} cover={item.cover} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
