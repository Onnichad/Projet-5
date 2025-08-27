import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import aboutBanner from "../assets/backgroundpropos.png";

export default function About() {
  return (
    <>
      <Header />
      <main className="container">
        <div
          className="about__banner"
          style={{ backgroundImage: `url(${aboutBanner})` }}
          role="img"
          aria-label="Bannière de la page À propos"
        />

        <section className="about__content">
          <Accordion title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Accordion>
          <Accordion title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Accordion>
          <Accordion title="Service">
            <p>
              La qualité du service est au cœur de notre engagement chez Kasa.
              Nous veillons à ce que chaque interaction, que ce soit avec nos
              hôtes ou nos locataires, soit empreinte de respect et de
              bienveillance.
            </p>
          </Accordion>
          <Accordion title="Sécurité">
            <p>
              Content: La sécurité est la priorité de Kasa. Aussi bien pour nos
              hôtes que pour les voyageurs, chaque logement correspond aux
              critères de sécurité établis par nos services. En laissant une
              note aussi bien à l'hôte qu'au locataire, cela permet à nos
              équipes de vérifier que les standards sont bien respectés. Nous
              organisons également des ateliers sur la sécurité domestique pour
              nos hôtes.
            </p>
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}
