import { useEffect, useRef, useState, useId } from "react";
import chevronIcon from "../assets/chevron.svg";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const panelRef = useRef(null);
  const id = useId();

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const contentH = el.scrollHeight;

    if (open) {
      el.style.height = `${el.clientHeight}px`;
      requestAnimationFrame(() => {
        el.style.height = `${contentH}px`;
      });

      const onEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
    } else {
      const current = el.clientHeight;
      el.style.height = `${current}px`;
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    }
  }, [open]);

  useEffect(() => {
    const el = panelRef.current;
    if (!el || !open) return;
    el.style.height = "auto";
    const newH = el.scrollHeight;
    el.style.height = `${newH}px`;
    const onEnd = () => (el.style.height = "auto");
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <section className={`accordion ${open ? "is-open" : ""}`}>
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
