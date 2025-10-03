import { useEffect, useRef, useState, useId } from 'react';
import chevronIcon from '../assets/chevron.svg';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(Boolean(defaultOpen)); // ensure boolean
  const panelRef = useRef(null);
  const id = useId(); // stable id for aria attributes

  useEffect(() => {
    // open/close animation
    const el = panelRef.current;
    if (!el) return;

    const contentH = el.scrollHeight; // 1 on mesure le contenu

    if (open) {
      // ouverture
      el.style.height = `${el.clientHeight}px`; // on fixe la hauteur
      requestAnimationFrame(() => {
        // on separe les etapes et declenche la transition
        el.style.height = `${contentH}px`; // on met la hauteur finale
      });

      const onEnd = () => {
        // on remet auto pour que ca s'adapte si le contenu change
        el.style.height = 'auto';
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd); // on attend la fin de la transition
    } else {
      // fermeture
      const current = el.clientHeight;
      el.style.height = `${current}px`; // on fixe la hauteur
      requestAnimationFrame(() => {
        // on separe les etapes et declenche la transition
        el.style.height = '0px';
      });
    }
  }, [open]); // on relance a chaque changement d'etat open/close

  return (
    <section className={`accordion ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="accordion__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        id={`btn-${id}`}
      >
        <span className="accordion__title">{title}</span>
        <img src={chevronIcon} alt="" className="accordion__chevron" />
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        className="accordion__panel"
        ref={panelRef}
      >
        <div className="accordion__inner">{children}</div>
      </div>
    </section>
  );
}
