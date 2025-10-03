import logofooter from '../assets/logofooter.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logofoot">
        <img src={logofooter} alt="Logo Kasa" />
      </div>
      <div className="container footer__inner">
        <div className="footer__copy">© 2020 Kasa. Tous droits réservés</div>
      </div>
    </footer>
  );
}
