import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`accordion ${open ? "is-open" : ""}`}>
      <button
        className="accordion__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="accordion__chevron">{open ? "▲" : "▼"}</span>
      </button>

      <div className="accordion__panel" hidden={!open}>
        {children}
      </div>
    </section>
  );
}
