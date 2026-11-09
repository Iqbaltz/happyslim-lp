import type { Metadata } from "next";
import Image from "next/image";
import { faqs, reviews } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Faq } from "@/components/faq";
import { ReviewCard, StoreStats } from "@/components/reviews-section";
import { ArrowRight, Star } from "@/components/icons";

export const metadata: Metadata = {
  title: "Testimoni dan FAQ",
  description: "Pengalaman pelanggan HappySlim dan jawaban atas pertanyaan yang sering diajukan.",
};

const services = [
  { title: "Konsultasi sebelum membeli", body: "Tim kami siap membantu menjawab pertanyaan mengenai pilihan produk dan informasi penggunaannya melalui chat." },
  { title: "Pengemasan yang diperhatikan", body: "Pesanan dikemas menggunakan bubble wrap dan kotak untuk membantu menjaga kondisi produk selama pengiriman." },
  { title: "Respons yang ramah", body: "Kami berupaya memberikan respons yang informatif dan membantu setiap pelanggan sesuai kebutuhan informasinya." },
  { title: "Informasi yang transparan", body: "Kami ingin pelanggan memahami informasi produk, cara penggunaan, dan ketentuan pembelian sebelum melakukan pemesanan." },
];

const photos = [
  { src: "/images/standar-hijau-in-hand.webp", alt: "Model memegang botol HappySlim Standar Hijau" },
  { src: "/images/lifestyle-two-women-smiling.webp", alt: "Dua perempuan tersenyum dalam cahaya hangat" },
  { src: "/images/serum-model-holding.webp", alt: "Model memegang booster serum Chromosome DNA" },
];

export default function TestimoniFaqPage() {
  const featured = reviews[0];

  return (
    <>
      <section className="container-page pt-10 md:pt-14">
        <h1 className="text-4xl leading-[1.1] font-light md:text-6xl">Cerita Nyata, Pengalaman Berharga</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Setiap perjalanan memiliki cerita. Kenali pengalaman pelanggan HappySlim dan temukan informasi yang membantu Anda membuat keputusan dengan lebih percaya diri.
        </p>
        <StoreStats align="left" className="mt-8 max-w-lg" />
      </section>

      <section aria-labelledby="testi-title" className="container-page py-16 md:py-24">
        <h2 id="testi-title" className="sr-only">Testimoni pelanggan</h2>
        <figure className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-2 text-muted" aria-label="5 dari 5 bintang">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} />)}
          </div>
          {/* Featured quote uses a real marketplace review (the design had English placeholder text). */}
          <blockquote className="mt-6 text-2xl leading-snug md:text-3xl">“{featured.text.replace(/,$/, "")}!”</blockquote>
          <figcaption className="mt-5 text-sm text-muted">{featured.user} — {featured.meta.split("|")[1]?.trim()}</figcaption>
        </figure>
        <ul className="mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={i}><ReviewCard review={r} /></li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="care-title" className="container-page pb-16 md:pb-24">
        <header className="mx-auto max-w-xl text-center">
          <h2 id="care-title" className="text-4xl leading-tight font-light md:text-5xl">Kami Hadir untuk Mendampingi Anda</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Bagi HappySlim, pelayanan pelanggan bukan hanya tentang transaksi. Kami ingin setiap pelanggan mendapatkan informasi yang jelas dan pengalaman berbelanja yang nyaman.
          </p>
        </header>
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 md:gap-4">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 16rem, 33vw" className="object-cover" />
            </li>
          ))}
        </ul>
        <ul className="mt-12 grid sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.title} className={`py-6 sm:px-8 ${i % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"} ${i < 2 ? "border-b" : "border-b sm:border-b-0"} border-line`}>
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs tracking-wider uppercase hover:underline hover:underline-offset-4">
            Ada yang ingin ditanyakan? WhatsApp kami <ArrowRight className="size-3.5" />
          </a>
        </p>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="container-page scroll-mt-6 pb-16 md:pb-24">
        <div className="bg-espresso px-5 py-10 text-cream md:px-10 md:py-14">
          <h2 id="faq-title" className="text-3xl font-light md:text-5xl">Pertanyaan Umum Soal Happy Slim</h2>
          <div className="mt-8">
            <Faq items={faqs} tone="dark" withFilters />
          </div>
        </div>
      </section>
    </>
  );
}
