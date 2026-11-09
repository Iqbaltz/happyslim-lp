"use client";

import { useState } from "react";
import { categories, products, type ProductCategory } from "@/lib/products";
import { ProductCard } from "./product-card";

export function CatalogGrid() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter kategori" className="no-scrollbar flex justify-start gap-1 overflow-x-auto sm:justify-center">
        {categories.map((c, i) => (
          <div key={c.value} className="flex shrink-0 items-center">
            {i > 0 && <span aria-hidden className="mx-3 h-4 w-px bg-line" />}
            <button
              type="button"
              aria-pressed={active === c.value}
              onClick={() => setActive(c.value)}
              className="py-1 text-sm text-muted transition-colors hover:text-ink aria-pressed:font-medium aria-pressed:text-ink"
            >
              {c.label}
            </button>
          </div>
        ))}
      </div>

      <ul className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug} className="flex">
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
