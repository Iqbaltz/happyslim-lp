import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali HappySlim: perjalanan, nilai, dan komitmen kami untuk menemani gaya hidup sehatmu.",
};

const values = [
  { title: "Peduli pada Konsumen", body: "Memahami kebutuhan dan mengutamakan kenyamanan konsumen dalam setiap langkah." },
  { title: "Mengutamakan Kualitas", body: "Berkomitmen menghadirkan produk dengan standar kualitas yang baik." },
  { title: "Terus Berinovasi", body: "Mengembangkan solusi yang relevan dengan kebutuhan gaya hidup modern." },
  { title: "Kesehatan Berkelanjutan", body: "Mendorong kebiasaan sehat yang dapat diterapkan dalam kehidupan sehari-hari." },
];

const featuresLeft = [
  { title: "Bahan Herbal", body: "Menggunakan kombinasi bahan herbal pilihan sebagai komposisi suplemen diet." },
  { title: "Kontrol Nafsu Makan", body: "Dirancang sebagai suplemen pendukung program pengelolaan berat badan." },
  { title: "4 Pilihan Varian", body: "Tersedia dalam pilihan HappySlimax, Extra, Khusus, dan Standard Hijau." },
];

const featuresRight = [
  { title: "30 Kapsul", body: "Format botol praktis dengan isi 30 kapsul untuk produk botol penuh." },
  { title: "Bersertifikat BPOM", body: "Memiliki izin edar resmi dari Badan Pengawas Obat dan Makanan." },
  { title: "4 Tahun Beroperasi", body: "Toko telah beroperasi sekitar 4 tahun dengan ratusan pembeli telah merasakan manfaatnya." },
];

const pillars = [
  { title: "01. Bahan Pilihan", body: "Menggunakan bahan-bahan yang dipilih dengan memperhatikan kualitas dan karakteristik setiap kandungannya." },
  { title: "02. Praktis untuk Rutinitas Harian", body: "Dirancang agar mudah dikonsumsi dan dapat menjadi bagian dari aktivitas sehari-hari." },
  // The design repeats "01. Bahan Pilihan" here; title adjusted to match its body copy.
  { title: "03. Pendamping Gaya Hidup Sehat", body: "Menjadi pelengkap perjalanan Anda dalam membangun pola hidup yang lebih sehat dan seimbang." },
  { title: "04. Fokus pada Kualitas", body: "Mengutamakan kualitas produk dan informasi yang jelas agar konsumen dapat memilih dengan lebih percaya diri." },
];

function FeatureBox({ title, body }: { title: string; body: string }) {
  return (
    <li className="border border-line bg-cream p-4">
      <h3 className="border-b border-line pb-2 text-sm">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">{body}</p>
    </li>
  );
}

export default function TentangPage() {
  return (
    <>
      <section className="container-page pt-10 pb-16 md:pt-14 md:pb-24">
        <h1 className="max-w-3xl text-4xl leading-[1.1] font-light md:text-6xl">
          Perjalanan Menuju Hidup Sehat Dimulai dari Sini
        </h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-muted md:max-w-4xl md:grid-cols-2 md:gap-10">
          <p>Kami percaya bahwa hidup sehat bukan tentang perubahan besar dalam semalam, melainkan tentang kebiasaan baik yang dilakukan secara konsisten.</p>
          <p>HappySlim hadir untuk menemani perjalanan Anda menuju gaya hidup yang lebih sehat, seimbang, dan penuh percaya diri.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-[1fr_1fr_1.3fr] md:gap-4">
          <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[420px]">
            <Image src="/images/happyslimax-in-hand.webp" alt="Botol HappySlimax dipegang di tangan" fill preload sizes="(min-width: 768px) 28vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[420px]">
            <Image src="/images/model-face-mask.webp" alt="Model mengaplikasikan perawatan wajah" fill sizes="(min-width: 768px) 28vw, 50vw" className="object-cover object-left" />
          </div>
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden md:col-span-1 md:aspect-auto md:h-[420px]">
            <Image src="/images/serum-chromosome-podium.webp" alt="Booster serum dan Chromosome DNA di atas podium" fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-labelledby="story-title" className="container-page pb-16 md:pb-24">
        <h2 id="story-title" className="text-3xl font-light md:text-4xl">Berawal dari Keinginan untuk Hidup Lebih Baik</h2>
        <p className="mt-4 max-w-5xl text-sm leading-relaxed text-muted">
          HappySlim lahir dari sebuah keyakinan sederhana: setiap orang berhak mendapatkan kesempatan untuk menjalani hidup yang lebih sehat dan merasa nyaman dengan dirinya sendiri. Kami memahami bahwa perjalanan menuju hidup sehat tidak selalu mudah. Karena itu, HappySlim berkomitmen menghadirkan produk yang dapat menjadi bagian dari rutinitas kesehatan Anda.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title}>
              <h3 className="max-w-36 text-xl leading-snug">{v.title}</h3>
              <p className="mt-3 max-w-56 text-xs leading-relaxed text-muted">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Keunggulan HappySlimax" className="container-page pb-16 md:pb-24">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_1.1fr_1fr]">
          <ul className="space-y-4 md:space-y-10">
            {featuresLeft.map((f) => <FeatureBox key={f.title} {...f} />)}
          </ul>
          <div className="relative mx-auto aspect-[1306/1839] w-full max-w-xs md:max-w-sm">
            <Image src="/images/happyslimax-bottle-capsules-cutout.webp" alt="Botol HappySlimax terbuka dengan kapsul herbal berwarna merah" fill sizes="(min-width: 768px) 30vw, 80vw" className="object-contain" />
          </div>
          <ul className="space-y-4 md:space-y-10">
            {featuresRight.map((f) => <FeatureBox key={f.title} {...f} />)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="pillars-title" className="container-page pb-16 md:pb-24">
        <h2 id="pillars-title" className="text-3xl leading-tight font-light md:text-4xl">
          Lebih dari Sekadar Produk, <br className="hidden sm:block" />Teman dalam Perjalanan Sehatmu
        </h2>
        <p className="mt-4 text-sm text-muted">
          Kami ingin menghadirkan produk yang tidak hanya praktis digunakan, tetapi juga dapat mendukung rutinitas kesehatan Anda.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <li key={p.title} className="border border-line p-5 md:p-6">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cta-title" className="container-page pb-16 md:pb-24">
        <div className="grid bg-espresso text-cream md:grid-cols-2 md:items-center">
          <div className="px-6 py-12 md:px-12 md:py-16">
            <h2 id="cta-title" className="max-w-sm text-4xl leading-tight font-light md:text-5xl">
              Mari Mulai Perjalanan Sehatmu Bersama HappySlim!
            </h2>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-cream/70">
              Temukan produk yang sesuai dengan kebutuhanmu dan jadikan hidup sehat sebagai bagian dari keseharian.
            </p>
            <Link href="/katalog" className="pill-dashed mt-8 inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase transition-colors hover:bg-cream/10">
              Jelajahi produk kami <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] md:-my-10 md:mr-10 md:aspect-[5/4]">
            <Image src="/images/serum-in-hand-water.webp" alt="Booster serum Chromosome DNA di tangan dengan pantulan air" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
