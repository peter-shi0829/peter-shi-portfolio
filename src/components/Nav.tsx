"use client";

import { useState } from "react";

const tabs = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Peter Shi
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {tabs.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className="label text-graphite transition-colors hover:text-ink"
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1">
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="grid gap-1 border-t border-ink/15 px-6 py-4 md:hidden">
          {tabs.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                onClick={() => setOpen(false)}
                className="label block py-2 text-graphite hover:text-ink"
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
