"use client";

import { useId, useState } from "react";
import { faqCategories, type Faq as FaqItem, type FaqCategory } from "@/lib/content";
import { Minus, Plus, Search } from "./icons";

type Props = {
  items: FaqItem[];
  tone?: "light" | "dark";
  /** Show the search box and category tabs (Testimoni & FAQ page). */
  withFilters?: boolean;
};

export function Faq({ items, tone = "light", withFilters = false }: Props) {
  const [open, setOpen] = useState<string | null>(items[0]?.q ?? null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "semua">("semua");
  const baseId = useId();
  const dark = tone === "dark";

  const q = query.trim().toLowerCase();
  const visible = items.filter(
    (f) =>
      (category === "semua" || f.category === category) &&
      (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
  );

  return (
    <div>
      {withFilters && (
        <div className="mb-6 space-y-5">
          <label className="relative block">
            <span className="sr-only">Cari pertanyaan</span>
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 opacity-60" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH"
              className="w-full rounded-full border border-cream/40 bg-transparent py-2.5 pr-4 pl-10 text-xs tracking-wider placeholder:text-cream/50 focus:border-cream focus:outline-none"
            />
          </label>
          <div role="group" aria-label="Kategori pertanyaan" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto">
            {faqCategories.map((c) => (
              <button
                key={c.value}
                type="button"
                aria-pressed={category === c.value}
                onClick={() => setCategory(c.value)}
                className="shrink-0 rounded-full px-3 py-1.5 text-[11px] whitespace-nowrap opacity-70 transition hover:opacity-100 aria-pressed:bg-cream/10 aria-pressed:opacity-100"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <ul className={dark ? "divide-y divide-cream/20" : "divide-y divide-line border-t border-line"}>
        {visible.map((f, i) => {
          const isOpen = open === f.q;
          const panelId = `${baseId}-p${i}`;
          return (
            <li key={f.q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg md:text-xl"
                >
                  {f.q}
                  {isOpen ? <Minus className="size-4 shrink-0 opacity-60" /> : <Plus className="size-4 shrink-0 opacity-60" />}
                </button>
              </h3>
              <div
                id={panelId}
                hidden={!isOpen}
                className={`-mt-2 max-w-3xl pb-5 text-sm leading-relaxed ${dark ? "text-cream/70" : "text-muted"}`}
              >
                {f.a}
              </div>
            </li>
          );
        })}
        {visible.length === 0 && (
          <li className="py-6 text-sm opacity-70">Tidak ada pertanyaan yang cocok. Coba kata kunci lain.</li>
        )}
      </ul>
    </div>
  );
}
