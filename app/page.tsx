import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { faqs } from "@/lib/content";
import { waLink } from "@/lib/site";
import { ProductCard } from "@/components/product-card";
import { ReviewsSection } from "@/components/reviews-section";
import { Faq } from "@/components/faq";
import { ArrowRight } from "@/components/icons";

const habits = [
  { title: "Pola makan seimbang", body: "Pilih makanan bergizi yang mendukung kesehatan tubuh." },
  { title: "Aktif bergerak", body: "Lakukan aktivitas fisik sesuai kemampuan dan kesukaanmu." },
  { title: "Cukupi kebutuhan air", body: "Bantu tubuh tetap terhidrasi setiap hari." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[640px] items-end overflow-hidden text-white md:min-h-[720px] lg:h-dvh lg:max-h-[960px]">
        <Image
          src="/images/hero-model-waist.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-black/20 to-black/30" />
        <div className="container-page pb-14 md:pb-20">
          <h1 className="max-w-2xl text-4xl leading-[1.1] font-light md:text-6xl">
            Pilihan yang Terinspirasi dari Alam, untuk Perjalanan Hidup yang Lebih Sehat
          </h1>
          <p className="mt-6 max-w-sm text-sm text-white/80">
            Kenali pilihan suplemen HappySlim dan temukan rutinitas yang sesuai dengan kebutuhanmu.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["gallery-model-face", "gallery-model-shoulder"].map((n) => (
                <span key={n} className="relative size-8 overflow-hidden rounded-full ring-2 ring-white/70">
                  <Image src={`/images/${n}.webp`} alt="" fill sizes="32px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="text-xs leading-tight">
              <span className="font-semibold">1450+ Pembeli</span>
              <span className="block text-white/70">Telah merasakan manfaat HappySlim</span>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-wider uppercase">
            <Link href="/katalog" className="border-b border-white/70 pb-1 hover:border-white">
              Jelajahi Produk
            </Link>
            <span aria-hidden className="h-4 w-px bg-white/50" />
            <a href={waLink("Halo HappySlim, saya ingin konsultasi diet gratis.")} target="_blank" rel="noopener noreferrer" className="border-b border-white/70 pb-1 hover:border-white">
              Konsultasi diet gratis
            </a>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section aria-labelledby="about-title" className="container-page grid gap-10 pt-16 md:grid-cols-[1fr_1.4fr] md:pt-24">
        <div>
          <h2 id="about-title" className="text-4xl leading-tight font-light md:text-5xl">
            Tentang <br className="hidden md:block" />HappySlim
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            HappySlim.id adalah merek suplemen herbal untuk diet dan kontrol berat badan, dan juga menghadirkan produk perawatan wajah berupa serum.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Kami berkomitmen untuk menghadirkan produk berkualitas dengan bahan pilihan alami, serta siap membantu melalui konsultasi kebutuhan diet kamu.
          </p>
          <Link href="/tentang" className="mt-6 inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:underline hover:underline-offset-4">
            Selengkapnya <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/product-lineup-all.webp" alt="Seluruh rangkaian produk HappySlim di atas kain linen" fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/model-face-mask.webp" alt="Model mengaplikasikan perawatan wajah" fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover object-left" />
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Products */}
      <section aria-labelledby="products-title" className="container-page pb-16 md:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 id="products-title" className="text-3xl font-light md:text-4xl">Produk Kami</h2>
          <Link href="/katalog" className="inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:underline hover:underline-offset-4">
            Lihat katalog <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <ul className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug} className="flex">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>

      {/* Habits */}
      <section aria-labelledby="habits-title" className="relative isolate overflow-hidden text-white">
        <Image src="/images/lifestyle-model-stretching.webp" alt="" fill sizes="100vw" className="-z-10 object-cover object-[40%_center]" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/40 via-black/10 to-black/50" />
        <div className="container-page grid min-h-[560px] gap-10 py-16 md:min-h-[640px] md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <h2 id="habits-title" className="max-w-md self-end text-4xl leading-tight font-light md:text-5xl">
            Rutinitas kecil, dijalani konsisten
          </h2>
          <ul className="max-w-56 space-y-8 self-center md:mr-10">
            {habits.map((h) => (
              <li key={h.title}>
                <h3 className="text-xl leading-snug">{h.title}</h3>
                <p className="mt-2 text-xs text-white/75">{h.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="container-page py-16 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="faq-title" className="text-3xl font-light md:text-4xl">Pertanyaan Umum</h2>
          <Link href="/testimoni-faq#faq" className="inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:underline hover:underline-offset-4">
            Lihat testimoni dan FAQ lebih lengkap <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <Faq items={faqs.filter((f) => f.featured)} />
      </section>
    </>
  );
}
