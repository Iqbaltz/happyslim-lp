import type { Metadata } from "next";
import Image from "next/image";
import { comparison } from "@/lib/products";
import { waLink } from "@/lib/site";
import { CatalogGrid } from "@/components/catalog-grid";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description: "Semua produk HappySlim: HappySlimax, Standar Hijau, dan perawatan wajah.",
};

export default function KatalogPage() {
  return (
    <>
      <section className="container-page pt-12 pb-16 md:pt-16 md:pb-24">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-light md:text-7xl">Semua Produk Kami</h1>
          {/* Copy written to replace the lorem ipsum in the design. */}
          <p className="mt-5 text-sm text-muted">
            Temukan suplemen herbal dan perawatan wajah HappySlim, lalu pilih kemasan yang paling sesuai dengan kebutuhanmu.
          </p>
        </header>
        <div className="mt-12">
          <CatalogGrid />
        </div>
      </section>

      <section aria-labelledby="compare-title" className="container-page pb-16 md:pb-24">
        <div className="relative grid md:grid-cols-[minmax(0,15rem)_1fr] md:items-center">
          <div className="relative z-10 hidden aspect-[3/4] overflow-hidden md:block md:translate-x-0">
            <Image src="/images/model-typing-laptop.webp" alt="Pelanggan menghubungi HappySlim melalui laptop" fill sizes="15rem" className="object-cover" />
          </div>
          <div className="bg-sand px-5 py-10 md:-ml-24 md:py-14 md:pr-12 md:pl-36">
            <div className="md:text-right">
              <h2 id="compare-title" className="text-3xl leading-tight font-light md:text-5xl">
                Masih Bingung <br />Memilih Produk Happy Slim?
              </h2>
              <p className="mt-4 text-xs text-muted md:ml-auto md:max-w-sm">
                Setiap produk memiliki pilihan kemasan dan karakteristik yang berbeda. Kenali informasi dasarnya sebelum menentukan pilihan.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-md text-left text-[11px] tracking-wide uppercase">
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="py-3 font-semibold">Produk</th>
                    <th scope="col" className="py-3 font-semibold">Isi Kemasan</th>
                    <th scope="col" className="py-3 font-semibold">Harga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparison.map((r) => (
                    <tr key={r.product}>
                      <th scope="row" className="py-3.5 pr-4 font-normal">{r.product}</th>
                      <td className="py-3.5 pr-4 text-muted">{r.isi}</td>
                      <td className="py-3.5 text-muted">{r.harga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 md:text-right">
              <p className="text-xs text-muted md:ml-auto md:max-w-md">
                Masih Memiliki Pertanyaan Sebelum Membeli? Hubungi tim HappySlim untuk mendapatkan informasi lebih lanjut mengenai produk, varian, harga, dan cara pemesanan.
              </p>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:underline hover:underline-offset-4">
                Hubungi kami via WhatsApp
                <span className="pill-dashed grid size-6 place-items-center"><ArrowRight className="size-3" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
