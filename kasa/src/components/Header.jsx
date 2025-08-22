import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Kasa
      </Link>
      <nav className="nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}
