import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/site";
import { Plus } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const href = `/katalog/${product.slug}`;
  return (
    <article className="group flex w-full flex-col transition-colors hover:bg-sand">
      <Link href={href} className="relative block aspect-square overflow-hidden" tabIndex={-1} aria-hidden>
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-4 pt-5 pb-4 md:px-5">
        <h3 className="text-base">
          <Link href={href} className="hover:underline hover:underline-offset-4">{product.name}</Link>
        </h3>
        <p className="mt-3 text-[11px] font-semibold tracking-wider uppercase">
          Start from {product.startFrom}
        </p>
        <p className="mt-3 max-w-72 text-xs leading-relaxed text-muted">{product.summary}</p>
        <div className="mt-auto pt-6" />
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
          <span className="text-sm">{product.unit}</span>
          <a
            href={waLink(`Halo HappySlim, saya ingin order ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-wider uppercase hover:underline hover:underline-offset-4"
          >
            Order via WhatsApp
            <span className="pill-dashed grid size-5 place-items-center"><Plus className="size-3" /></span>
          </a>
        </div>
      </div>
    </article>
  );
}
