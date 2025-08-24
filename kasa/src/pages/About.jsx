import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement irrespectueux entraînera une exclusion de la plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes restent à votre écoute pour vous assurer une expérience agréable et réactive, avant, pendant, et après votre séjour.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Nos hôtes s’engagent à respecter un protocole stricte et nos équipes restent disponibles 24/7.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="container about">
        <div
          className="about__banner"
          role="img"
          aria-label="Paysage illustratif"
        />
        <section className="about__accordions">
          {SECTIONS.map((s) => (
            <Accordion key={s.title} title={s.title}>
              <p>{s.content}</p>
            </Accordion>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
