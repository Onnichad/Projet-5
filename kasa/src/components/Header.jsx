import { NavLink, Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo Kasa" />
        </Link>
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
