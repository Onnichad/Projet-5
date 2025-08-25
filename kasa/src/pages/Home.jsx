import { Link } from "react-router-dom";
import data from "../data/listings.json";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="grid">
          {data.map((item) => (
            <Link
              to={`/logement/${item.id}`}
              key={item.id}
              className="card-link"
            >
              <Card title={item.title} cover={item.cover} />
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
