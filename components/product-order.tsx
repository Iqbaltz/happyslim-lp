"use client";

import Image from "next/image";
import { useState } from "react";
import { waLink } from "@/lib/site";
import { ArrowLeft, ArrowRight, ChevronDown, Minus, Plus } from "./icons";

export function ProductOrder({ name, variants }: { name: string; variants: string[] }) {
  const [variant, setVariant] = useState("");
  const [qty, setQty] = useState(1);

  const message =
    `Halo HappySlim, saya ingin order ${name}` +
    (variant ? ` (varian: ${variant})` : "") +
    `, jumlah ${qty}.`;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <label className="relative flex-1">
          <span className="sr-only">Pilih varian</span>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="w-full appearance-none rounded-full border border-ink/70 bg-transparent py-2.5 pr-10 pl-4 text-xs tracking-wide uppercase"
          >
            <option value="">Pilih Varian</option>
            {variants.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
        </label>
        <div className="flex items-center gap-3" role="group" aria-label="Jumlah">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Kurangi jumlah"
            className="grid size-6 place-items-center bg-ink text-cream disabled:opacity-40"
            disabled={qty <= 1}
          >
            <Minus className="size-3.5" />
          </button>
          <output aria-live="polite" className="w-5 text-center">{qty}</output>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="Tambah jumlah"
            className="grid size-6 place-items-center bg-ink text-cream"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
      </div>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full bg-espresso py-3 text-center text-xs tracking-wider text-cream uppercase transition-colors hover:bg-ink"
      >
        Lanjut order ke WhatsApp
      </a>
    </div>
  );
}

export function ProductGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const go = (d: number) => setIndex((i) => (i + d + images.length) % images.length);
  const current = images[index];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-sand">
        <Image key={current.src} src={current.src} alt={current.alt} fill preload sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Gambar sebelumnya" className="pill-dashed grid size-7 shrink-0 place-items-center text-muted hover:text-ink">
            <ArrowLeft className="size-3.5" />
          </button>
          <ul className="grid flex-1 grid-cols-4 gap-2">
            {images.map((img, i) => (
              <li key={img.src}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Lihat gambar ${i + 1}`}
                  aria-current={i === index}
                  className="relative block aspect-square w-full overflow-hidden opacity-60 transition-opacity hover:opacity-100 aria-[current=true]:opacity-100 aria-[current=true]:ring-1 aria-[current=true]:ring-ink"
                >
                  <Image src={img.src} alt="" fill sizes="12vw" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => go(1)} aria-label="Gambar berikutnya" className="pill-dashed grid size-7 shrink-0 place-items-center text-muted hover:text-ink">
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
