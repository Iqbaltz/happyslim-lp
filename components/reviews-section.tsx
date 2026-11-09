"use client";

import { useRef } from "react";
import { reviews, type Review } from "@/lib/content";
import { storeStats } from "@/lib/site";
import { ArrowLeft, ArrowRight } from "./icons";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="border-y border-line py-4">
      <blockquote className="text-xs leading-relaxed text-muted">{review.text}</blockquote>
      <figcaption className="mt-3">
        <span className="block text-sm">{review.user}</span>
        <span className="mt-1.5 block text-[10px] text-muted">{review.meta}</span>
      </figcaption>
    </figure>
  );
}

export function StoreStats({ className = "", align = "center" }: { className?: string; align?: "center" | "left" }) {
  return (
    <dl className={`grid grid-cols-3 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {storeStats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse gap-1">
          <dt className="text-sm text-muted md:text-base">{s.label}</dt>
          <dd className="text-3xl font-light md:text-5xl">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ReviewsSection() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "pill-dashed hidden size-9 shrink-0 place-items-center text-muted transition-colors hover:text-ink md:grid";

  return (
    <section aria-labelledby="reviews-title" className="container-page py-16 md:py-20">
      <h2 id="reviews-title" className="sr-only">Penilaian pelanggan</h2>
      <div className="flex items-center gap-6">
        <button type="button" onClick={() => scroll(-1)} aria-label="Ulasan sebelumnya" className={arrow}>
          <ArrowLeft />
        </button>
        <div className="min-w-0 flex-1">
          <StoreStats className="mx-auto max-w-2xl" />
          <ul
            ref={track}
            className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto md:gap-8"
          >
            {reviews.map((r, i) => (
              <li key={i} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] md:w-[calc((100%-64px)/3)]">
                <ReviewCard review={r} />
              </li>
            ))}
          </ul>
        </div>
        <button type="button" onClick={() => scroll(1)} aria-label="Ulasan berikutnya" className={arrow}>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
