import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const els = document.querySelectorAll("main h1, main h2, main h3");
    const items = Array.from(els).map(el => ({
      id: el.id,
      text: el.textContent,
      level: 
      el.tagName === "H1"
        ? 1
        : el.tagName === "H2"
        ? 2
        : 3
    }));
    setHeadings(items);
  }, []);

  return (
    <nav className="toc">
      <h2>Contenido</h2>
      <ul>
        {headings.map(h => (
          <li key={h.id} style={{ marginLeft: `${(h.level - 1) * 1}em`}}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}